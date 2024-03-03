import { Contact } from "./contact";
import { Address } from "cluster";

export interface Provider {
    providerId: number;
    providerNumber: string;
    name: string;
    description: string;
    imageUrls: string[];
    address: Address;
    contact: Contact;
}
