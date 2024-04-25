import Link from "next/link";

import styles from "./header.module.scss";

export const Header = () => (
    <div>
        <div className={styles.logo}>
            <Link href="/admin/dashboard">nextclass.</Link>
            <span>Partner view</span>
        </div>
    </div>
);
