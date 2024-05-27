import { Suburb } from "@/models/suburb";
import { DbContext } from "./dbContext";

export class SuburbRepository {
    private dbContext: DbContext;

    constructor() {
        this.dbContext = new DbContext();
    }

    public async search(query: string): Promise<Suburb[]> {
        const db = await this.dbContext.connect();

        return await db
            .collection("suburbs")
            .aggregate<Suburb>([
                {
                    $search: {
                        index: "suburbs_search",
                        compound: {
                            should: [
                                {
                                    autocomplete: {
                                        path: "name",
                                        query,
                                        tokenOrder: "sequential",
                                    },
                                },
                                {
                                    autocomplete: {
                                        path: "postcode",
                                        query,
                                        tokenOrder: "sequential",
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
                    $limit: 5,
                },
                {
                    $sort: { score: -1 },
                },
            ])
            .toArray();
    }
}
