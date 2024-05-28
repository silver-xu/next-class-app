"use client";

import { useParams, useSearchParams } from "next/navigation";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";

import { SuburbSearch } from "../suburbSearch/suburbSearch";
import styles from "./compactSearch.module.scss";
import { useEffect, useState } from "react";
import { Suburb } from "@/models/suburb";
import axios from "axios";
import React from "react";

export const CompactSearch = () => {
    const query = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburb as string);

    const [suburb, setSuburb] = useState<Suburb | undefined>(undefined);

    useEffect(() => {
        (async function () {
            await fetchSuburb();
        })();
    }, [suburbId]);

    const fetchSuburb = async () => {
        const response = await axios.get(`/api/suburb/${suburbId}`);
        setSuburb(response.data);
    };

    return (
        <div className={styles.searchBox}>
            <Input
                placeholder="Arts schools"
                defaultValue={query ?? ""}
                className={styles.searchField}
                size="large"
            />
            <Space.Compact style={{ width: "100%" }}>
                <SuburbSearch
                    placeholder="Type Suburb, Town or Postcode"
                    onSuburbSelect={() => {}}
                    defaultSuburb={suburb}
                    size="large"
                />
                <Button type="primary" size="large">
                    <SearchOutlined />
                </Button>
            </Space.Compact>
        </div>
    );
};
