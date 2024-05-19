"use client";

import "react-image-gallery/styles/css/image-gallery.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import ImageGallery from "react-image-gallery";
import { Button, Rate } from "antd";

import { CompactSearch } from "@/components/compactSearch";
import { Header } from "@/components/header";
import styles from "./page.module.scss";

// export const metadata = {
//     title: "nextclass. | Search Result",
//     description: "nextclass. | Search Result",
// };

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

export default function Result() {
    const searchResults = Array.from(Array(15).keys()).map((i) => (
        <li className={styles.searchResult}>
            <ImageGallery
                items={images}
                showThumbnails={false}
                additionalClass={styles.gallery}
                showFullscreenButton={false}
                showPlayButton={false}
                startIndex={i % 5}
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
    ));

    return (
        <div className={styles.contentWrapper}>
            <Header theme="light" />
            <CompactSearch />
            <div className={styles.floatButton}>
                <Button type="primary">
                    <EnvironmentOutlined />
                    Map View
                </Button>
            </div>

            <div className={styles.searchResultWrapper}>
                <ul>{searchResults}</ul>
            </div>
        </div>
    );
}
