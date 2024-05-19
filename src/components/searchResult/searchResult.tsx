import "react-image-gallery/styles/css/image-gallery.css";
import { Rate } from "antd";

import styles from "./searchResult.module.scss";
import { Gallery } from "../gallery";
import Link from "next/link";

export const SearchResult = (props: { startIndex: number }) => (
    <li className={styles.searchResult}>
        <Link href="/listing">
            <Gallery startIndex={props.startIndex} curveTop={true} />
            <div className={styles.heading}>
                <h2>Mock Arts Studio</h2>
                <span className={styles.tag}>
                    {150 * (props.startIndex + 1)}m
                </span>
            </div>
            <div className={styles.infoWrapper}>
                <span className={styles.ratingLabel}>5.0</span>
                <Rate disabled value={5} className={styles.rating} />
                <p className={styles.address}>
                    327 Whitehorse Rd, Balwyn VIC 3103
                </p>
            </div>
        </Link>
    </li>
);
