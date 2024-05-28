import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react";
import Link from "next/link";
import { Rate } from "antd";

import { Listing } from "@/models/listing";
import { SearchContext } from "../search";
import { Gallery } from "../gallery";

import { getDistanceInKms } from "@/utils/geoUtils";
import styles from "./listViewItem.module.scss";

interface ListViewItemProps {
    listing: Listing;
}

export const ListViewItem = (props: ListViewItemProps) => {
    const { listing } = props;

    const { searchSuburb } = useContext(SearchContext);

    const [listingLongitude, listingLatitude] =
        listing.address.location.coordinates;

    const [currentLongitude, currentLatitude] =
        searchSuburb!.location.coordinates;

    const distance = getDistanceInKms(
        listingLatitude,
        listingLongitude,
        currentLatitude,
        currentLongitude
    );

    const rating = listing.rating && (
        <>
            <span className={styles.ratingLabel}>
                {listing.rating.toFixed(1)}
            </span>
            <Rate disabled value={listing.rating} className={styles.rating} />
        </>
    );

    return (
        <Link href={`/listing/${listing.listingId}/${listing.businessName}`}>
            <Gallery listing={listing} curveTop={true} />
            <div className={styles.heading}>
                <h2>{listing.businessName}</h2>
                <span className={styles.tag}>{distance.toFixed(1)} kms</span>
            </div>
            <div className={styles.infoWrapper}>
                {rating}
                <p className={styles.address}>{listing.address.fullAddress}</p>
            </div>
        </Link>
    );
};
