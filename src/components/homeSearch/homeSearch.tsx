"use client";

import { CloseSquareFilled } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useState } from "react";

import { SuburbSearch } from "../search/suburbSearch/suburbSearch";
import { motion, useAnimation } from "framer-motion";
import styles from "./homeSearch.module.scss";
import { slugify } from "@/utils/slugify";
import { Suburb } from "@/models/suburb";

export const HomeSearch = () => {
    const queryValidationControl = useAnimation();
    const suburbValidationControl = useAnimation();

    const [selectedSuburb, setSelectedSuburb] = useState<Suburb | undefined>(
        undefined
    );

    const [query, setQuery] = useState<string | undefined>(undefined);

    const onSuburbSelect = (suburb: Suburb) => setSelectedSuburb(suburb);

    const onSuburbDeselect = () => setSelectedSuburb(undefined);

    const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setQuery(e.currentTarget.value);

    const onSearchClick = () => {
        if (!query || query === "") {
            queryValidationControl.start("start");
            setTimeout(() => queryValidationControl.stop(), 1000);
        }

        if (!selectedSuburb) {
            suburbValidationControl.start("start");
            setTimeout(() => suburbValidationControl.stop(), 1000);
        }

        if (query && query !== "" && selectedSuburb) {
            window.location.href = `/search/${selectedSuburb?.suburbId}/${slugify(selectedSuburb?.fullName)}?q=${query}`;
        }
    };

    const getRandomTransformOrigin = () => {
        const value = (50 + 40 * Math.random()) / 100;
        const value2 = (50 + 36 * Math.random()) / 100;
        return {
            originX: value,
            originY: value2,
        };
    };

    const variants = {
        start: (i: number) => ({
            rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
            transition: {
                delay: getRandomDelay(),
                repeat: Infinity,
                duration: randomDuration(),
            },
        }),
        reset: {
            rotate: 0,
        },
    };

    const getRandomDelay = () => -(Math.random() * 0.7 + 0.05);

    const randomDuration = () => Math.random() * 0.07 + 0.13;

    return (
        <div className={styles.search}>
            <Form layout="vertical">
                <Form.Item label="Which Activity?">
                    <motion.div
                        style={{
                            ...getRandomTransformOrigin(),
                        }}
                        variants={variants}
                        animate={queryValidationControl}
                    >
                        <Input
                            placeholder="Arts schools"
                            autoComplete="off"
                            variant="borderless"
                            onChange={onQueryChange}
                            name="keywords"
                            className={styles.input}
                            allowClear={{
                                clearIcon: (
                                    <CloseSquareFilled
                                        style={{ fontSize: "20px" }}
                                    />
                                ),
                            }}
                        />
                    </motion.div>
                </Form.Item>
                <Form.Item label="Where?">
                    <motion.div
                        style={{
                            ...getRandomTransformOrigin(),
                        }}
                        variants={variants}
                        animate={suburbValidationControl}
                    >
                        <SuburbSearch
                            placeholder="Type Suburb, Town or Postcode"
                            variant="borderless"
                            onSuburbSelect={onSuburbSelect}
                            onSuburbDeselect={onSuburbDeselect}
                        />
                    </motion.div>
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
