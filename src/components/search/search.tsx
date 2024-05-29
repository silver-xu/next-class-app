"use client";

import { useParams, useSearchParams } from "next/navigation";
import { createContext, useCallback, useState } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Button, Select, Skeleton, Space } from "antd";

import { CompactSearch } from "../compactSearch";
import { Listing } from "@/models/listing";
import { Suburb } from "@/models/suburb";
import { Header } from "../header";
import { Footer } from "../footer";

import { Sort } from "@/db/listingRepository";
import styles from "./search.module.scss";
import ListView from "../listView";
import axios from "axios";

interface SearchContextProps {
    searchSuburb: Suburb | undefined;
    setSearchSuburb: (suburb: Suburb | undefined) => void;
    selectedSuburb: Suburb | undefined;
    setSelectedSuburb: (suburb: Suburb | undefined) => void;
    setSearchResult: (listings: Listing[]) => void;
    listings: Listing[] | undefined;
    searchSorting: Sort;
    searchRadius: number;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const SearchContext = createContext<SearchContextProps>({
    searchSuburb: undefined,
    setSearchSuburb: () => {},
    selectedSuburb: undefined,
    setSelectedSuburb: () => {},
    setSearchResult: () => {},
    listings: undefined,
    searchSorting: "relevance",
    searchRadius: 10000,
    loading: false,
    setLoading: () => {},
});

export const Search = () => {
    const q = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburbId as string);
    const suburbFullname = decodeURIComponent(
        useParams().suburbFullname as string
    );

    const [searchSuburb, setSearchSuburb] = useState<Suburb | undefined>(
        undefined
    );
    const [selectedSuburb, setSelectedSuburb] = useState<Suburb | undefined>(
        undefined
    );
    const [listings, setListings] = useState<Listing[] | undefined>(undefined);
    const [searchSorting, setSearchSorting] = useState<Sort>("relevance");
    const [searchRadius, setSearchRadius] = useState<number>(10000);

    const [loading, setLoading] = useState<boolean>(false);

    const setSearchResult = (listings: Listing[]) => setListings(listings);

    const progress = loading && (
        <>
            <Skeleton active={true} />
            <Skeleton active={true} />
            <Skeleton active={true} />
            <Skeleton active={true} />
            <Skeleton active={true} />
        </>
    );

    const listView = !loading && <ListView />;

    const onSortingChange = async (value: string) => {
        setSearchSorting(value as Sort);

        await searchListings(q!, selectedSuburb!, searchRadius, value as Sort);
    };

    const onFilteringChange = async (value: string) => {
        setSearchRadius(parseInt(value));

        await searchListings(q!, selectedSuburb!, searchRadius, value as Sort);
    };

    const searchListings = useCallback(
        async (
            query: string,
            suburb: Suburb,
            searchRadius: number,
            searchSorting: Sort
        ) => {
            const suburbParam = suburb?.suburbId ?? suburbId;

            setLoading(true);
            const response = await axios.get(
                `/api/listing/search?suburb=${suburbParam}&q=${query}&radius=${searchRadius}&sort=${searchSorting}`
            );
            setSearchResult(response.data);
            setLoading(false);
        },
        [suburbId, q]
    );

    return (
        <div className={styles.contentWrapper}>
            <SearchContext.Provider
                value={{
                    searchSuburb,
                    setSearchSuburb,
                    selectedSuburb,
                    setSelectedSuburb,
                    setSearchResult,
                    listings,
                    searchSorting,
                    searchRadius,
                    loading,
                    setLoading,
                }}
            >
                <Header theme="light" />
                <CompactSearch />
                <div className={styles.searchResultWrapper}>
                    <div className={`${styles.filters} filters`}>
                        <span className={styles.text}>Distance</span>
                        <Select
                            onChange={onFilteringChange}
                            defaultValue="10km"
                            className={styles.dropdown}
                            size="large"
                            style={{ width: "85px" }}
                            options={[
                                { value: "5000", label: "5 km" },
                                { value: "10000", label: "10 km" },
                                { value: "15000", label: "15 km" },
                            ]}
                        />
                        <span className={styles.text}>Sort</span>
                        <Space.Compact>
                            <Select
                                onChange={onSortingChange}
                                defaultValue="Relevance"
                                className={styles.dropdown}
                                style={{ width: "120px" }}
                                size="large"
                                options={[
                                    { value: "relevance", label: "Relevance" },
                                    { value: "rating", label: "Rating" },
                                ]}
                            />
                            <Button
                                size="large"
                                type="primary"
                                href={`/map-search/${suburbId}/${suburbFullname}?q=${q}`}
                            >
                                <EnvironmentOutlined />
                            </Button>
                        </Space.Compact>
                    </div>
                    {listView} {progress}
                </div>
                <Footer />
            </SearchContext.Provider>
        </div>
    );
};
