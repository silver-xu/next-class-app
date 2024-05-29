import React from "react";

import styles from "./footer.module.scss";
import { Logo } from "../logo";
import Link from "next/link";

export const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.logoWrapper}>
            <Logo />
        </div>
        <ul className={styles.menu}>
            <li>Home</li>
            <li>About Us</li>
            <li>Sitemap</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Statement</li>
        </ul>
        <div className={styles.copyright}>
            <Link href="/">nextclass.com.au</Link>, all rights reserved 2024
        </div>
    </div>
);
