import { Location } from "./address";

export interface Suburb {
    suburbId: string;
    ausPostId: string;
    name: string;
    fullName: string;
    postcode: string;
    state: string;
    location: Location;
}
