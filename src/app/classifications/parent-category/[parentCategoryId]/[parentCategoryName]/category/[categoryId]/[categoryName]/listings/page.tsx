import Link from "next/link";

import { CategoryRepository } from "@/db/categoryRepository";
import { ListingRepository } from "@/db/listingRepository";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Category } from "@/models/category";
import { Listing } from "@/models/listing";
import { slugify } from "@/utils/slugify";
import Layout from "@/app/layout";

import styles from "../../../../../../../page.module.scss";

export const metadata = {
    title: "nextclass. | Classifications | Categories",
    description: "nextclass. | Classifications | Categories",
};

export default async function Listings({
    params,
}: {
    params: { parentCategoryId: string; categoryId: string };
}) {
    const { parentCategoryId, categoryId } = params;

    const categoryRepository = new CategoryRepository();
    const parentCategory =
        await categoryRepository.getParentCategoryByParentId(parentCategoryId);

    const category = parentCategory!.categories.find(
        (category: Category) => category.categoryId === categoryId
    );

    const listingRepository = new ListingRepository();
    const listings = await listingRepository.getAllByCategory(category!.name);

    const listingsList = listings?.map((listing: Listing, idx: number) => (
        <li key={idx}>
            <h3>
                <Link
                    href={`/listing/${listing.listingId}/${slugify(listing.businessName)}`}
                >
                    {listing.businessName}
                </Link>
            </h3>
        </li>
    ));

    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <Header theme="light" />
                <div className={styles.contents}>
                    <h2>{category?.name}</h2>
                    <ul>{listingsList}</ul>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}

export async function generateStaticParams() {
    const categoryRepository = new CategoryRepository();
    const parentCategories = await categoryRepository.getParentCategories();

    const params = [];

    for (const parentCategory of parentCategories) {
        for (const category of parentCategory.categories) {
            params.push({
                parentCategoryId: parentCategory.parentCategoryId,
                categoryId: category.categoryId,
            });
        }
    }

    return params;
}
