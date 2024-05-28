"use client";

import { useParams, useSearchParams } from "next/navigation";
import { EnvironmentOutlined } from "@ant-design/icons";
import { createContext, useState } from "react";
import { Button } from "antd";

import { CompactSearch } from "../compactSearch";
import { ListViewItem } from "../listViewItem";
import { Listing } from "@/models/listing";
import { Suburb } from "@/models/suburb";
import { Header } from "../header";

import styles from "./search.module.scss";

interface SearchContextProps {
    searchSuburb: Suburb | undefined;
    setSearchSuburb: (suburb: Suburb | undefined) => void;
    selectedSuburb: Suburb | undefined;
    setSelectedSuburb: (suburb: Suburb | undefined) => void;
    setSearchResult: (listings: Listing[]) => void;
}

export const SearchContext = createContext<SearchContextProps>({
    searchSuburb: undefined,
    setSearchSuburb: () => {},
    selectedSuburb: undefined,
    setSelectedSuburb: () => {},
    setSearchResult: () => {},
});

export const Search = () => {
    const q = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburb as string);

    const [searchSuburb, setSearchSuburb] = useState<Suburb | undefined>(
        undefined
    );
    const [selectedSuburb, setSelectedSuburb] = useState<Suburb | undefined>(
        undefined
    );
    const [listings, setListings] = useState<Listing[]>([]);

    const searchResults = listings.map((listing) => (
        <li className={styles.searchResult}>
            <ListViewItem listing={listing} />
        </li>
    ));

    const setSearchResult = (listings: Listing[]) => setListings(listings);

    return (
        <div className={styles.contentWrapper}>
            <SearchContext.Provider
                value={{
                    searchSuburb,
                    setSearchSuburb,
                    selectedSuburb,
                    setSelectedSuburb,
                    setSearchResult,
                }}
            >
                <Header theme="light" />
                <CompactSearch />
                <div className={styles.floatButton}>
                    <Button
                        type="primary"
                        href={`/map-search/${suburbId}?q=${q}`}
                    >
                        <EnvironmentOutlined />
                        Map View
                    </Button>
                </div>

                <div className={styles.searchResultWrapper}>
                    <ul>{searchResults}</ul>
                </div>
            </SearchContext.Provider>
        </div>
    );
};
