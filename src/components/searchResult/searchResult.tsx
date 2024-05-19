"use client";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Rate } from "antd";

import styles from "./searchResult.module.scss";

const images = [
    {
        original: `/school-images/1_resized.jpeg`,
    },
    {
        original: `/school-images/2_resized.jpeg`,
    },
    {
        original: `/school-images/3_resized.jpeg`,
    },
    {
        original: `/school-images/4_resized.jpeg`,
    },
    {
        original: `/school-images/5_resized.jpeg`,
    },
];

export const SearchResult = (props: { startIndex: number }) => (
    <li className={styles.searchResult}>
        <ImageGallery
            items={images}
            showThumbnails={false}
            additionalClass={styles.gallery}
            showFullscreenButton={false}
            showPlayButton={false}
            startIndex={props.startIndex}
        />
        <div className={styles.heading}>
            <h2>Mock Arts Studio</h2>
            <span className={styles.tag}>150m</span>
        </div>
        <div className={styles.infoWrapper}>
            <span className={styles.ratingLabel}>5.0</span>
            <Rate disabled value={5} className={styles.rating} />
            <p className={styles.address}>
                327 Whitehorse Rd, Balwyn VIC 3103{" "}
            </p>
        </div>
    </li>
);
