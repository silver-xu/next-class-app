import { ListingSearchResult } from "@/models/listingSearchResult";
import { SearchMode } from "@/components/search/combinedSearch";
import { Sort } from "@/db/listingRepository";
import { MapArea } from "@/models/mapArea";
import { Suburb } from "@/models/suburb";
import { Bounds } from "../map/mapView";
import { createContext } from "react";

interface SearchContextProps {
    searchMode: SearchMode;
    setSearchMode: (searchMode: SearchMode) => void;
    query: string | undefined;
    setQuery: (query: string) => void;
    searchSuburb: Suburb | MapArea | undefined;
    setSearchSuburb: (suburb: Suburb | MapArea | undefined) => void;
    selectedSuburb: Suburb | MapArea | undefined;
    setSelectedSuburb: (suburb: Suburb | MapArea | undefined) => void;
    setListingSearchResults: (
        listings: ListingSearchResult[] | undefined
    ) => void;
    listingSearchResults: ListingSearchResult[] | undefined;
    searchSorting: Sort;
    setSearchSorting: (sorting: Sort) => void;
    searchRadius: number;
    setSearchRadius: (radius: number) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    lastSearchToken: string | undefined;
    setLastSearchToken: (token: string | undefined) => void;
    isNewSearch: boolean;
    setIsNewSearch: (isNewSearch: boolean) => void;
    bounds: Bounds | undefined;
    setBounds: (bounds: Bounds) => void;
    fireSearchListings: () => Promise<void>;
    fireSearchListingsInBounds: () => Promise<void>;
}

export const SearchContext = createContext<SearchContextProps>({
    searchMode: "list",
    setSearchMode: () => {},
    query: undefined,
    setQuery: () => {},
    searchSuburb: undefined,
    setSearchSuburb: () => {},
    selectedSuburb: undefined,
    setSelectedSuburb: () => {},
    setListingSearchResults: () => {},
    listingSearchResults: undefined,
    searchSorting: "relevance",
    setSearchSorting: () => {},
    searchRadius: 10000,
    setSearchRadius: () => {},
    loading: false,
    setLoading: () => {},
    lastSearchToken: undefined,
    setLastSearchToken: () => {},
    isNewSearch: true,
    setIsNewSearch: () => {},
    bounds: undefined,
    setBounds: () => {},
    fireSearchListings: () => {
        return Promise.resolve();
    },
    fireSearchListingsInBounds: () => {
        return Promise.resolve();
    },
});
