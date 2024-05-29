import {
    PhoneOutlined,
    MailOutlined,
    GlobalOutlined,
    HeartOutlined,
} from "@ant-design/icons";
import dynamic from "next/dynamic";
import { Rate } from "antd";

import { ListingRepository } from "@/db/listingRepository";
import { Listing as ListingModel } from "@/models/listing";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import styles from "./page.module.scss";
import Layout from "../../../layout";

const Map = dynamic(
    () =>
        import("../../../../components/listingMap").then(
            (mod) => mod.ListingMap
        ),
    { ssr: false }
);

const mapBoxApiKey = process.env.MAPBOX_API_KEY;

const listingRepository = new ListingRepository();

export default async function Listing({
    params,
}: {
    params: { listingId: string };
}) {
    const { listingId } = params;

    const listing = await fetchListing(listingId);

    if (!listing) {
        return;
    }

    const rating = listing.rating && (
        <>
            <span className={styles.ratingLabel}>
                {listing.rating?.toFixed(1)}
            </span>
            <Rate disabled value={listing.rating} className={styles.rating} />
        </>
    );

    const [lng, lat] = listing.address.location.coordinates;

    const location = {
        lat,
        lng,
    };

    return (
        listing && (
            <Layout>
                <div className={styles.outerWrapper}>
                    <Header theme="light" />
                    <div className={styles.contentWrapper}>
                        <Gallery listing={listing} curveTop={false} />
                        <h2>{listing.businessName}</h2>
                        <div className={styles.infoWrapper}>
                            <div className={styles.category}>
                                {listing.category}
                            </div>
                            <p className={styles.address}>
                                {listing.address.fullAddress}
                            </p>
                        </div>
                        <div className={styles.reviews}>
                            <h3>Reviews</h3>
                            {rating}
                            <span className={styles.ratingLabel}>
                                {listing.numOfReviews} Reviews
                            </span>
                        </div>
                        <div className={styles.contacts}>
                            <PhoneOutlined />
                            <MailOutlined />
                            <GlobalOutlined />
                            <HeartOutlined />
                        </div>
                        <div className={styles.directions}>
                            <h3>Directions</h3>
                            <Map
                                mapBoxApiKey={mapBoxApiKey}
                                location={location}
                                streetAddress={
                                    listing.address.fullAddress ?? ""
                                }
                            />
                        </div>
                        <div className={styles.courses}>
                            {listing.generatedContent?.courseDraft}
                        </div>
                        <div className={styles.aboutUs}>
                            {listing.generatedContent?.aboutUs}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    );
}

const fetchListing = async (
    listingId: string
): Promise<ListingModel | undefined> =>
    JSON.parse(JSON.stringify(await listingRepository.getOne(listingId)));
