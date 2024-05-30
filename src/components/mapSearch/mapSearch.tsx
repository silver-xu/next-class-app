"use client";

import React, { useState } from "react";

import { CompactSearch } from "@/components/compactSearch";
import { MapView } from "@/components/mapView";
import { Header } from "@/components/header";

import { SearchContext } from "../search";
import { Suburb } from "@/models/suburb";

import { ListingSearchResult } from "@/models/listingSearchResult";
import { Sort } from "@/db/listingRepository";
import styles from "./mapSearch.module.scss";

interface MapSearchProps {
    mapBoxApiKey: string;
}

export const MapSearch = (props: MapSearchProps) => {
    const { mapBoxApiKey } = props;

    const [searchSuburb, setSearchSuburb] = useState<Suburb | undefined>(
        undefined
    );
    const [selectedSuburb, setSelectedSuburb] = useState<Suburb | undefined>(
        undefined
    );
    const [listingSearchResults, setListingSearchResults] = useState<
        ListingSearchResult[] | undefined
    >(undefined);

    const [searchSorting] = useState<Sort>("relevance");
    const [searchRadius] = useState<number>(10000);
    const [loading, setLoading] = useState<boolean>(false);

    const mapView = listingSearchResults && (
        <MapView
            mapBoxApiKey={mapBoxApiKey}
            listingSearchResults={listingSearchResults}
        />
    );

    return (
        <SearchContext.Provider
            value={{
                searchSuburb,
                setSearchSuburb,
                selectedSuburb,
                setSelectedSuburb,
                setListingSearchResults,
                searchRadius,
                listingSearchResults,
                searchSorting,
                loading,
                setLoading,
            }}
        >
            <div className={styles.mapWrapper}>
                <Header theme="light" />
                <CompactSearch />
                <div className={styles.mapView}>{mapView}</div>
            </div>
        </SearchContext.Provider>
    );
};
