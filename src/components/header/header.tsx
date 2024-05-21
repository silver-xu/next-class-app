"use client";

import {
    MenuOutlined,
    CloseOutlined,
    HomeOutlined,
    InfoCircleOutlined,
    RadarChartOutlined,
    MailOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
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

    const menu = (
        <>
            <motion.div
                initial={{ right: 0 }}
                animate={
                    showMenu
                        ? { display: "block", opacity: 0.2 }
                        : { display: "none", opacity: 0 }
                }
                transition={{ duration: 0.2 }}
                className={styles.overlay}
                onClick={closeMenu}
            ></motion.div>
            <motion.div
                initial={{ right: -360 }}
                animate={showMenu ? { right: 0 } : { right: -360 }}
                transition={{ duration: 0.2 }}
                className={styles.submenu}
            >
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
            </motion.div>
        </>
    );

    return (
        <div className={headerClassNames[theme]}>
            <div className={styles.logo}>
                <Link href="/">
                    <span>next</span>class.
                </Link>
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
