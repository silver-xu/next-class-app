"use client";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

import styles from "./header.module.scss";
import { Logo } from "../logo";

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
                    <div className={styles.logo}>
                        <Link href="/">
                            <span>wel</span>come.
                        </Link>
                    </div>
                    <CloseOutlined
                        className={styles.close}
                        onClick={closeMenu}
                    />
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us">About us</Link>
                    </li>
                    <li>
                        <Link href="/classifications">Classifications</Link>
                    </li>
                    <li>
                        <Link href="/sitemap.xml">Sitemap</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact us</Link>
                    </li>
                </ul>
            </motion.div>
        </>
    );

    return (
        <div className={headerClassNames[theme]}>
            <Logo />
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
