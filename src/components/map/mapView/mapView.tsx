"use client";

import MapBox, { Marker } from "react-map-gl";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { MapLocation } from "@/models/map-location";

import listViewItemStyles from "../../list/listViewItem/listViewItem.module.scss";
import { ListingSearchResult } from "@/models/listingSearchResult";
import { MapViewItem } from "../mapViewItem/mapViewItem";
import styles from "./mapView.module.scss";
import { Circle } from "iconoir-react";
import "mapbox-gl/dist/mapbox-gl.css";

const boundsFactor = 1;

export interface MapSearchProps {
    mapBoxApiKey: string | undefined;
    listingSearchResults: ListingSearchResult[];
}

interface Bounds {
    southwest: MapLocation;
    northeast: MapLocation;
}

const getBounds = (listingSearchResults: ListingSearchResult[]): Bounds => {
    let minLat = Number.MAX_VALUE,
        maxLat = -1 * Number.MAX_VALUE,
        minLng = Number.MAX_VALUE,
        maxLng = -1 * Number.MAX_VALUE;

    listingSearchResults.forEach((listingSearchResult) => {
        const [longitude, latitude] =
            listingSearchResult.address.location.coordinates;

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
    const { listingSearchResults, mapBoxApiKey } = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [selectedListing, setSelectedListing] = useState<
        ListingSearchResult | undefined
    >(undefined);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = useRef<any>(null);

    const onMarkerClick = (listing: ListingSearchResult) => {
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

    const markers = listingSearchResults.map((listingSearchResult, idx) => {
        const [longitude, latitude] =
            listingSearchResult.address.location.coordinates;

        return (
            <Marker
                key={idx}
                longitude={longitude}
                latitude={latitude}
                anchor="bottom"
            >
                <Circle
                    className={styles.marker}
                    onClick={() => onMarkerClick(listingSearchResult)}
                />
            </Marker>
        );
    });

    const bounds = getBounds(listingSearchResults);

    const listingView = selectedListing && (
        <MapViewItem listingSearchResult={selectedListing} />
    );

    return (
        <>
            <MapBox
                ref={mapRef}
                mapboxAccessToken={mapBoxApiKey}
                initialViewState={{
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
        </>
    );
};
