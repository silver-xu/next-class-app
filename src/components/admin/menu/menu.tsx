"use client";

import Link from "next/link";

import styles from "./menu.module.scss";

export type SelectedMenuItem = "dashboard" | "booking" | "class" | "setting";

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
                    Dashboard
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
                    Bookings
                </Link>
            </li>
            <li>
                <Link
                    href="/admin/class"
                    className={
                        props.selected === "class" ? styles.selected : ""
                    }
                >
                    <img src="/icons/clock.svg" />
                    Classes
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
