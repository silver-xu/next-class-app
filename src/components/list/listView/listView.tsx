"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { Empty, Skeleton } from "antd";
import { useContext } from "react";

import { SearchContext } from "@/components/context/searchContext";
import { Footer } from "@/components/footer";

import { ListViewItem } from "../listViewItem";
import styles from "./listView.module.scss";

export const ListView = () => {
    const {
        loading,
        listingSearchResults,
        setLastSearchToken,
        setIsNewSearch,
    } = useContext(SearchContext);

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

    const loadMore = async () => {
        if (
            listingSearchResults &&
            listingSearchResults.length > 0 &&
            listingSearchResults.length < currentResultSize
        ) {
            setLastSearchToken(
                listingSearchResults[listingSearchResults.length - 1]
                    .paginationToken
            );

            setIsNewSearch(false);
        }
    };

    const empty = listingSearchResults && listingSearchResults.length === 0 && (
        <Empty
            className={styles.empty}
            description={<span>There is no school matching your criteria</span>}
        />
    );

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.searchResultWrapper}>
                {listingSearchResults && listingSearchResults.length > 0 && (
                    <InfiniteScroll
                        dataLength={listingSearchResults?.length ?? 0}
                        next={loadMore}
                        hasMore={
                            listingSearchResults
                                ? listingSearchResults.length <
                                  currentResultSize
                                : false
                        }
                        loader={progress}
                        endMessage={
                            <div className={styles.endScroll}>
                                There are no more results to be displayed
                            </div>
                        }
                    >
                        {listingSearchResults && (
                            <ul>
                                {listingSearchResults.map(
                                    (listingSearchResult, idx) => (
                                        <li
                                            className={styles.searchResult}
                                            key={idx}
                                        >
                                            <ListViewItem
                                                listingSearchResult={
                                                    listingSearchResult
                                                }
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        )}
                    </InfiniteScroll>
                )}
                {progress}
                {empty}
            </div>
            <Footer />
        </div>
    );
};
