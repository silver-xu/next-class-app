import { CompactSearch } from "@/components/compactSearch";
import { Location } from "@/components/models/location";
import { MapSearch } from "@/components/mapSearch";
import { Header } from "@/components/header";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

const mapBoxApiKey = process.env.MAPBOX_API_KEY;

const getCentroid = (locations: Location[]): Location => {
    const centroid = { lat: 0, lng: 0 };

    for (let i = 0; i < locations.length; i++) {
        const location = locations[i];
        centroid.lat += location.lat;
        centroid.lng += location.lng;
    }

    centroid.lat /= locations.length;
    centroid.lng /= locations.length;

    return centroid;
};

export default function Search() {
    const locations = [
        { lat: -37.8117, lng: 145.13638 },
        { lat: -37.80466, lng: 145.13119 },
        { lat: -37.82034, lng: 145.12699 },
    ];

    const centroid = getCentroid(locations);

    return (
        <div className={styles.contentWrapper}>
            <Header theme="light" />
            <CompactSearch />
            <div className={styles.mapView}>
                <MapSearch
                    mapBoxApiKey={mapBoxApiKey}
                    centreLocation={centroid}
                    markerLocations={locations}
                />
            </div>
        </div>
    );
}
