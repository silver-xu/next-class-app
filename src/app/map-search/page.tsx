import { UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";

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
    const centroid = { latitude: 0, longitude: 0 };

    for (let i = 0; i < locations.length; i++) {
        const location = locations[i];
        centroid.latitude += location.latitude;
        centroid.longitude += location.longitude;
    }

    centroid.latitude /= locations.length;
    centroid.longitude /= locations.length;

    return centroid;
};

export default function Search() {
    const locations = [
        { latitude: -37.8117, longitude: 145.13638 },
        { latitude: -37.80466, longitude: 145.13119 },
        { latitude: -37.82034, longitude: 145.12699 },
    ];

    const centroid = getCentroid(locations);

    return (
        <div className={styles.contentWrapper}>
            <Header theme="light" />
            <CompactSearch />
            <div className={styles.floatButton}>
                <Button type="primary" href="/search">
                    <UnorderedListOutlined /> List View
                </Button>
            </div>
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
