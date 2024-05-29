import { Suburb } from "@/models/suburb";
import { DbContext } from "./dbContext";

export class SuburbRepository {
    private dbContext: DbContext;
    private static db: Db;

    constructor() {
        this.dbContext = new DbContext();
    }

    public async getOne(suburbId: string): Promise<Suburb | undefined> {
        if (!SuburbRepository.db) {
            SuburbRepository.db = await this.dbContext.connect();
        }
        const result = await SuburbRepository.db
            .collection<Suburb>("suburbs")
            .findOne({ suburbId });

        return result ?? undefined;
    }

    public async search(query: string): Promise<Suburb[]> {
        if (!SuburbRepository.db) {
            SuburbRepository.db = await this.dbContext.connect();
        }
        const result = await SuburbRepository.db
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
