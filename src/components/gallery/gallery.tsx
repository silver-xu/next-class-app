"use client";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./gallery.module.scss";

const baseUrl = "https://next-class-images.s3.ap-southeast-2.amazonaws.com";

export interface GalleryProps {
    thumbnailImagePaths: string[] | undefined;
    curveTop: boolean;
}

export const Gallery = (props: GalleryProps) => {
    const { thumbnailImagePaths } = props;
    const images = thumbnailImagePaths
        ? thumbnailImagePaths?.map((path) => ({
              thumbnail: `${baseUrl}/${encodeURIComponent(path)}`,
              original: `${baseUrl}/${encodeURIComponent(path)}`,
              thumbnailClass: "thumbnail",
          }))
        : [
              {
                  thumbnail: `${baseUrl}/default/thumbnail.png`,
                  original: `${baseUrl}/default/thumbnail.png`,
                  thumbnailClass: "thumbnail",
              },
          ];

    return (
        <ImageGallery
            items={images}
            showThumbnails={false}
            additionalClass={props.curveTop ? styles.gallery : ""}
            showFullscreenButton={false}
            showPlayButton={false}
            renderLeftNav={(onClick, disabled) => (
                <LeftOutlined
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                    }}
                    disabled={disabled}
                    className={styles.leftChev}
                />
            )}
            renderRightNav={(onClick, disabled) => (
                <RightOutlined
                    onClick={(e) => {
                        e.preventDefault();
                        onClick(e);
                    }}
                    disabled={disabled}
                    className={styles.rightChev}
                />
            )}
        />
    );
};
