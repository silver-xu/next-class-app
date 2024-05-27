import { Location } from "./address";

export interface Suburb {
    suburbId: string;
    ausPostId: string;
    name: string;
    postcode: string;
    state: string;
    location: Location;
}
