"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { SearchContext } from "@/components/context/searchContext";
import { ListingSearchResult } from "@/models/listingSearchResult";
import { CompactSearch } from "@/components/search/compactSearch";
import { useParams, useSearchParams } from "next/navigation";
import { ListView } from "@/components/list/listView";
import { MapView } from "@/components/map/mapView";
import { Sort } from "@/db/listingRepository";
import { Header } from "@/components/header";
import { MapArea } from "@/models/mapArea";
import { Suburb } from "@/models/suburb";
import Layout from "@/app/layout";

import styles from "./combinedSearch.module.scss";

export type SearchMode = "list" | "map";

interface CombinedSearchProps {
    mapBoxApiKey: string;
}

const pageLimit = new Map<SearchMode, number>();
pageLimit.set("list", 20);
pageLimit.set("map", 100);

export const CombinedSearch = (props: CombinedSearchProps) => {
    const [searchMode, setSearchMode] = useState<SearchMode>("list");

    const q = useSearchParams().get("q")!;

    const suburbId = decodeURIComponent(useParams().suburbId as string);

    const [query, setQuery] = useState<string | undefined>(q);
    const [searchSuburb, setSearchSuburb] = useState<
        Suburb | MapArea | undefined
    >(undefined);
    const [selectedSuburb, setSelectedSuburb] = useState<
        Suburb | MapArea | undefined
    >(undefined);
    const [listingSearchResults, setListingSearchResults] = useState<
        ListingSearchResult[] | undefined
    >(undefined);
    const [searchSorting, setSearchSorting] = useState<Sort>("relevance");
    const [searchRadius, setSearchRadius] = useState<number>(10000);

    const [loading, setLoading] = useState<boolean>(false);
    const [lastSearchToken, setLastSearchToken] = useState<string | undefined>(
        undefined
    );
    const [isNewSearch, setIsNewSearch] = useState<boolean>(true);

    useEffect(() => {
        (async function () {
            setSearchSuburb(selectedSuburb);
            if (selectedSuburb?.suburbId !== "map") {
                await fetchSuburb();
                await fireSearchListings();
            } else {
                await fireSearchListingsInBounds();
            }
        })();
    }, [suburbId, searchSorting, searchRadius, lastSearchToken, isNewSearch]);

    const currentResultSize = listingSearchResults
        ? listingSearchResults[listingSearchResults.length - 1]?.searchMeta
              ?.meta?.count?.total ?? 0
        : 0;

    const fireSearchListings = async () => {
        const paginationToken =
            listingSearchResults &&
            listingSearchResults.length > 0 &&
            listingSearchResults.length < currentResultSize
                ? lastSearchToken
                : undefined;

        await searchListings(
            query!,
            selectedSuburb as Suburb,
            pageLimit.get(searchMode) as number,
            searchRadius,
            searchSorting,
            listingSearchResults,
            paginationToken
        );
    };

    const fireSearchListingsInBounds = async () => {
        const paginationToken =
            listingSearchResults &&
            listingSearchResults.length > 0 &&
            listingSearchResults.length < currentResultSize
                ? lastSearchToken
                : undefined;

        await searchListingsInBounds(
            query!,
            pageLimit.get(searchMode) as number,
            searchSorting,
            (selectedSuburb as MapArea).bounds.northEast,
            (selectedSuburb as MapArea).bounds.southWest,
            listingSearchResults,
            paginationToken
        );
    };

    const searchListingsInBounds = useCallback(
        async (
            query: string,
            limit: number,
            searchSorting: Sort,
            northEast: number[],
            southWest: number[],
            listingSearchResults: ListingSearchResult[] | undefined,
            searchAfter?: string | undefined
        ) => {
            const [northEastLng, northEastLat] = northEast;
            const [southWestLng, southWestLat] = southWest;
            const searchAfterParam = searchAfter
                ? `&searchAfter=${searchAfter}`
                : "";

            const response = await axios.get(
                `/api/listing/searchInbound?q=${query}&limit=${limit}&sort=${searchSorting}&northEastLng=` +
                    `${northEastLng}&northEastLat=${northEastLat}&southWestLng=${southWestLng}&` +
                    `southWestLat=${southWestLat}&${searchAfterParam}`
            );

            if (response.status === 200) {
                const newResult = response.data as ListingSearchResult[];

                // Pagination support
                if (!isNewSearch && listingSearchResults) {
                    setListingSearchResults(
                        listingSearchResults.concat(newResult)
                    );
                } else {
                    setListingSearchResults(response.data);
                }
            }
        },
        [query, selectedSuburb?.suburbId]
    );

    const searchListings = useCallback(
        async (
            query: string,
            suburb: Suburb,
            limit: number,
            searchRadius: number,
            searchSorting: Sort,
            listingSearchResults: ListingSearchResult[] | undefined,
            searchAfter?: string | undefined
        ) => {
            const suburbParam = suburb?.suburbId ?? suburbId;
            const searchAfterParam = searchAfter
                ? `&searchAfter=${searchAfter}`
                : "";
            setLoading(true);

            const response = await axios.get(
                `/api/listing/search?suburb=${suburbParam}&q=${query}&limit=${limit}&radius=${searchRadius}` +
                    `&sort=${searchSorting}&${searchAfterParam}`
            );

            if (response.status === 200) {
                const newResult = response.data as ListingSearchResult[];

                // Pagination support
                if (!isNewSearch && listingSearchResults) {
                    setListingSearchResults(
                        listingSearchResults.concat(newResult)
                    );
                } else {
                    setListingSearchResults(newResult);
                }
            }

            setLoading(false);
        },
        [suburbId, q, searchRadius, searchSorting, lastSearchToken]
    );

    const fetchSuburb = async () => {
        const response = await axios.get(`/api/suburb/${suburbId}`);

        setSearchSuburb(response.data);
        setSelectedSuburb(response.data);
    };

    return (
        <Layout>
            <SearchContext.Provider
                value={{
                    lastSearchToken,
                    setLastSearchToken,
                    searchMode,
                    setSearchMode,
                    query,
                    setQuery,
                    searchSuburb,
                    setSearchSuburb,
                    selectedSuburb,
                    setSelectedSuburb,
                    setListingSearchResults,
                    listingSearchResults,
                    searchSorting,
                    setSearchSorting,
                    searchRadius,
                    setSearchRadius,
                    loading,
                    setLoading,
                    isNewSearch,
                    setIsNewSearch,
                    fireSearchListings,
                    fireSearchListingsInBounds,
                }}
            >
                <div className={styles.contentWrapper}>
                    <Header theme="light" />
                    <CompactSearch />
                    {searchMode === "list" && <ListView />}
                    {searchMode === "map" && (
                        <MapView mapBoxApiKey={props.mapBoxApiKey} />
                    )}
                </div>
            </SearchContext.Provider>
        </Layout>
    );
};
