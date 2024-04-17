"use client";

import {
    MenuOutlined,
    CloseOutlined,
    HomeOutlined,
    UserOutlined,
    InfoOutlined,
    MessageOutlined,
} from "@ant-design/icons";

import styles from "./header.module.scss";
import { useState } from "react";

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
                        Home
                        <HomeOutlined className={styles.icon} />
                    </li>
                    <li>
                        Sign In / Register
                        <UserOutlined className={styles.icon} />
                    </li>
                    <li>
                        About us
                        <InfoOutlined className={styles.icon} />
                    </li>
                    <li>
                        Contact us
                        <MessageOutlined className={styles.icon} />
                    </li>
                </ul>
            </div>
            <div className={styles.overlay} onClick={closeMenu}></div>
        </div>
    ) : undefined;

    return (
        <div className={headerClassNames[theme]}>
            <div className={styles.logo}>nextclass.</div>
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
