import { Location } from "@/models/address";
import { Listing } from "@/models/listing";
import { DbContext } from "./dbContext";

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

    public async search(query: string, location: Location): Promise<Listing[]> {
        const db = await this.dbContext.connect();

        const result = await db
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
                                            radius: 5000,
                                        },
                                        path: "address.location",
                                    },
                                },
                            ],
                            should: [
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
                    $limit: 10,
                },
                {
                    $sort: { score: -1 },
                },
            ])
            .toArray();

        return result;
    }
}
