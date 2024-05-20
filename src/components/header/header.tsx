"use client";

import {
    MenuOutlined,
    CloseOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    RadarChartOutlined,
    MailOutlined,
} from "@ant-design/icons";

import { useState } from "react";
import Link from "next/link";

import styles from "./header.module.scss";

export interface HeaderProps {
    theme: HeaderTheme;
}

export type HeaderTheme = "light" | "dark" | "transparent";

export const Header = (props: HeaderProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const { theme } = props;

    const headerClassNames = {
        light: `${styles.header} ${styles.light}`,
        dark: `${styles.header} ${styles.dark}`,
        transparent: styles.header,
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const menu = showMenu ? (
        <div>
            <div className={styles.submenu}>
                <div className={styles.menuHeader}>
                    <h1>nextclass.</h1>
                    <CloseOutlined
                        className={styles.close}
                        onClick={closeMenu}
                    />
                </div>
                <ul>
                    <li>
                        <Link href="/">
                            <HomeOutlined />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <InfoCircleOutlined />
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <RadarChartOutlined /> Sitemap
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <MailOutlined /> Contact us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.overlay} onClick={closeMenu}></div>
        </div>
    ) : undefined;

    return (
        <div className={headerClassNames[theme]}>
            <div className={styles.logo}>
                <Link href="/">nextclass.</Link>
            </div>
            <div className={styles.menu}>
                <MenuOutlined
                    className={styles.menuIcon}
                    onClick={toggleMenu}
                />
                {menu}
            </div>
        </div>
    );
};
