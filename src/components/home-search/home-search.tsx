"use client";

import { Form, Input, Button, AutoComplete } from "antd";
import { CloseSquareFilled } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import axios from "axios";

import { Suburb } from "../../models/suburb";

import styles from "./home-search.module.scss";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";

export const HomeSearch = () => {
    const [options, setOptions] = useState<{ value: string }[]>([]);
    const [selectedSuburb, setSelectedSuburb] = useState<string | undefined>(
        undefined
    );
    const [query, setQuery] = useState<string | undefined>(undefined);

    const router = useRouter();

    const searchSuburb = useCallback(
        async (value: string): Promise<void> => {
            const response = await axios.get("/api/suburb/search?q=" + value);

            setOptions(
                response.data.map((suburb: Suburb) => ({
                    value: `${suburb.name}, ${suburb.state} ${suburb.postcode}`,
                }))
            );
        },
        [options]
    );

    const onSuburbSelect = (value: string) => {
        setSelectedSuburb(value);
    };

    const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.currentTarget.value);

    const onSearchClick = () => {
        router.push(`/search/${selectedSuburb}/?q=${query}`);
    };

    return (
        <div className={styles.search}>
            <Form layout="vertical">
                <Form.Item label="Which Activity?">
                    <Input
                        placeholder="Arts schools"
                        variant="borderless"
                        onChange={onQueryChange}
                        name="keywords"
                    />
                </Form.Item>
                <Form.Item label="Where?">
                    <AutoComplete
                        options={options}
                        placeholder="Type Suburb, Town or Postcode"
                        variant="borderless"
                        onSearch={debounce(searchSuburb, 300)}
                        onSelect={onSuburbSelect}
                        allowClear={{ clearIcon: <CloseSquareFilled /> }}
                    />
                </Form.Item>
                <Button
                    type="primary"
                    className={styles.searchButton}
                    size="large"
                    onClick={onSearchClick}
                >
                    <SearchOutlined />
                    Search
                </Button>
            </Form>
        </div>
    );
};
