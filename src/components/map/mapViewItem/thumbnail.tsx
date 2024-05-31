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
        <Image
            src={props.imageUrl}
            className={styles.thumbnail}
            alt="Thumbnails"
        />
    </div>
);
