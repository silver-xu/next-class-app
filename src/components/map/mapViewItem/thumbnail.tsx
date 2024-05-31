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
            width="0"
            height="0"
            sizes="100vw"
            src={props.imageUrl}
            alt="Thumbnails"
            className={styles.thumbnail}
        />
    </div>
);
