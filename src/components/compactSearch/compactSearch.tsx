"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";

import styles from "./compactSearch.module.scss";

export const CompactSearch = () => (
    <div className={styles.contentWrapper}>
        <div className={styles.searchBox}>
            <Input
                placeholder="Arts schools"
                value="Arts schools"
                className={styles.searchField}
            />
            <Space.Compact style={{ width: "100%" }}>
                <Input defaultValue="Melbourne" />
                <Button type="primary">
                    <SearchOutlined />
                </Button>
            </Space.Compact>
        </div>
    </div>
);
