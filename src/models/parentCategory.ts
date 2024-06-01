import { Category } from "./category";

export interface ParentCategory {
    parentCategoryId: string;
    name: string;
    categories: Category[];
}
