"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";

import styles from "./compactSearch.module.scss";

export const CompactSearch = () => (
    <div className={styles.searchBox}>
        <Input
            placeholder="Arts schools"
            value="Arts schools"
            className={styles.searchField}
            size="large"
        />
        <Space.Compact style={{ width: "100%" }}>
            <Input defaultValue="Melbourne" size="large" />
            <Button type="primary" size="large">
                <SearchOutlined />
            </Button>
        </Space.Compact>
    </div>
);
