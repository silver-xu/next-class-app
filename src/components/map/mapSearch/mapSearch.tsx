"use client";

import React, { useState } from "react";

import { SearchContext } from "@/components/context/searchContext";
import { ListingSearchResult } from "@/models/listingSearchResult";
import { CompactSearch } from "@/components/search/compactSearch";
import { MapView } from "@/components/map/mapView";
import { Sort } from "@/db/listingRepository";
import { Header } from "@/components/header";
import { Suburb } from "@/models/suburb";

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

    const [searchSorting, setSearchSorting] = useState<Sort>("relevance");
    const [searchRadius, setSearchRadius] = useState<number>(10000);
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
                setSearchRadius,
                listingSearchResults,
                searchSorting,
                setSearchSorting,
                loading,
                setLoading,
            }}
        >
            <div className={styles.mapWrapper}>
                <Header theme="light" />
                <CompactSearch type="map" />
                <div className={styles.mapView}>{mapView}</div>
            </div>
        </SearchContext.Provider>
    );
};
