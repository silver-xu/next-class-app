"use client";

import { Card, Radio } from "antd";

import { StatsCard } from "../stats-card";
import { LineChart } from "../line-chart";

import commonStyles from "../common.module.scss";
import styles from "./dashboard.module.scss";

const options = [
    { label: "Today", value: "Today" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Annually", value: "Annually" },
];

export const Dashboard = () => (
    <div className={`${commonStyles.content} ${styles.content}`}>
        <div className={commonStyles.title}>
            <div className={styles.dashboardTitle}>
                <h1>Dashboard</h1>
                <p>Booking analytics, statistics and more.</p>
            </div>
            <Radio.Group
                options={options}
                value="Today"
                optionType="button"
                className={commonStyles.options}
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
