import { Suburb } from "@/models/suburb";
import { DbContext } from "./dbContext";

export class SuburbRepository {
    private dbContext: DbContext;

    constructor() {
        this.dbContext = new DbContext();
    }

    public async getOne(suburbId: string): Promise<Suburb | undefined> {
        const db = await this.dbContext.connect();

        const result = await db
            .collection<Suburb>("suburbs")
            .findOne({ suburbId });

        return result ?? undefined;
    }

    public async search(query: string): Promise<Suburb[]> {
        const db = await this.dbContext.connect();

        const result = await db
            .collection("suburbs")
            .aggregate<Suburb>([
                {
                    $search: {
                        index: "suburbs_search",
                        compound: {
                            should: [
                                {
                                    autocomplete: {
                                        path: "fullName",
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

        return result;
    }
}
