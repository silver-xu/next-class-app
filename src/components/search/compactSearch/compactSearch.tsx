"use client";

import { ChangeEvent, useContext, useState } from "react";
import { CloseSquareFilled } from "@ant-design/icons";
import { Input, Button, Space, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { List, Map } from "iconoir-react";
import React from "react";

import { SuburbSearch } from "@/components/search/suburbSearch/suburbSearch";
import { SearchContext } from "@/components/context/searchContext";
import { Sort } from "@/db/listingRepository";
import { Suburb } from "@/models/suburb";

import styles from "./compactSearch.module.scss";

export const CompactSearch = () => {
    const {
        searchMode,
        setSearchMode,
        query,
        setQuery,
        searchSuburb,
        selectedSuburb,
        setSelectedSuburb,
        setSearchRadius,
        setSearchSorting,
        fireSearchListings,
        fireSearchListingsInBounds,
        setLastSearchToken,
        setIsNewSearch,
    } = useContext(SearchContext);

    const [queryError, setQueryError] = useState<boolean>(false);
    const [suburbError, setSuburbError] = useState<boolean>(false);

    const onSearchClicked = async () => {
        setQueryError(!query || query === "");
        setSuburbError(!searchSuburb);

        if (query && query !== "" && selectedSuburb) {
            setIsNewSearch(true);
            setLastSearchToken(undefined);

            if (selectedSuburb.suburbId !== "map") {
                await fireSearchListings();
            } else {
                await fireSearchListingsInBounds();
            }
        }
    };

    const onQueryChange = (e: ChangeEvent<HTMLInputElement>) =>
        setQuery(e.currentTarget.value);

    const onSuburbDeselect = () => setSelectedSuburb(undefined);

    const onSuburbSelected = (suburb: Suburb) => setSelectedSuburb(suburb);

    const onSortingChange = async (value: string) => {
        setLastSearchToken(undefined);
        setSearchSorting(value as Sort);
        setIsNewSearch(true);
    };

    const onRadiusChange = async (radiusString: string) => {
        const radius = parseInt(radiusString);
        setSearchRadius(radius);
        setIsNewSearch(true);
    };

    const toggleMode = () => {
        const newMode = searchMode === "map" ? "list" : "map";
        setSearchMode(newMode);
    };

    return (
        <>
            <div className={styles.searchBox}>
                <Input
                    placeholder="Arts, Dancing, Gymnastics or Tennis"
                    defaultValue={query ?? ""}
                    className={`${styles.searchField} ${styles.input}  ${queryError && styles.errorQuery}`}
                    onChange={onQueryChange}
                    size="large"
                    allowClear={{
                        clearIcon: (
                            <CloseSquareFilled style={{ fontSize: "20px" }} />
                        ),
                    }}
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
            <div className={styles.filterWrapper}>
                <div className={`${styles.filters}`}>
                    <Space.Compact className="compactWrapper">
                        <Button
                            size="large"
                            type="primary"
                            className={styles.mapView}
                            onClick={toggleMode}
                        >
                            {searchMode === "list" ? (
                                <>
                                    <Map height={20} width={20} /> Map
                                </>
                            ) : (
                                <>
                                    <List height={20} width={20} /> List view
                                </>
                            )}
                        </Button>
                        <Select
                            defaultValue="allages"
                            className={styles.dropdown}
                            style={{ minWidth: "110px" }}
                            size="large"
                            options={[
                                {
                                    value: "allages",
                                    label: "All Ages",
                                },
                                { value: "preschool", label: "Preschool" },
                                { value: "schoolage", label: "School" },
                                { value: "youth", label: "Youth" },
                            ]}
                        />
                        {searchMode === "list" && (
                            <>
                                {selectedSuburb?.suburbId !== "map" && (
                                    <Select
                                        onChange={onRadiusChange}
                                        defaultValue="10000"
                                        className={styles.dropdown}
                                        size="large"
                                        style={{ minWidth: "84px" }}
                                        options={[
                                            { value: "5000", label: "5km" },
                                            { value: "10000", label: "10km" },
                                            { value: "15000", label: "15km" },
                                        ]}
                                    />
                                )}
                                <Select
                                    onChange={onSortingChange}
                                    defaultValue="Relevance"
                                    className={styles.dropdown}
                                    style={{ minWidth: "115px" }}
                                    size="large"
                                    options={[
                                        {
                                            value: "relevance",
                                            label: "Relevance",
                                        },
                                        { value: "rating", label: "Rating" },
                                    ]}
                                />
                            </>
                        )}
                    </Space.Compact>
                </div>
            </div>
        </>
    );
};
