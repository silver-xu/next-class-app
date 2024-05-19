"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import styles from "./gallery.module.scss";

const images = [
    {
        original: "/school-images/1_resized.jpeg",
        thumbnail: "/school-images/1_resized.jpeg",
        thumbnailClass: "thumbnail",
    },
    {
        original: "/school-images/2_resized.jpeg",
        thumbnail: "/school-images/2_resized.jpeg",
        thumbnailClass: "thumbnail",
    },
    {
        original: "/school-images/3_resized.jpeg",
        thumbnail: "/school-images/3_resized.jpeg",
        thumbnailClass: "thumbnail",
    },
    {
        original: "/school-images/4_resized.jpeg",
        thumbnail: "/school-images/4_resized.jpeg",
        thumbnailClass: "thumbnail",
    },
    {
        original: "/school-images/5_resized.jpeg",
        thumbnail: "/school-images/5_resized.jpeg",
        thumbnailClass: "thumbnail",
    },
];

export interface GalleryProps {
    startIndex: number;
    curveTop: boolean;
}

export const Gallery = (props: GalleryProps) => (
    <ImageGallery
        items={images}
        showThumbnails={false}
        additionalClass={props.curveTop ? styles.gallery : ""}
        showFullscreenButton={false}
        showPlayButton={false}
        startIndex={props.startIndex}
        renderLeftNav={(onClick, disabled) => (
            <LeftOutlined
                onClick={onClick}
                disabled={disabled}
                className={styles.leftChev}
            />
        )}
        renderRightNav={(onClick, disabled) => (
            <RightOutlined
                onClick={onClick}
                disabled={disabled}
                className={styles.rightChev}
            />
        )}
    />
);
