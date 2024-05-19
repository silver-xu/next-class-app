"use client";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import styles from "./gallery.module.scss";

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

export const Gallery = (props: { startIndex: number }) => (
    <ImageGallery
        items={images}
        showThumbnails={false}
        additionalClass={styles.gallery}
        showFullscreenButton={false}
        showPlayButton={false}
        startIndex={props.startIndex}
    />
);
