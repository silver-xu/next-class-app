import Link from "next/link";
import { Rate } from "antd";

import { ListingSearchResult } from "@/models/listingSearchResult";
import { slugify } from "@/utils/slugify";

import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./mapViewItem.module.scss";
import { Thumbnail } from "./thumbnail";

const baseUrl = "https://next-class-images.s3.ap-southeast-2.amazonaws.com";

interface MapViewItemProps {
    listingSearchResult: ListingSearchResult;
}

export const MapViewItem = (props: MapViewItemProps) => {
    const { listingSearchResult } = props;

    const rating = listingSearchResult.rating && (
        <>
            <span className={styles.ratingLabel}>
                {listingSearchResult.rating.toFixed(1)}
            </span>
            <Rate
                disabled
                value={listingSearchResult.rating}
                className={styles.rating}
            />
        </>
    );

    const prettyBusinessName = slugify(
        listingSearchResult.businessName
    ).toLowerCase();

    const imageUrl = listingSearchResult.thumbnailImagePaths
        ? `${baseUrl}/${encodeURIComponent(listingSearchResult.thumbnailImagePaths[0])}`
        : `${baseUrl}/default/thumbnail.png`;

    return (
        <Link
            href={`/listing/${listingSearchResult.listingId}/${prettyBusinessName}`}
        >
            <div className={styles.listingWrapper}>
                <Thumbnail imageUrl={imageUrl} />
                <div className={styles.infoWrapper}>
                    <div className={styles.heading}>
                        <h2>{listingSearchResult.businessName}</h2>
                    </div>
                    <div className={styles.infoWrapper}>
                        {rating}
                        <p className={styles.address}>
                            {listingSearchResult.address.fullAddress}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
