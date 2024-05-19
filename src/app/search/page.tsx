import { EnvironmentOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import { Button } from "antd";

import { CompactSearch } from "@/components/compactSearch";
import { Header } from "@/components/header";
import styles from "./page.module.scss";

const SearchResult = dynamic(
    () =>
        import("../../components/searchResult").then((mod) => mod.SearchResult),
    { ssr: false }
);

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
                <Button type="primary">
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
