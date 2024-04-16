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

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

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
            <div className={styles.overlay}></div>
        </div>
    ) : undefined;

    return (
        <div className={styles.header}>
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
