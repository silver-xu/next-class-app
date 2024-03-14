"use client";

import BingMapsReact from "bingmaps-react";

export const Map = () => (
    <BingMapsReact
        bingMapsKey="AoBIBkGmk2PDWm7d0xfpMFqsbjkDu_EW4zr6oHAQGEqXqeK7QoywbX7TiXPrer_t"
        height="500px"
        mapOptions={{
            navigationBarMode: "square",
        }}
        width="100%"
        viewOptions={{
            center: {
                latitude: 42.360081,
                longitude: -71.058884,
            },
            mapTypeId: "grayscale",
        }}
    />
);
