"use client";

import { EnvironmentFilled } from "@ant-design/icons";
import MapBox, { Marker } from "react-map-gl";

import { Location } from "../models/location";

import styles from "./mapSearch.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

export interface MapSearchProps {
    mapBoxApiKey: string | undefined;
    markerLocations: Location[];
    centreLocation: Location;
}

export const MapSearch = (props: MapSearchProps) => {
    const { mapBoxApiKey, centreLocation, markerLocations: locations } = props;

    const markers = locations.map((location, idx) => (
        <Marker
            key={idx}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor="bottom"
        >
            <EnvironmentFilled className={styles.marker} />
        </Marker>
    ));
    return (
        <MapBox
            mapboxAccessToken={mapBoxApiKey}
            initialViewState={{
                ...centreLocation,
                zoom: 14,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            attributionControl={false}
        >
            {markers}
        </MapBox>
    );
};
