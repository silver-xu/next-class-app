"use client";

import { useParams, useSearchParams } from "next/navigation";
import { UnorderedListOutlined } from "@ant-design/icons";
import { EnvironmentFilled } from "@ant-design/icons";
import MapBox, { Marker } from "react-map-gl";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import Link from "next/link";

import { MapLocation } from "@/models/map-location";
import { Listing } from "@/models/listing";

import listViewItemStyles from "../listViewItem/listViewItem.module.scss";
import { ListViewItem } from "../listViewItem";
import styles from "./mapView.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

const boundsFactor = 1;

export interface MapSearchProps {
    mapBoxApiKey: string | undefined;
    listings: Listing[];
}

interface Bounds {
    southwest: MapLocation;
    northeast: MapLocation;
}

const getBounds = (listings: Listing[]): Bounds => {
    let minLat = Number.MAX_VALUE,
        maxLat = -1 * Number.MAX_VALUE,
        minLng = Number.MAX_VALUE,
        maxLng = -1 * Number.MAX_VALUE;

    listings.forEach((listing) => {
        const [longitude, latitude] = listing.address.location.coordinates;

        if (latitude < minLat) {
            minLat = latitude;
        }
        if (latitude > maxLat) {
            maxLat = latitude;
        }

        if (longitude < minLng) {
            minLng = longitude;
        }

        if (longitude > maxLng) {
            maxLng = longitude;
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

export const MapView = (props: MapSearchProps) => {
    const q = useSearchParams().get("q");
    const suburbId = decodeURIComponent(useParams().suburbId as string);
    const suburbFullname = decodeURIComponent(
        useParams().suburbFullname as string
    );

    const { listings, mapBoxApiKey } = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [selectedListing, setSelectedListing] = useState<Listing | undefined>(
        undefined
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = useRef<any>(null);

    const onMarkerClick = (listing: Listing) => {
        setMarkerClicked(true);
        setSelectedListing(listing);

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

        const [longitude, latitude] = listing.address.location.coordinates;

        mapRef.current?.flyTo({
            center: [longitude, latitude],
        });

        setTimeout(() => setMarkerClicked(false), 500);
    };

    const markers = listings.map((listing, idx) => {
        const [longitude, latitude] = listing.address.location.coordinates;

        return (
            <Marker
                key={idx}
                longitude={longitude}
                latitude={latitude}
                anchor="bottom"
            >
                <EnvironmentFilled
                    className={styles.marker}
                    onClick={() => onMarkerClick(listing)}
                />
            </Marker>
        );
    });

    const listView = !popupOpen && (
        <div className={styles.floatButton}>
            <Button
                type="primary"
                href={`/search/${suburbId}/${suburbFullname}?q=${q}`}
            >
                <UnorderedListOutlined /> List View
            </Button>
        </div>
    );

    const bounds = getBounds(listings);

    const listingView = selectedListing && (
        <ListViewItem listing={selectedListing} />
    );

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
                            top: 50,
                            right: 50,
                            bottom: 50,
                            left: 50,
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
                    className={`${listViewItemStyles.searchResult} ${styles.searchResult}`}
                >
                    <Link href="/listing">{listingView}</Link>
                </div>
            </motion.div>
            {listView}
        </>
    );
};
