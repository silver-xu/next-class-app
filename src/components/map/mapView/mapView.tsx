"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { Circle, MapPin } from "iconoir-react";
import MapBox, { Marker } from "react-map-gl";
import { motion } from "framer-motion";
import { Button } from "antd";
import Link from "next/link";

import { SearchContext } from "@/components/context/searchContext";
import { ListingSearchResult } from "@/models/listingSearchResult";
import { MapViewItem } from "@/components/map/mapViewItem";
import { MapLocation } from "@/models/map-location";

import listViewItemStyles from "@/components/list/listViewItem/listViewItem.module.scss";
import styles from "./mapView.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

const boundsFactor = 1;

export interface MapSearchProps {
    mapBoxApiKey: string | undefined;
}

interface Bounds {
    southwest: MapLocation;
    northeast: MapLocation;
}

const getBounds = (
    listingSearchResults: ListingSearchResult[] | undefined
): Bounds => {
    if (!listingSearchResults) {
        return {
            southwest: {
                lat: -37.94738737623074,
                lng: 144.75162903213288,
            },
            northeast: {
                lat: -37.65054733300053,
                lng: 145.2759752895912,
            },
        };
    }

    let minLat = Number.MAX_VALUE,
        maxLat = -1 * Number.MAX_VALUE,
        minLng = Number.MAX_VALUE,
        maxLng = -1 * Number.MAX_VALUE;

    listingSearchResults?.forEach((listingSearchResult) => {
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
    const { mapBoxApiKey } = props;

    const [popupOpen, setPopupOpen] = useState(false);
    const [markerClicked, setMarkerClicked] = useState(false);
    const [moved, setMoved] = useState(false);
    const [selectedListing, setSelectedListing] = useState<
        ListingSearchResult | undefined
    >(undefined);

    const [bounds, setBounds] = useState<Bounds>({
        southwest: {
            lat: -37.94738737623074,
            lng: 144.75162903213288,
        },
        northeast: {
            lat: -37.65054733300053,
            lng: 145.2759752895912,
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = useRef<any>(null);

    const {
        listingSearchResults,
        fireSearchListingsInBounds,
        setSelectedSuburb,
        setIsNewSearch,
    } = useContext(SearchContext);

    const onMarkerClick = (listing: ListingSearchResult) => {
        setMarkerClicked(true);
        setSelectedListing(listing);
        setMoved(false);

        if (popupOpen) {
            setPopupOpen(false);

            setTimeout(() => setPopupOpen(true), 300);
        } else {
            setPopupOpen(true);
        }

        const [longitude, latitude] = listing.address.location.coordinates;

        mapRef.current?.flyTo({
            center: [longitude, latitude],
        });

        setTimeout(() => {
            setMarkerClicked(false);
        }, 1000);
    };

    const markers =
        listingSearchResults?.map((listingSearchResult, idx) => {
            const [longitude, latitude] =
                listingSearchResult.address.location.coordinates;

            return (
                <Marker
                    key={idx}
                    longitude={longitude}
                    latitude={latitude}
                    anchor="bottom"
                >
                    {listingSearchResult.listingId !==
                        selectedListing?.listingId && (
                        <Circle
                            className={styles.marker}
                            onClick={() => onMarkerClick(listingSearchResult)}
                        />
                    )}
                    {listingSearchResult.listingId ===
                        selectedListing?.listingId && (
                        <MapPin
                            className={styles.selectedMarker}
                            onClick={() => onMarkerClick(listingSearchResult)}
                        />
                    )}
                </Marker>
            );
        }) ?? [];

    useEffect(() => {
        setBounds(getBounds(listingSearchResults));
    }, [listingSearchResults]);

    const listingView = selectedListing && (
        <MapViewItem listingSearchResult={selectedListing} />
    );

    const onMove = async () => {
        const mapGL = mapRef.current.getMap();
        const bounds = mapGL.getBounds();

        const { lng: northEastLng, lat: northEastLat } = bounds._ne;
        const { lng: southWestLng, lat: southWestLat } = bounds._sw;

        setSelectedSuburb({
            fullName: "Map Area",
            suburbId: "map",
            bounds: {
                northEast: [northEastLng, northEastLat],
                southWest: [southWestLng, southWestLat],
            },
        });

        if (!markerClicked) {
            setMoved(true);
            setIsNewSearch(true);
        }
    };

    const onAreaSearchClicked = async () => {
        await fireSearchListingsInBounds();
        setMoved(false);
        setIsNewSearch(true);
    };

    return (
        <>
            <div className={styles.mapWrapper}>
                <div className={styles.mapView}>
                    <MapBox
                        ref={mapRef}
                        mapboxAccessToken={mapBoxApiKey}
                        onMove={onMove}
                        initialViewState={{
                            bounds: bounds.southwest &&
                                bounds.northeast && [
                                    bounds.southwest,
                                    bounds.northeast,
                                ],
                        }}
                        style={{ width: "100%", height: "100%" }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        attributionControl={false}
                        onClick={() => {
                            if (!markerClicked) {
                                setPopupOpen(false);
                                setMoved(false);
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
                    <motion.div
                        initial={{ bottom: -1000 }}
                        animate={moved ? { bottom: 0 } : { bottom: -1000 }}
                        transition={{ duration: 0.2 }}
                        className={styles.updateSearchArea}
                    >
                        <div>
                            <p>Your map location has changed</p>
                            <Button
                                type="default"
                                className={styles.searchAreaButton}
                                onClick={onAreaSearchClicked}
                            >
                                Search this area
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};
