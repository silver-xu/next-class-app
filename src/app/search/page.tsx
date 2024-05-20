import { EnvironmentOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { CompactSearch } from "@/components/compactSearch";
import { SearchResult } from "@/components/searchResult";
import { Header } from "@/components/header";
import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

export default function Search() {
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
}
