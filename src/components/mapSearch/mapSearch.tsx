"use client";

import { UnorderedListOutlined } from "@ant-design/icons";
import { EnvironmentFilled } from "@ant-design/icons";
import MapBox, { Marker } from "react-map-gl";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Gallery } from "../gallery";
import { Button } from "antd";
import Link from "next/link";
import { Rate } from "antd";

import { Location } from "../models/location";

import searchResultStyles from "../searchResult/searchResult.module.scss";
import styles from "./mapSearch.module.scss";

import "mapbox-gl/dist/mapbox-gl.css";

const boundsFactor = 1;

export interface MapSearchProps {
    mapBoxApiKey: string | undefined;
    markerLocations: Location[];
    centreLocation: Location;
}

interface Bounds {
    southwest: Location;
    northeast: Location;
}

const getBounds = (locations: Location[]): Bounds => {
    let minLat = Number.MAX_VALUE,
        maxLat = -1 * Number.MAX_VALUE,
        minLng = Number.MAX_VALUE,
        maxLng = -1 * Number.MAX_VALUE;

    locations.forEach((location) => {
        if (location.lat < minLat) {
            minLat = location.lat;
        }
        if (location.lat > maxLat) {
            maxLat = location.lat;
        }

        if (location.lng < minLng) {
            minLng = location.lng;
        }

        if (location.lng > maxLng) {
            maxLng = location.lng;
        }
    });
    return {
        southwest: {
            lat: minLat * boundsFactor,
            lng: minLng * boundsFactor,
        },
        northeast: {
            lat: maxLat * boundsFactor,
            lng: maxLng * boundsFactor,
        },
    };
};

export const MapSearch = (props: MapSearchProps) => {
    const { mapBoxApiKey, markerLocations } = props;
    const [popupOpen, setPopupOpen] = useState(false);
    const [markerClicked, setMarkerClicked] = useState(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = useRef<any>(null);

    const onMarkerClick = (location: Location) => {
        setMarkerClicked(true);
        if (popupOpen) {
            setPopupOpen(false);

            setTimeout(() => setPopupOpen(true), 300);
        } else {
            setPopupOpen(true);
        }

        mapRef.current?.setPadding({
            top: 100,
            left: 100,
            right: 100,
            bottom: 500,
        });

        mapRef.current?.flyTo({
            center: [location.lng, location.lat],
        });

        setTimeout(() => setMarkerClicked(false), 500);
    };

    const markers = markerLocations.map((location, idx) => (
        <Marker
            key={idx}
            longitude={location.lng}
            latitude={location.lat}
            anchor="bottom"
        >
            <EnvironmentFilled
                className={styles.marker}
                onClick={() => onMarkerClick(location)}
            />
        </Marker>
    ));

    const listView = !popupOpen && (
        <div className={styles.floatButton}>
            <Button type="primary" href="/search">
                <UnorderedListOutlined /> List View
            </Button>
        </div>
    );

    const bounds = getBounds(markerLocations);

    return (
        <>
            <MapBox
                ref={mapRef}
                mapboxAccessToken={mapBoxApiKey}
                initialViewState={{
                    // ...centreLocation,
                    // zoom: 14,
                    fitBoundsOptions: {
                        padding: {
                            top: 100,
                            right: 100,
                            bottom: 100,
                            left: 100,
                        },
                    },
                    bounds: [bounds.southwest, bounds.northeast],
                }}
                style={{ width: "100%", height: "100%" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                attributionControl={false}
                onClick={() => {
                    if (!markerClicked) {
                        setPopupOpen(false);
                    }
                }}
            >
                {markers}
            </MapBox>
            <motion.div
                className={styles.popup}
                initial={{ bottom: -1000 }}
                animate={popupOpen ? { bottom: 0 } : { bottom: -1000 }}
                transition={{ duration: 0.2 }}
            >
                <div
                    className={`${searchResultStyles.searchResult} ${styles.searchResult}`}
                >
                    <Link href="/listing">
                        <Gallery startIndex={0} curveTop={false} />
                        <div className={searchResultStyles.heading}>
                            <h2>Mock Arts Studio</h2>
                        </div>
                        <div className={searchResultStyles.infoWrapper}>
                            <span className={searchResultStyles.ratingLabel}>
                                5.0
                            </span>
                            <Rate
                                disabled
                                value={5}
                                className={searchResultStyles.rating}
                            />
                            <p className={searchResultStyles.address}>
                                327 Whitehorse Rd, Balwyn VIC 3103
                            </p>
                        </div>
                    </Link>
                </div>
            </motion.div>
            {listView}
        </>
    );
};
