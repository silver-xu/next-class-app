"use client";

import { useParams, useSearchParams } from "next/navigation";
import { createContext, useCallback, useState } from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Button, Select, Skeleton, Space } from "antd";

import { CompactSearch } from "../compactSearch";
import { Suburb } from "@/models/suburb";
import { Header } from "../header";
import { Footer } from "../footer";

import { ListingSearchResult } from "@/models/listingSearchResult";
import { Sort } from "@/db/listingRepository";
import styles from "./search.module.scss";
import ListView from "../listView";
import axios from "axios";

interface SearchContextProps {
    searchSuburb: Suburb | undefined;
    setSearchSuburb: (suburb: Suburb | undefined) => void;
    selectedSuburb: Suburb | undefined;
    setSelectedSuburb: (suburb: Suburb | undefined) => void;
    setListingSearchResults: (listings: ListingSearchResult[]) => void;
    listingSearchResults: ListingSearchResult[] | undefined;
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
    setListingSearchResults: () => {},
    listingSearchResults: undefined,
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
    const [listingSearchResults, setListingSearchResults] = useState<
        ListingSearchResult[] | undefined
    >(undefined);
    const [searchSorting, setSearchSorting] = useState<Sort>("relevance");
    const [searchRadius, setSearchRadius] = useState<number>(10000);

    const [loading, setLoading] = useState<boolean>(false);

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

    const onRadiusChange = async (radiusString: string) => {
        const radius = parseInt(radiusString);
        setSearchRadius(radius);

        await searchListings(q!, selectedSuburb!, radius, searchSorting);
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
            setListingSearchResults(response.data);
            setLoading(false);
        },
        [suburbId, q, searchRadius, searchSorting]
    );

    return (
        <div className={styles.contentWrapper}>
            <SearchContext.Provider
                value={{
                    searchSuburb,
                    setSearchSuburb,
                    selectedSuburb,
                    setSelectedSuburb,
                    setListingSearchResults,
                    listingSearchResults,
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
                            onChange={onRadiusChange}
                            defaultValue="10km"
                            className={styles.dropdown}
                            size="large"
                            style={{ width: "85px" }}
                            options={[
                                { value: "5000", label: "5km" },
                                { value: "10000", label: "10km" },
                                { value: "15000", label: "15km" },
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
