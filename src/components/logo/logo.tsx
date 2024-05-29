import styles from "./logo.module.scss";
import Link from "next/link";

export const Logo = () => (
    <div className={styles.logo}>
        <Link href="/">
            <span>next</span>class.
        </Link>
    </div>
);
