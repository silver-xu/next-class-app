import BigNumber from "bignumber.js";

import { Timeslot } from "./timeslot";
import { Address } from "./address";
import { Contact } from "./contact";

export interface Listing {
    listingId: number;
    listingNumber: string;
    title: string;
    audience: string;
    description: string;
    imageUrls: string[];
    addressOverride?: Address;
    contactOverride?: Contact;
    price: BigNumber;
    duration: number;
    timeslots: Timeslot[];
    blackoutDays: Date;
}
