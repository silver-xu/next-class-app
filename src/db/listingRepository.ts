import { ListingSearchResult } from "@/models/listingSearchResult";
import { Location } from "@/models/address";
import { Listing } from "@/models/listing";
import { DbContext } from "./dbContext";

export type Sort = "relevance" | "rating";

const sortCriterias = {
    relevance: { score: { $meta: "searchScore", order: -1 } },
    rating: { rating: -1 },
};

export class ListingRepository {
    private dbContext: DbContext;

    constructor() {
        this.dbContext = new DbContext();
    }

    public async getOne(listingId: string): Promise<Listing | undefined> {
        const db = await this.dbContext.connect();

        const result = await db
            .collection<Listing>("listings")
            .findOne({ listingId });

        return result ?? undefined;
    }

    public async getAllByCategory(category: string): Promise<Listing[]> {
        const db = await this.dbContext.connect();

        const result = await db
            .collection<Listing>("listings")
            .find({ category })
            .toArray();

        return result;
    }

    public async searchNearby(
        query: string,
        limit: number,
        location: Location,
        radius: number,
        sort: Sort,
        searchAfter?: string
    ): Promise<ListingSearchResult[]> {
        const db = await this.dbContext.connect();

        const sortCriteria = sortCriterias[sort];
        const result = await db
            .collection("listings")
            .aggregate<ListingSearchResult>([
                {
                    $search: {
                        index: "listings_search",
                        searchAfter,
                        compound: {
                            must: [
                                {
                                    geoWithin: {
                                        circle: {
                                            center: location,
                                            radius,
                                        },
                                        path: "address.location",
                                    },
                                },
                                {
                                    text: {
                                        path: [
                                            "businessName",
                                            "description",
                                            "generatedContent.aboutUs",
                                            "generatedContent.courseDraft",
                                        ],
                                        query,
                                        synonyms: "listing_synonyms_mapping",
                                    },
                                },
                            ],
                        },

                        sort: sortCriteria,
                        count: {
                            type: "total",
                        },
                    },
                },
                {
                    $addFields: {
                        score: {
                            $meta: "searchScore",
                        },
                        paginationToken: { $meta: "searchSequenceToken" },
                        searchMeta: { meta: "$$SEARCH_META" },
                    },
                },
                {
                    $limit: limit,
                },
            ])
            .toArray();

        return result;
    }

    public async searchInbound(
        query: string,
        limit: number,
        northEast: Location,
        southWest: Location,
        sort: Sort,
        searchAfter?: string
    ): Promise<ListingSearchResult[]> {
        const db = await this.dbContext.connect();

        const sortCriteria = sortCriterias[sort];

        const result = await db
            .collection("listings")
            .aggregate<ListingSearchResult>([
                {
                    $search: {
                        index: "listings_search",
                        searchAfter,
                        compound: {
                            must: [
                                {
                                    geoWithin: {
                                        box: {
                                            topRight: northEast,
                                            bottomLeft: southWest,
                                        },
                                        path: "address.location",
                                    },
                                },
                                {
                                    text: {
                                        path: [
                                            "businessName",
                                            "description",
                                            "generatedContent.aboutUs",
                                            "generatedContent.courseDraft",
                                        ],
                                        query,
                                        synonyms: "listing_synonyms_mapping",
                                    },
                                },
                            ],
                        },
                        sort: sortCriteria,
                        count: {
                            type: "total",
                        },
                    },
                },
                {
                    $addFields: {
                        score: {
                            $meta: "searchScore",
                        },
                    },
                },
                {
                    $addFields: {
                        score: {
                            $meta: "searchScore",
                        },
                        paginationToken: { $meta: "searchSequenceToken" },
                        searchMeta: { meta: "$$SEARCH_META" },
                    },
                },
                {
                    $limit: limit,
                },
            ])
            .toArray();

        return result;
    }
}
