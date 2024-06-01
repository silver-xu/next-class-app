import Image from "next/image";

import styles from "./thumbnail.module.scss";

interface ThumbnailProps {
    imageUrl: string;
}

export const Thumbnail = (props: ThumbnailProps) => (
    <div
        className={styles.thumbnailWrapper}
        style={{ backgroundImage: props.imageUrl }}
    >
        <img
            src={props.imageUrl}
            alt="Thumbnails"
            className={styles.thumbnail}
        />
    </div>
);
