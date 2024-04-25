"use client";

import styles from "./stats-card.module.scss";

export interface StatsCardProps {
    title: string;
    stats: number;
    unit: string;
    iconPath: string;
}

export const StatsCard = (props: StatsCardProps) => (
    <div title="Booking this month" className={styles.card}>
        <div>
            <h2>{props.title}</h2>
            <div className={styles.stats}>
                <h3>{props.stats}</h3>
                <span>{props.unit}</span>
            </div>
        </div>
        <img src={props.iconPath} />
    </div>
);
