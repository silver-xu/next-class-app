"use client";

import { useParams, useSearchParams } from "next/navigation";
import { EnvironmentOutlined } from "@ant-design/icons";
import { createContext, useState } from "react";
import { Button, Select, Skeleton } from "antd";

import { CompactSearch } from "../compactSearch";
import { Listing } from "@/models/listing";
import { Suburb } from "@/models/suburb";
import { Header } from "../header";
import { Footer } from "../footer";

import styles from "./search.module.scss";
import ListView from "../listView";

interface SearchContextProps {
    searchSuburb: Suburb | undefined;
    setSearchSuburb: (suburb: Suburb | undefined) => void;
    selectedSuburb: Suburb | undefined;
    setSelectedSuburb: (suburb: Suburb | undefined) => void;
    setSearchResult: (listings: Listing[]) => void;
    listings: Listing[] | undefined;
}

export const SearchContext = createContext<SearchContextProps>({
    searchSuburb: undefined,
    setSearchSuburb: () => {},
    selectedSuburb: undefined,
    setSelectedSuburb: () => {},
    setSearchResult: () => {},
    listings: undefined,
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

    const setSearchResult = (listings: Listing[]) => setListings(listings);

    const progress = !listings && (
        <>
            <Skeleton active={true} />
            <Skeleton active={true} />
            <Skeleton active={true} />
            <Skeleton active={true} />
            <Skeleton active={true} />
        </>
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
                }}
            >
                <Header theme="light" />
                <CompactSearch />
                <div className={styles.floatButton}>
                    <Button
                        type="primary"
                        href={`/map-search/${suburbId}/${suburbFullname}?q=${q}`}
                    >
                        <EnvironmentOutlined />
                        Map View
                    </Button>
                </div>
                <div className={styles.searchResultWrapper}>
                    <div className={styles.filters}>
                        <span className={styles.text}>Distance: </span>
                        <Select
                            defaultValue="10 km"
                            style={{ width: 120 }}
                            className={styles.dropdown}
                            size="large"
                            options={[
                                { value: "5 km", label: "5 km" },
                                { value: "10 km", label: "10 km" },
                                { value: "15 km", label: "15 km" },
                            ]}
                        />
                    </div>
                    <ListView />
                    {progress}
                </div>
                <Footer />
            </SearchContext.Provider>
        </div>
    );
};
