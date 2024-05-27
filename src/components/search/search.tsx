"use client";

import { EnvironmentOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { CompactSearch } from "../compactSearch";
import { SearchResult } from "../searchResult";
import { Header } from "../header";

import styles from "./search.module.scss";

export const Search = () => {
    const searchResults = Array.from(Array(15).keys()).map((i) => (
        <SearchResult startIndex={i % 5} />
    ));

    return (
        <div className={styles.contentWrapper}>
            <Header theme="light" />
            <CompactSearch />
            <div className={styles.floatButton}>
                <Button type="primary" href="/map-search">
                    <EnvironmentOutlined />
                    Map View
                </Button>
            </div>

            <div className={styles.searchResultWrapper}>
                <ul>{searchResults}</ul>
            </div>
        </div>
    );
};
