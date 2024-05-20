"use client";
import MapBox, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { useMemo } from "react";

import { Location } from "../models/location";

import "mapbox-gl/dist/mapbox-gl.css";

export interface MapProps {
    streetAddress: string;
    location: Location;
    mapBoxApiKey: string | undefined;
}

export const ListingMap = (props: MapProps) => {
    const { streetAddress, location, mapBoxApiKey } = props;
    const { lng, lat } = location;

    const popup = useMemo(() => {
        return new mapboxgl.Popup().setText(streetAddress);
    }, []);

    return (
        <MapBox
            mapboxAccessToken={mapBoxApiKey}
            initialViewState={{
                longitude: location.lng,
                latitude: location.lat,
                zoom: 14,
            }}
            style={{ width: "100%", height: "350px" }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            attributionControl={false}
        >
            <Marker longitude={lng} latitude={lat} popup={popup}></Marker>
        </MapBox>
    );
};
