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

    public async search(
        query: string,
        location: Location,
        radius: number,
        sort: Sort
    ): Promise<ListingSearchResult[]> {
        const db = await this.dbContext.connect();

        const sortCriteria = sortCriterias[sort];
        const result = await db
            .collection("listings")
            .aggregate<ListingSearchResult>([
                {
                    $search: {
                        index: "listings_search",
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
                    $limit: 20,
                },
            ])
            .toArray();

        return result;
    }
}
