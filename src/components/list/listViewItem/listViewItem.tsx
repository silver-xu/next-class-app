import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react";
import Link from "next/link";
import { Rate } from "antd";

import { SearchContext } from "@/components/context/searchContext";
import { ListingSearchResult } from "@/models/listingSearchResult";
import { getDistanceInKms } from "@/utils/geoUtils";
import { Gallery } from "@/components/gallery";
import { slugify } from "@/utils/slugify";
import { Suburb } from "@/models/suburb";

import styles from "./listViewItem.module.scss";

interface ListViewItemProps {
    listingSearchResult: ListingSearchResult;
}

export const ListViewItem = (props: ListViewItemProps) => {
    const { listingSearchResult: listing } = props;

    const { selectedSuburb } = useContext(SearchContext);

    const [listingLongitude, listingLatitude] =
        listing.address.location.coordinates;

    let distance: number | undefined = undefined;

    if (selectedSuburb?.suburbId !== "map") {
        const [currentLongitude, currentLatitude] = (selectedSuburb as Suburb)
            .location.coordinates;

        distance = getDistanceInKms(
            listingLatitude,
            listingLongitude,
            currentLatitude,
            currentLongitude
        );
    }

    const rating = listing.rating && (
        <>
            <span className={styles.ratingLabel}>
                {listing.rating.toFixed(1)}
            </span>
            <Rate disabled value={listing.rating} className={styles.rating} />
        </>
    );

    const prettyBusinessName = slugify(listing.businessName).toLowerCase();

    return (
        <Link href={`/listing/${listing.listingId}/${prettyBusinessName}`}>
            <Gallery
                thumbnailImagePaths={listing.thumbnailImagePaths}
                curveTop={true}
            />
            <div className={styles.heading}>
                <h2>{listing.businessName}</h2>
                {distance && (
                    <span className={styles.tag}>
                        {distance.toFixed(1)} kms
                    </span>
                )}
            </div>
            <div className={styles.infoWrapper}>
                {rating}
                <p className={styles.address}>{listing.address.fullAddress}</p>
            </div>
        </Link>
    );
};
