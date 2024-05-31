import { ListingSearchResult } from "@/models/listingSearchResult";
import { Sort } from "@/db/listingRepository";
import { Suburb } from "@/models/suburb";
import { createContext } from "react";

interface SearchContextProps {
    searchSuburb: Suburb | undefined;
    setSearchSuburb: (suburb: Suburb | undefined) => void;
    selectedSuburb: Suburb | undefined;
    setSelectedSuburb: (suburb: Suburb | undefined) => void;
    setListingSearchResults: (listings: ListingSearchResult[]) => void;
    listingSearchResults: ListingSearchResult[] | undefined;
    searchSorting: Sort;
    setSearchSorting: (sorting: Sort) => void;
    searchRadius: number;
    setSearchRadius: (radius: number) => void;
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
    setSearchSorting: () => {},
    searchRadius: 10000,
    setSearchRadius: () => {},
    loading: false,
    setLoading: () => {},
});
