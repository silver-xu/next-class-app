"use client";

import { useParams, useSearchParams } from "next/navigation";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";

import styles from "./compactSearch.module.scss";

export const CompactSearch = () => {
    const q = useSearchParams().get("q");
    const suburb = decodeURIComponent(useParams().suburb as string);

    return (
        <div className={styles.searchBox}>
            <Input
                placeholder="Arts schools"
                defaultValue={q ?? ""}
                className={styles.searchField}
                size="large"
            />
            <Space.Compact style={{ width: "100%" }}>
                <Input
                    size="large"
                    defaultValue={suburb ?? ""}
                    placeholder="Type Suburb, Town or Postcode"
                />
                <Button type="primary" size="large">
                    <SearchOutlined />
                </Button>
            </Space.Compact>
        </div>
    );
};
