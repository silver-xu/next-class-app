"use client";

import { useParams, useSearchParams } from "next/navigation";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button, Space } from "antd";

import {
    ChangeEvent,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { SuburbSearch } from "../suburbSearch/suburbSearch";
import styles from "./compactSearch.module.scss";
import { SearchContext } from "../search";
import { Suburb } from "@/models/suburb";
import axios from "axios";
import React from "react";

export const CompactSearch = () => {
    const q = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburb as string);

    const {
        searchSuburb,
        setSearchSuburb,
        selectedSuburb,
        setSelectedSuburb,
        setSearchResult,
    } = useContext(SearchContext);

    const [query, setQuery] = useState<string | undefined>(q as string);

    const [queryError, setQueryError] = useState<boolean>(false);
    const [suburbError, setSuburbError] = useState<boolean>(false);

    useEffect(() => {
        (async function () {
            setSearchSuburb(selectedSuburb);
            await fetchSuburb();
            await searchListings(query!, selectedSuburb!);
        })();
    }, [suburbId]);

    const fetchSuburb = async () => {
        const response = await axios.get(`/api/suburb/${suburbId}`);

        setSearchSuburb(response.data);
        setSelectedSuburb(response.data);
    };

    const searchListings = useCallback(
        async (query: string, suburb: Suburb) => {
            const suburbParam = suburb?.suburbId ?? suburbId;

            const response = await axios.get(
                `/api/listing/search?suburb=${suburbParam}&q=${query}&radius=10000`
            );

            setSearchResult(response.data);
        },
        [suburbId, query]
    );

    const onSearchClicked = async () => {
        setQueryError(!query || query === "");
        setSuburbError(!searchSuburb);

        if (query && query !== "" && selectedSuburb) {
            await searchListings(query, selectedSuburb);
            setSearchSuburb(selectedSuburb);
        }
    };

    const onQueryChange = (e: ChangeEvent<HTMLInputElement>) =>
        setQuery(e.currentTarget.value);

    const onSuburbDeselect = () => setSelectedSuburb(undefined);

    const onSuburbSelected = (suburb: Suburb) => setSelectedSuburb(suburb);

    return (
        <div className={styles.searchBox}>
            <Input
                placeholder="Arts schools"
                defaultValue={query ?? ""}
                className={`${styles.searchField} ${styles.input}  ${queryError && styles.errorQuery}`}
                onChange={onQueryChange}
                size="large"
            />
            <Space.Compact style={{ width: "100%" }}>
                <SuburbSearch
                    placeholder="Type Suburb, Town or Postcode"
                    onSuburbSelect={onSuburbSelected}
                    onSuburbDeselect={onSuburbDeselect}
                    defaultSuburb={selectedSuburb}
                    className={`${styles.autocomplete} ${suburbError && styles.errorSuburb}`}
                    size="large"
                />
                <Button
                    type="primary"
                    size="large"
                    className={styles.searchButton}
                    onClick={onSearchClicked}
                >
                    <SearchOutlined />
                </Button>
            </Space.Compact>
        </div>
    );
};
