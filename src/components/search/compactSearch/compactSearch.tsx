"use client";

import {
    ChangeEvent,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { useParams, useSearchParams } from "next/navigation";
import { CloseSquareFilled } from "@ant-design/icons";
import { Input, Button, Space, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { List, Map } from "iconoir-react";
import axios from "axios";
import React from "react";

import { SuburbSearch } from "@/components/search/suburbSearch/suburbSearch";
import { SearchContext } from "@/components/context/searchContext";
import { Sort } from "@/db/listingRepository";
import { slugify } from "@/utils/slugify";
import { Suburb } from "@/models/suburb";

import styles from "./compactSearch.module.scss";

const pageLimit = 20;

interface CompactSearchProps {
    type: "list" | "map";
}

export const CompactSearch = (props: CompactSearchProps) => {
    const q = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburbId as string);
    const suburbFullname = decodeURIComponent(
        useParams().suburbFullname as string
    );

    const { type } = props;

    const {
        searchSuburb,
        setSearchSuburb,
        selectedSuburb,
        setSelectedSuburb,
        setListingSearchResults,
        searchRadius,
        setSearchRadius,
        searchSorting,
        setSearchSorting,
        setLoading,
    } = useContext(SearchContext);

    const [query, setQuery] = useState<string | undefined>(q as string);

    const [queryError, setQueryError] = useState<boolean>(false);
    const [suburbError, setSuburbError] = useState<boolean>(false);

    useEffect(() => {
        (async function () {
            setSearchSuburb(selectedSuburb);
            await fetchSuburb();
            await searchListings(
                query!,
                selectedSuburb!,
                pageLimit,
                searchRadius,
                searchSorting
            );
        })();
    }, [suburbId]);

    const fetchSuburb = async () => {
        const response = await axios.get(`/api/suburb/${suburbId}`);

        setSearchSuburb(response.data);
        setSelectedSuburb(response.data);
    };

    const searchListings = useCallback(
        async (
            query: string,
            suburb: Suburb,
            limit: number,
            searchRadius: number,
            searchSorting: Sort
        ) => {
            const suburbParam = suburb?.suburbId ?? suburbId;

            setLoading(true);

            const response = await axios.get(
                `/api/listing/search?suburb=${suburbParam}&q=${query}&limit=${limit}&radius=${searchRadius}&sort=${searchSorting}`
            );

            setListingSearchResults(response.data);

            setLoading(false);
        },
        [suburbId, q, searchRadius, searchSorting]
    );

    const onSearchClicked = async () => {
        setQueryError(!query || query === "");
        setSuburbError(!searchSuburb);

        if (query && query !== "" && selectedSuburb) {
            window.location.href = `/search/${selectedSuburb?.suburbId}/${slugify(selectedSuburb?.fullName)}?q=${query}`;
        }
    };

    const onQueryChange = (e: ChangeEvent<HTMLInputElement>) =>
        setQuery(e.currentTarget.value);

    const onSuburbDeselect = () => setSelectedSuburb(undefined);

    const onSuburbSelected = (suburb: Suburb) => setSelectedSuburb(suburb);

    const onSortingChange = async (value: string) => {
        setSearchSorting(value as Sort);

        await searchListings(
            q!,
            selectedSuburb!,
            pageLimit,
            searchRadius,
            value as Sort
        );
    };

    const onRadiusChange = async (radiusString: string) => {
        const radius = parseInt(radiusString);
        setSearchRadius(radius);

        await searchListings(
            q!,
            selectedSuburb!,
            pageLimit,
            radius,
            searchSorting
        );
    };

    return (
        <>
            <div className={styles.searchBox}>
                <Input
                    placeholder="Arts schools"
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
                        defaultValue={suburbFullname}
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
                            href={
                                type === "list"
                                    ? `/map-search/${suburbId}/${suburbFullname}?q=${q}`
                                    : `/search/${suburbId}/${suburbFullname}?q=${q}`
                            }
                        >
                            {type === "list" ? (
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
                        {type === "list" && (
                            <>
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
