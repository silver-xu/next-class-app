import { Location } from "@/models/address";
import { Listing } from "@/models/listing";
import { DbContext } from "./dbContext";
import { Db } from "mongodb";

export type Sort = "relevance" | "rating";

const sortCriterias = {
    relevance: { score: { $meta: "searchScore", order: -1 } },
    rating: { rating: -1 },
};

export class ListingRepository {
    private dbContext: DbContext;
    private static db: Db;

    constructor() {
        this.dbContext = new DbContext();
    }

    public async getOne(listingId: string): Promise<Listing | undefined> {
        if (!ListingRepository.db) {
            ListingRepository.db = await this.dbContext.connect();
        }

        const result = await ListingRepository.db
            .collection<Listing>("listings")
            .findOne({ listingId });

        return result ?? undefined;
    }

    public async search(
        query: string,
        location: Location,
        radius: number,
        sort: Sort
    ): Promise<Listing[]> {
        if (!ListingRepository.db) {
            ListingRepository.db = await this.dbContext.connect();
        }

        const sortCriteria = sortCriterias[sort];
        const result = await ListingRepository.db
            .collection("listings")
            .aggregate<Listing>([
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
