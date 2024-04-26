"use client";

import Link from "next/link";

import styles from "./menu.module.scss";

export type SelectedMenuItem = "dashboard" | "booking" | "session" | "setting";

export interface MenuProps {
    selected: SelectedMenuItem;
}

export const Menu = (props: MenuProps) => (
    <div>
        <ul className={styles.menu}>
            <li>
                <Link
                    href="/admin/dashboard"
                    className={
                        props.selected === "dashboard" ? styles.selected : ""
                    }
                >
                    <img src="/icons/monitor.svg" />
                    Partner Dashboard
                </Link>
            </li>
            <li>
                <Link
                    href="/admin/booking"
                    className={
                        props.selected === "booking" ? styles.selected : ""
                    }
                >
                    <img src="/icons/calendar.svg" />
                    Manage Bookings
                </Link>
            </li>
            <li>
                <Link
                    href="/admin/session"
                    className={
                        props.selected === "session" ? styles.selected : ""
                    }
                >
                    <img src="/icons/clock.svg" />
                    Manage Sessions
                </Link>
            </li>
            <li>
                <Link
                    href="/admin/setting"
                    className={
                        props.selected === "setting" ? styles.selected : ""
                    }
                >
                    <img src="/icons/cogs.svg" />
                    Settings
                </Link>
            </li>
            <li>
                <Link href="/user/logout">
                    <img src="/icons/logout.svg" />
                    Logout
                </Link>
            </li>
        </ul>
    </div>
);
