"use client";

import Link from "next/link";

import styles from "./menu.module.scss";

export const Menu = () => (
    <div>
        <ul className={styles.menu}>
            <li>
                <Link href="/admin/dashboard" className={styles.selected}>
                    <img src="/icons/monitor.svg" />
                    Partner Dashboard
                </Link>
            </li>
            <li>
                <Link href="/admin/dashboard">
                    <img src="/icons/calendar.svg" />
                    Manage Bookings
                </Link>
            </li>
            <li>
                <Link href="/admin/dashboard">
                    <img src="/icons/clock.svg" />
                    Manage Sessions
                </Link>
            </li>
            <li>
                <Link href="/admin/dashboard">
                    <img src="/icons/cogs.svg" />
                    Settings
                </Link>
            </li>
            <li>
                <Link href="/admin/dashboard">
                    <img src="/icons/logout.svg" />
                    Logout
                </Link>
            </li>
        </ul>
    </div>
);
