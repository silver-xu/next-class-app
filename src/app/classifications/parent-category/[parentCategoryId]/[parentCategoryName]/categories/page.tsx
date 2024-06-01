import Link from "next/link";

import { CategoryRepository } from "@/db/categoryRepository";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Category } from "@/models/category";
import { slugify } from "@/utils/slugify";
import Layout from "@/app/layout";

import styles from "../../../../page.module.scss";

export const metadata = {
    title: "nextclass. | Classifications | Categories",
    description: "nextclass. | Classifications | Categories",
};

export default async function Categories({
    params,
}: {
    params: { parentCategoryId: string };
}) {
    const { parentCategoryId } = params;

    const categoryRepository = new CategoryRepository();
    const parentCategory =
        await categoryRepository.getParentCategoryByParentId(parentCategoryId);

    console.log(parentCategory);
    const categoriesList = parentCategory?.categories.map(
        (category: Category, idx: number) => (
            <li key={idx}>
                <h3>
                    <Link
                        href={`/classifications/parent-category/${parentCategoryId}/${slugify(parentCategory.name)}/category/${category.categoryId}/${slugify(category.name)}/listings`}
                    >
                        {category.name}
                    </Link>
                </h3>
            </li>
        )
    );

    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Header theme="light" />
                <div className={styles.contents}>
                    <h2>{parentCategory?.name}</h2>
                    <ul>{categoriesList}</ul>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export async function generateStaticParams() {
    const categoryRepository = new CategoryRepository();
    const parentCategories = await categoryRepository.getParentCategories();

    return parentCategories.map((parentCategory) => ({
        parentCategoryId: parentCategory.parentCategoryId,
    }));
}
