"use client";

import { Card, Radio } from "antd";

import { StatsCard } from "../stats-card";
import { LineChart } from "../line-chart";

import styles from "./dashboard.module.scss";

const options = [
    { label: "Today", value: "Today" },
    { label: "This Week", value: "This Week" },
    { label: "This Month", value: "This Month" },
    { label: "This Year", value: "This Year" },
];

export const Dashboard = () => (
    <div className={styles.content}>
        <div className={styles.title}>
            <div className={styles.dashboardTitle}>
                <h1>Dashboard</h1>
                <p>Booking analytics, statistics and more.</p>
            </div>
            <Radio.Group
                options={options}
                value="Today"
                optionType="button"
                className={styles.options}
            />
        </div>
        <div className={styles.cards}>
            <StatsCard
                title="Page Views"
                stats={105}
                unit="times"
                iconPath="/icons/firefox.svg"
            />
            <StatsCard
                title="Bookings"
                stats={35}
                unit="times"
                iconPath="/icons/calendar.svg"
            />
            <StatsCard
                title="Wishlists"
                stats={10}
                unit="times"
                iconPath="/icons/wishlist.svg"
            />
        </div>
        <Card title="Trend in the last 7 days" className={styles.card}>
            <LineChart />
        </Card>
    </div>
);
