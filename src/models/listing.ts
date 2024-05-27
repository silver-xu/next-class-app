import { Address } from "./address";
import { Contact } from "./contact";
import { GeneratedContent } from "./generated-content";
import { OpenHour } from "./opening-hour";

export interface Listing {
    listingId: string;
    googleDataId: string;
    googleDataCId: string;
    businessName: string;
    address: Address;
    openingHours: OpenHour[] | undefined;
    contact: Contact;
    website: string | undefined;
    rating: number | undefined;
    numOfReviews: number | undefined;
    category: string;
    type: string;
    description: string | undefined;
    generatedContent: GeneratedContent | undefined;
    lastScrapedDate: string;
    lastRefinedDate: string | undefined;
    lastWebsiteScrapedDate: string | undefined;
    webpageUrls: string[] | undefined;
    thumbnailImagePaths: string[] | undefined;
    originalImagePaths: string[] | undefined;
    lastGeneratedDate: string | undefined;
    isRelevant: boolean;
}
