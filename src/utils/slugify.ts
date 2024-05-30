import { default as slugifyPackage } from "slugify";

export const slugify = (words: string): string =>
    slugifyPackage(words).toLowerCase();
