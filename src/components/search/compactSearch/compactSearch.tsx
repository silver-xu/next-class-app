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

import { getFullyQualifiedSearchUrl } from "@/utils/urlUtils";
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
        bounds,
        searchRadius,
        searchSorting,
    } = useContext(SearchContext);

    const [queryError, setQueryError] = useState<boolean>(false);
    const [suburbError, setSuburbError] = useState<boolean>(false);

    const onSearchClicked = async () => {
        setQueryError(!query || query === "");
        setSuburbError(!searchSuburb);

        if (query && query !== "" && selectedSuburb) {
            setIsNewSearch(true);
            setLastSearchToken(undefined);

            if (selectedSuburb.suburbId !== "bounds") {
                await fireSearchListings();
            } else {
                await fireSearchListingsInBounds();
            }
        }
    };

    const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.currentTarget.value);

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                "map",
                e.currentTarget.value,
                selectedSuburb,
                bounds,
                searchRadius,
                searchSorting
            )
        );
    };

    const onSuburbDeselect = () => setSelectedSuburb(undefined);

    const onSuburbSelected = (suburb: Suburb) => {
        setSelectedSuburb(suburb);

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                "map",
                query!,
                suburb,
                bounds,
                searchRadius,
                searchSorting
            )
        );
    };

    const onSortingChange = async (value: string) => {
        setLastSearchToken(undefined);
        setSearchSorting(value as Sort);
        setIsNewSearch(true);

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                "map",
                query!,
                selectedSuburb,
                bounds,
                searchRadius,
                value
            )
        );
    };

    const onRadiusChange = async (radiusString: string) => {
        const radius = parseInt(radiusString);
        setSearchRadius(radius);
        setIsNewSearch(true);

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                "map",
                query!,
                selectedSuburb,
                bounds,
                radius,
                searchSorting
            )
        );
    };

    const toggleMode = () => {
        const newMode = searchMode === "map" ? "list" : "map";

        setSearchMode(newMode);

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                newMode,
                query!,
                selectedSuburb,
                bounds,
                searchRadius,
                searchSorting
            )
        );
    };

    return (
        <>
            {searchMode === "list" && (
                <div className={styles.searchBox}>
                    <Input
                        placeholder="Arts, Dancing, Gymnastics or Tennis"
                        defaultValue={query ?? ""}
                        className={`${styles.searchField} ${styles.input}  ${queryError && styles.errorQuery}`}
                        onChange={onQueryChange}
                        size="large"
                        allowClear={{
                            clearIcon: (
                                <CloseSquareFilled
                                    style={{ fontSize: "20px" }}
                                />
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
            )}
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
                            defaultValue="All Ages"
                            className={styles.dropdown}
                            style={{ minWidth: "110px" }}
                            size="large"
                            options={[
                                {
                                    value: "allages",
                                    label: "All Ages",
                                },
                                { value: "Preschool", label: "Preschool" },
                                { value: "Kids", label: "Kids" },
                                { value: "Junior", label: "Junior" },
                            ]}
                        />
                        {searchMode === "list" && (
                            <>
                                {selectedSuburb?.suburbId !== "bounds" && (
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
