"use client";

import { EnvironmentTwoTone } from "@ant-design/icons";
import GoogleMapReact from "google-map-react";

import styles from "./map.module.scss";
import { Popover } from "antd";

interface Location {
    lat: number;
    lng: number;
}

interface MarkerProps {
    title: string;
    text: string;
    lat?: number;
    lng?: number;
}

const Marker = ({ title, text }: MarkerProps) => (
    <div className={styles.marker}>
        <Popover content={text} title={title} open={true}>
            <EnvironmentTwoTone />
        </Popover>
    </div>
);

export interface MapProps {
    businessName: string;
    streetAddress: string;
    location: Location;
}

export const Map = (props: MapProps) => {
    const { businessName, streetAddress, location } = props;

    return (
        <div
            style={{
                height: "350px",
                width: "100%",
            }}
        >
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBanqjipILLhWkzwWhMfSkxOwNmRYwnSUw",
                }}
                defaultCenter={location}
                defaultZoom={15}
            >
                <Marker
                    {...location}
                    text={streetAddress}
                    title={businessName}
                />
            </GoogleMapReact>
        </div>
    );
};
