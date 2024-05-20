import { UnorderedListOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { CompactSearch } from "@/components/compactSearch";
import { MapSearch } from "@/components/mapSearch";
import { Header } from "@/components/header";
import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

const mapBoxApiKey = process.env.MAPBOX_API_KEY;

const boxHillLocation = {
    latitude: -37.801651,
    longitude: 145.126434,
};

export default function Search() {
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
                    centreLocation={boxHillLocation}
                    markerLocations={[
                        {
                            latitude: -37.80133,
                            longitude: 145.12674,
                        },
                        { latitude: -37.8117, longitude: 145.13638 },
                        { latitude: -37.80466, longitude: 145.13119 },
                        { latitude: -37.82034, longitude: 145.12699 },
                    ]}
                />
            </div>
        </div>
    );
}
