export interface Location {
    type: string;
    coordinates: number[];
}

export interface AddressBreakdown {
    address1: string;
    city: string;
    state: string;
    postCode: string;
    country: string;
}

export interface Address {
    fullAddress: string | undefined;
    addressBreakdown: AddressBreakdown | undefined;
    location: Location;
}
