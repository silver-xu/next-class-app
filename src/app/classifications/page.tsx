import Link from "next/link";

import { CategoryRepository } from "@/db/categoryRepository";
import { ParentCategory } from "@/models/parentCategory";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { slugify } from "@/utils/slugify";
import Layout from "@/app/layout";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Classifications",
    description: "nextclass. | Classifications",
};

export default async function Classifications() {
    const categoryRepository = new CategoryRepository();

    const categories = await categoryRepository.getParentCategories();

    const parentCategoriesList = categories.map(
        (category: ParentCategory, idx: number) => (
            <li key={idx}>
                <h3>
                    <Link
                        href={`/classifications/parent-category/${category.parentCategoryId}/${slugify(category.name)}/categories`}
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
                    <h2>Classifications</h2>
                    <ul>{parentCategoriesList}</ul>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}
