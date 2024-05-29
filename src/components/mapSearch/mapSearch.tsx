"use client";

import React, { useState } from "react";

import { CompactSearch } from "@/components/compactSearch";
import { MapView } from "@/components/mapView";
import { Header } from "@/components/header";

import { Listing } from "@/models/listing";
import { SearchContext } from "../search";
import { Suburb } from "@/models/suburb";

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
    const [listings, setListings] = useState<Listing[] | undefined>(undefined);

    const [searchSorting] = useState<Sort>("relevance");
    const [searchRadius] = useState<number>(10000);
    const [loading, setLoading] = useState<boolean>(false);

    const setSearchResult = (listings: Listing[]) => setListings(listings);

    const mapView = listings && (
        <MapView mapBoxApiKey={mapBoxApiKey} listings={listings} />
    );

    return (
        <SearchContext.Provider
            value={{
                searchSuburb,
                setSearchSuburb,
                selectedSuburb,
                setSelectedSuburb,
                setSearchResult,
                searchRadius,
                listings,
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
