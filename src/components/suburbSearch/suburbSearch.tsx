import { useState, useCallback, useEffect } from "react";
import { CloseSquareFilled } from "@ant-design/icons";
import { Suburb } from "@/models/suburb";
import debounce from "lodash.debounce";
import { AutoComplete } from "antd";
import axios from "axios";

import styles from "./suburbSearch.module.scss";

interface Option {
    id: string;
    value: string;
}

interface SuburbSearchProps {
    placeholder: string;
    defaultSuburb?: Suburb | undefined;
    variant?: "borderless" | "outlined" | "filled" | undefined;
    size?: "small" | "middle" | "large" | undefined;
    onSuburbSelect: (suburb: Suburb) => void;
}

export const SuburbSearch = (props: SuburbSearchProps) => {
    const {
        placeholder,
        variant,
        defaultSuburb,
        size,
        onSuburbSelect: triggerSuburbSelect,
    } = props;

    const [options, setOptions] = useState<Option[]>([]);
    const [suburbs, setSuburbs] = useState<Suburb[]>([]);

    const [selectedSuburb, setSelectedSuburb] = useState<Suburb | undefined>(
        defaultSuburb
    );
    const [suburbValue, setSuburbValue] = useState<string>(
        defaultSuburb?.fullName ?? ""
    );

    useEffect(() => {
        if (defaultSuburb) {
            setSelectedSuburb(defaultSuburb);
            setSuburbValue(defaultSuburb.fullName);
        }
    }, [defaultSuburb]);

    const searchSuburb = useCallback(
        async (value: string): Promise<void> => {
            const response = await axios.get("/api/suburb/search?q=" + value);

            setSuburbs(response.data);

            setOptions(
                response.data.map((suburb: Suburb) => ({
                    id: suburb.suburbId,
                    value: suburb.fullName,
                }))
            );
        },
        [options]
    );

    const onSuburbSelect = (value: string) => {
        const suburb = suburbs.find((suburb) => suburb.fullName === value);

        if (suburb) {
            setSelectedSuburb(suburb);
            triggerSuburbSelect(suburb);
        }

        setSuburbValue(value);
    };
    const onSuburbChange = (value: string) => {
        setSuburbValue(value);
    };

    const onSuburbBlur = () => {
        if (suburbValue !== selectedSuburb?.fullName) {
            setSuburbValue("");
        }
    };

    return (
        <AutoComplete
            options={options}
            placeholder={placeholder}
            variant={variant}
            onSearch={debounce(searchSuburb, 300)}
            onSelect={onSuburbSelect}
            onChange={onSuburbChange}
            onBlur={onSuburbBlur}
            value={suburbValue}
            className={styles.autoComplete}
            size={size}
            defaultValue={selectedSuburb?.fullName}
            allowClear={{ clearIcon: <CloseSquareFilled /> }}
        />
    );
};
