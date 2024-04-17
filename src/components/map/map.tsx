"use client";
import MapBox, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { useMemo } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

export interface Location {
    longitude: number;
    latitude: number;
}

export interface MapProps {
    streetAddress: string;
    location: Location;
    mapBoxApiKey: string | undefined;
}

export const Map = (props: MapProps) => {
    const { streetAddress, location, mapBoxApiKey } = props;
    const { longitude, latitude } = location;

    const popup = useMemo(() => {
        return new mapboxgl.Popup().setText(streetAddress);
    }, []);

    return (
        <MapBox
            mapboxAccessToken={mapBoxApiKey}
            initialViewState={{
                ...location,
                zoom: 14,
            }}
            style={{ width: "100%", height: "350px" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            attributionControl={false}
        >
            <Marker
                longitude={longitude}
                latitude={latitude}
                popup={popup}
            ></Marker>
        </MapBox>
    );
};
