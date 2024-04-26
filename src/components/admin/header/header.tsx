"use client";

import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import Link from "next/link";

import { SelectedMenuItem, Menu } from "../menu";

import styles from "./header.module.scss";

export interface HeaderProps {
    selected: SelectedMenuItem;
}

export const Header = (props: HeaderProps) => {
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
                    <h1>Partner Views</h1>
                    <CloseOutlined
                        className={styles.close}
                        onClick={closeMenu}
                    />
                </div>
                <Menu selected={props.selected} />
            </div>
            <div className={styles.overlay} onClick={closeMenu}></div>
        </div>
    ) : undefined;

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link href="/admin/dashboard">nextclass.</Link>
                <span>Partner</span>
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
