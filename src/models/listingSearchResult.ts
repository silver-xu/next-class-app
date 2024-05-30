import { Address } from "./address";

export interface ListingAddressSearchResult {
    fullAddress: string | undefined;
    location: Location;
}

export interface ListingSearchResult {
    listingId: string;
    businessName: string;
    address: Address;
    rating: number | undefined;
    numOfReviews: number | undefined;
    thumbnailImagePaths: string[] | undefined;
    paginationToken: string | undefined;
    searchMeta: {
        meta: {
            count: {
                total: number;
            };
        };
    };
}
