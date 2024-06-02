import { SearchMode } from "@/components/search/combinedSearch";
import { Bounds } from "@/components/map/mapView";
import { MapArea } from "@/models/mapArea";
import { Suburb } from "@/models/suburb";
import { slugify } from "./slugify";

export const getFullyQualifiedSearchUrl = (
    searchMode: SearchMode,
    query: string,
    suburb: Suburb | MapArea | undefined,
    bounds: Bounds | undefined,
    searchRadius: number,
    searchSorting: string
) => {
    const suburbId = bounds ? "bounds" : suburb!.suburbId;
    const suburbName = bounds
        ? `[${bounds.northeast.lng},${bounds.northeast.lat}]:[${bounds.southwest.lng},${bounds.southwest.lat}]`
        : slugify(suburb!.fullName);

    return `/search/${suburbId}/${suburbName}?q=${query}&m=${searchMode}&radius=${searchRadius}&sorting=${searchSorting}`;
};
