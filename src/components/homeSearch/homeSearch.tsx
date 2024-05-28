"use client";

import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { Form, Input, Button } from "antd";
import { useState } from "react";

import { SuburbSearch } from "../suburbSearch/suburbSearch";
import styles from "./homeSearch.module.scss";
import { Suburb } from "@/models/suburb";

export const HomeSearch = () => {
    const [selectedSuburb, setSelectedSuburb] = useState<Suburb | undefined>(
        undefined
    );

    const [query, setQuery] = useState<string | undefined>(undefined);

    const router = useRouter();

    const onSuburbSelect = (suburb: Suburb) => setSelectedSuburb(suburb);

    const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.currentTarget.value);

    const onSearchClick = () => {
        router.push(`/search/${selectedSuburb?.suburbId}/?q=${query}`);
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
                    <SuburbSearch
                        placeholder="Type Suburb, Town or Postcode"
                        variant="borderless"
                        onSuburbSelect={onSuburbSelect}
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
