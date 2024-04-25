"use client";

import dynamic from "next/dynamic";

const Line = dynamic(
    () => import("@ant-design/charts").then((module) => module.Line),
    { ssr: false }
);

export const LineChart = () => {
    const data = [
        { day: "Monday", bookings: 3 },
        { day: "Tuesday", bookings: 4 },
        { day: "Wednesday", bookings: 3.5 },
        { day: "Thursday", bookings: 5 },
        { day: "Friday", bookings: 4.9 },
        { day: "Saturday", bookings: 6 },
        { day: "Sunday", bookings: 7 },
    ];

    const config = {
        data,
        height: 300,
        xField: "day",
        yField: "bookings",
        point: {
            size: 5,
            shape: "diamond | circule",
        },
    };

    return <Line {...config} />;
};
