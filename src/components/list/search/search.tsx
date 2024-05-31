"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useParams, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Empty, Skeleton } from "antd";
import axios from "axios";

import { SearchContext } from "@/components/context/searchContext";
import { ListingSearchResult } from "@/models/listingSearchResult";
import { CompactSearch } from "@/components/search/compactSearch";
import { Sort } from "@/db/listingRepository";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Suburb } from "@/models/suburb";

import styles from "./search.module.scss";
import ListView from "../listView";

const pageLimit = 20;

export const Search = () => {
    const q = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburbId as string);

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

    const currentResultSize = listingSearchResults
        ? listingSearchResults[listingSearchResults.length - 1]?.searchMeta
              ?.meta?.count?.total ?? 0
        : 0;

    const onLoadMoreClicked = async () => {
        const lastListingSearchResult =
            listingSearchResults![listingSearchResults!.length - 1];

        if (
            listingSearchResults &&
            listingSearchResults.length > 0 &&
            listingSearchResults.length < currentResultSize
        ) {
            await searchListings(
                q!,
                selectedSuburb!,
                pageLimit,
                searchRadius,
                searchSorting,
                listingSearchResults,
                lastListingSearchResult.paginationToken
            );
        }
    };

    const searchListings = useCallback(
        async (
            query: string,
            suburb: Suburb,
            limit: number,
            searchRadius: number,
            searchSorting: Sort,
            listingSearchResults?: ListingSearchResult[] | undefined,
            searchAfter?: string | undefined
        ) => {
            const suburbParam = suburb?.suburbId ?? suburbId;
            const searchAfterParam = searchAfter
                ? `&searchAfter=${searchAfter}`
                : "";
            setLoading(true);

            const response = await axios.get(
                `/api/listing/search?suburb=${suburbParam}&q=${query}&limit=${limit}&radius=${searchRadius}&sort=${searchSorting}&${searchAfterParam}`
            );

            // Pagination support
            if (searchAfter) {
                setListingSearchResults(
                    listingSearchResults?.concat(response.data)
                );
            } else {
                setListingSearchResults(response.data);
            }

            setLoading(false);
        },
        [suburbId, q, searchRadius, searchSorting]
    );

    const empty = listingSearchResults && listingSearchResults.length === 0 && (
        <Empty
            className={styles.empty}
            description={<span>There is no school matches your criteria</span>}
        />
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
                    setSearchSorting,
                    searchRadius,
                    setSearchRadius,
                    loading,
                    setLoading,
                }}
            >
                <Header theme="light" />
                <CompactSearch type="list" />
                <div className={styles.searchResultWrapper}>
                    {listingSearchResults &&
                        listingSearchResults.length > 0 && (
                            <InfiniteScroll
                                dataLength={listingSearchResults?.length ?? 0}
                                next={onLoadMoreClicked}
                                hasMore={
                                    listingSearchResults
                                        ? listingSearchResults.length <
                                          currentResultSize
                                        : false
                                }
                                loader={progress}
                                endMessage={
                                    <div className={styles.endScroll}>
                                        There are no more results to be
                                        displayed
                                    </div>
                                }
                            >
                                <ListView />
                            </InfiniteScroll>
                        )}
                    {progress}
                    {empty}
                </div>
                <Footer />
            </SearchContext.Provider>
        </div>
    );
};
