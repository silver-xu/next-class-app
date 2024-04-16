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
    lightTheme: boolean;
}

export const Header = (props: HeaderProps) => {
    const [showMenu, setShowMenu] = useState(false);
    const { lightTheme: innerPage } = props;

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const headerClassNames = innerPage
        ? `${styles.header} ${styles.light}`
        : styles.header;

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
        <div className={headerClassNames}>
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
