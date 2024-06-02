import { CategoryRepository } from "@/db/categoryRepository";
import { ListingRepository } from "@/db/listingRepository";
import { slugify } from "@/utils/slugify";
import { MetadataRoute } from "next";

const baseUrl = "https://dev.nextclass.com.au";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const sitemapUrls = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/classifications`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    const categoryRepository = new CategoryRepository();
    const parentCategories = await categoryRepository.getParentCategories();

    const parentCategoryClassificationPages = parentCategories.map(
        (parentCategory) => ({
            url: `${baseUrl}/classifications/parent-category/${parentCategory.parentCategoryId}/${slugify(parentCategory.name)}/categories`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        })
    );

    const categoryParams = [];

    for (const parentCategory of parentCategories) {
        for (const category of parentCategory.categories) {
            categoryParams.push({
                parentCategoryId: parentCategory.parentCategoryId,
                parentCategoryName: slugify(parentCategory.name),
                categoryId: category.categoryId,
                categoryName: slugify(category.name),
            });
        }
    }

    const categoryClassificationPages = categoryParams.map((categoryParam) => ({
        url: `${baseUrl}/classifications/parent-category/${categoryParam.parentCategoryId}/${slugify(categoryParam.parentCategoryName)}/category/${categoryParam.categoryId}/${slugify(categoryParam.categoryName)}/listings`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
    }));

    const listingRepository = new ListingRepository();
    const listings = await listingRepository.getAll();

    const listingPages = listings.map((listing) => ({
        url: `${baseUrl}/listing/${listing.listingId}/${slugify(listing.businessName)}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
    }));

    return sitemapUrls
        .concat(parentCategoryClassificationPages)
        .concat(categoryClassificationPages)
        .concat(listingPages) as MetadataRoute.Sitemap;
}
