"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";

import styles from "./search.module.scss";

export const Search = () => (
    <div className={styles.search}>
        <Form layout="vertical">
            <Form.Item label="Which Activity?">
                <Input placeholder="Arts schools" variant="borderless" />
            </Form.Item>
            <Form.Item label="Where?">
                <Input placeholder="Melbourne" variant="borderless" />
            </Form.Item>
            <Button
                type="primary"
                className={styles.searchButton}
                href="search"
                size="large"
            >
                <SearchOutlined />
                Search
            </Button>
        </Form>
    </div>
);
