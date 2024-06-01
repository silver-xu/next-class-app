import parse from "html-react-parser";
import dynamic from "next/dynamic";
import { remark } from "remark";
import html from "remark-html";
import { Rate } from "antd";

import { ContactUs } from "@/components/listing/contactUs";
import { ListingRepository } from "@/db/listingRepository";
import { Listing as ListingModel } from "@/models/listing";
import { ReadMore } from "@/components/readMore/readMore";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import styles from "./page.module.scss";
import Layout from "../../../layout";
import Link from "next/link";

const Map = dynamic(
    () =>
        import("../../../../components/listingMap").then(
            (mod) => mod.ListingMap
        ),
    { ssr: false }
);

const mapBoxApiKey = process.env.MAPBOX_API_KEY;

const listingRepository = new ListingRepository();

const isRelevant = (value: string | undefined): boolean => {
    const irrelevantKeywords = ["various", "varies", "not specified"];

    if (!value) {
        return false;
    }

    if (irrelevantKeywords.includes(value.toLowerCase())) {
        return false;
    }

    return true;
};

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

    const getCourseName = (courseName: string | undefined) =>
        courseName && <h4>{courseName}</h4>;

    const getCourseDate = (date: string | undefined) =>
        isRelevant(date) && <div className={styles.date}>Date: {date}</div>;

    const getCourseTime = (time: string | undefined) =>
        isRelevant(time) && <div className={styles.time}>Time: {time}</div>;

    const getCoursePrice = (price: string | undefined) =>
        isRelevant(price) &&
        price !== "Not specified" && (
            <div className={styles.technique}>Price: {price}</div>
        );

    const getCourseTechnique = (technique: string | undefined) =>
        isRelevant(technique) &&
        technique !== "Not specified" && (
            <div className={styles.technique}>Technique: {technique}</div>
        );

    const getCourseBriefIntro = (courseBriefIntro: string | undefined) =>
        courseBriefIntro && <p>{courseBriefIntro}</p>;

    const courses = listing.generatedContent?.courses?.map((course, idx) => (
        <div key={idx}>
            {getCourseName(course.name)}
            {getCourseDate(course.date)}
            {getCourseTime(course.time)}
            {getCoursePrice(course.price)}
            {getCourseTechnique(course.technique)}
            {getCourseBriefIntro(course.briefIntro)}
        </div>
    ));

    const coursesSection = listing.generatedContent?.courses &&
        listing.generatedContent?.courses.length > 0 && (
            <div className={`${styles.courses}  ${styles.info}`}>
                <h3>Classes</h3>
                <ReadMore
                    collapsedByDefault={true}
                    numOfChildrenWhenCollapsed={2}
                >
                    {courses as JSX.Element[]}
                </ReadMore>
            </div>
        );

    const aboutUs =
        listing.generatedContent?.aboutUs &&
        (
            await remark()
                .use(html)
                .process(
                    listing.generatedContent.aboutUs.replace(/###/g, "####")
                )
        ).toString();

    const aboutUsSection = aboutUs && (
        <div className={`${styles.aboutUs} ${styles.info}`}>
            <h3>About Us</h3>

            <ReadMore collapsedByDefault={true} numOfChildrenWhenCollapsed={2}>
                {parse(aboutUs) as JSX.Element[]}
            </ReadMore>
        </div>
    );

    const openingHours = (
        <ul>
            {listing.openingHours?.map((openingHour, idx) => (
                <li key={idx}>
                    {openingHour.name} {openingHour.value}
                </li>
            ))}
        </ul>
    );

    return (
        listing && (
            <Layout>
                <div className={styles.outerWrapper}>
                    <Header theme="light" />
                    <div className={styles.contentWrapper}>
                        <Gallery
                            thumbnailImagePaths={listing.thumbnailImagePaths}
                            curveTop={false}
                        />
                        <h2>{listing.businessName}</h2>
                        <div className={`${styles.infoWrapper} ${styles.info}`}>
                            <div className={styles.category}>
                                {listing.category}
                            </div>
                            <p className={styles.websiteUrl}>
                                {listing.website && (
                                    <Link href="/">{listing.website}</Link>
                                )}
                            </p>
                            <p className={styles.address}>
                                {listing.address.fullAddress}
                            </p>
                        </div>
                        <div className={`${styles.reviews} ${styles.info}`}>
                            <h3>Reviews</h3>
                            {rating}
                            <span className={styles.ratingLabel}>
                                {listing.numOfReviews ?? 0} Reviews
                            </span>
                        </div>
                        {openingHours && (
                            <div
                                className={`${styles.openingHours} ${styles.info}`}
                            >
                                <h3>Opening Hours</h3>
                                {openingHours}
                                <p>
                                    * Opening hours are subjective to change,
                                    please call prior to walk-in visit.
                                </p>
                            </div>
                        )}
                        <div className={`${styles.info} ${styles.contacts}`}>
                            <ContactUs
                                phoneNumber={listing.contact.phone}
                                email="abc"
                            />
                        </div>
                        <div className={`${styles.directions} ${styles.info}`}>
                            <h3>Directions</h3>
                            <Map
                                mapBoxApiKey={mapBoxApiKey}
                                location={location}
                                streetAddress={
                                    listing.address.fullAddress ?? ""
                                }
                            />
                        </div>
                        {coursesSection}
                        {aboutUsSection}
                    </div>
                </div>
                <Footer />
            </Layout>
        )
    );
}

const fetchListing = async (
    listingId: string
): Promise<ListingModel | undefined> =>
    JSON.parse(JSON.stringify(await listingRepository.getOne(listingId)));

export async function generateStaticParams() {
    const listingRepository = new ListingRepository();
    const listings = await listingRepository.getAll();

    return listings.map((listing) => ({
        listingId: listing.listingId,
    }));
}
