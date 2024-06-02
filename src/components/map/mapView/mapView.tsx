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
import { getFullyQualifiedSearchUrl } from "@/utils/urlUtils";
import styles from "./mapView.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

const boundsFactor = 1;

export interface MapSearchProps {
    mapBoxApiKey: string | undefined;
}

export interface Bounds {
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

    const [loaded, setLoaded] = useState<boolean>(false);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mapRef = useRef<any>(null);

    const {
        listingSearchResults,
        query,
        setSelectedSuburb,
        setIsNewSearch,
        selectedSuburb,
        searchSorting,
        searchRadius,
        bounds,
        setBounds,
    } = useContext(SearchContext);

    const onMarkerClick = (listing: ListingSearchResult) => {
        setMarkerClicked(true);
        setSelectedListing(listing);

        if (popupOpen) {
            setPopupOpen(false);

            setTimeout(() => setPopupOpen(true), 300);
        } else {
            setPopupOpen(true);
        }

        setTimeout(() => {
            setMarkerClicked(false);
        }, 2000);
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
        if (!listingSearchResults) {
            return;
        }
        const searchBounds = getBounds(listingSearchResults);
        setBounds(getBounds(listingSearchResults));

        mapRef.current &&
            mapRef.current.fitBounds(
                [
                    [searchBounds.northeast.lng, searchBounds.northeast.lat],
                    [searchBounds.southwest.lng, searchBounds.southwest.lat],
                ],
                50
            );

        setTimeout(() => setLoaded(true), 3000);
    }, [listingSearchResults]);

    const listingView = selectedListing && (
        <MapViewItem listingSearchResult={selectedListing} />
    );

    const onMove = async () => {
        const mapGL = mapRef.current.getMap();
        const bounds = mapGL.getBounds();

        setBounds({
            northeast: bounds._ne,
            southwest: bounds._sw,
        });

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                "map",
                query!,
                selectedSuburb,
                {
                    northeast: bounds._ne,
                    southwest: bounds._sw,
                },
                searchRadius,
                searchSorting
            )
        );

        if (!markerClicked && loaded) {
            setMoved(true);
            setIsNewSearch(true);
        }
    };

    const onAreaSearchClicked = async () => {
        const currentBounds = bounds!;
        setSelectedSuburb({
            fullName: "Map Area",
            suburbId: "bounds",
            bounds: {
                northEast: [
                    currentBounds.northeast.lng,
                    currentBounds.northeast.lat,
                ],
                southWest: [
                    currentBounds.southwest.lng,
                    currentBounds.southwest.lat,
                ],
            },
        });

        setLoaded(false);
        setMoved(false);
        setIsNewSearch(true);

        window.history.pushState(
            {},
            "",
            getFullyQualifiedSearchUrl(
                "map",
                query!,
                selectedSuburb,
                currentBounds,
                searchRadius,
                searchSorting
            )
        );
    };

    const onLoad = () => {
        if (!bounds) {
            return;
        }

        mapRef.current.fitBounds([
            [bounds.northeast.lng, bounds.northeast.lat],
            [bounds.southwest.lng, bounds.southwest.lat],
        ]);

        setTimeout(() => setLoaded(true), 2000);
    };

    return (
        <>
            <div className={styles.mapWrapper}>
                <div className={styles.mapView}>
                    <MapBox
                        ref={mapRef}
                        mapboxAccessToken={mapBoxApiKey}
                        onMove={onMove}
                        onLoad={onLoad}
                        initialViewState={{
                            bounds: [
                                [144.75162903213288, -37.94738737623074],
                                [145.2759752895912, -37.65054733300053],
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
