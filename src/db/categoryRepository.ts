import { ParentCategory } from "@/models/parentCategory";
import { DbContext } from "./dbContext";

export class CategoryRepository {
    private dbContext: DbContext;

    constructor() {
        this.dbContext = new DbContext();
    }

    public async getParentCategories(): Promise<ParentCategory[]> {
        const db = await this.dbContext.connect();

        const result = await db
            .collection<ParentCategory>("categories")
            .find()
            .toArray();

        return result;
    }

    public async getParentCategoryByParentId(
        parentCategoryId: string
    ): Promise<ParentCategory | undefined> {
        const db = await this.dbContext.connect();

        const result = await db
            .collection<ParentCategory>("categories")
            .findOne({ parentCategoryId });

        return result ?? undefined;
    }
}
