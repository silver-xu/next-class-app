import { EnvironmentOutlined } from "@ant-design/icons";
import dynamic from "next/dynamic";
import { Button } from "antd";
import Link from "next/link";

import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Layout from "../layout";

const Map = dynamic(
    () => import("../../components/map").then((module) => module.Map),
    { ssr: false }
);

import { SessionList } from "@/components/session-list";
import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | The interest of lifetime - Listing",
    description: "nextclass. | The interest of lifetime - Listing",
};

export default function Listing() {
    const mapBoxApiKey = process.env.MAPBOX_API_KEY;
    return (
        <Layout>
            <div>
                <Header theme="dark" />
                <Breadcrumb
                    text="Home
                            >
                            Sports Classes
                            >
                            Junior Skating Class - 66 Roller Skating"
                />
                <div className={styles.content}>
                    <div className={styles.sticky}>
                        <h1>Junior Skating Class - 66 Roller Skating</h1>
                        <p>
                            <EnvironmentOutlined />
                            &nbsp;Black Burn North, Victoria
                        </p>
                        <Button className={styles.button} type="primary">
                            <Link href="/listing/book">Book free trial</Link>
                        </Button>
                    </div>
                    <ul className={styles.gallery}>
                        <li>
                            <img src="/listings/skate1.jpg" />
                        </li>
                        <li>
                            <img src="/listings/skate2.jpg" />
                        </li>
                        <li>
                            <img src="/listings/skate3.jpg" />
                        </li>
                        <li>
                            <img src="/listings/skate4.jpg" />
                        </li>
                        <li>
                            <img src="/listings/skate5.jpg" />
                        </li>
                    </ul>
                    <div className={styles.section}>
                        <h2>Available Sessions</h2>
                        <SessionList />
                    </div>
                    <div className={styles.section}>
                        <h2>Overview</h2>
                        <p>
                            Welcome to 66 Roller Skating, where the rhythm of
                            the wheels meets the thrill of the ride! Tucked away
                            in the heart of Blackburn North, our roller skating
                            academy is a haven for enthusiasts of all ages and
                            skill levels, dedicated to fostering a love for
                            roller skating that transcends the boundaries of the
                            rink. Whether you're brand new to roller skating or
                            a seasoned pro looking to hone your skills, our
                            dynamic program offers something for everyone,
                            blending expert instruction with a vibrant community
                            atmosphere that's as exhilarating as it is
                            inclusive.
                        </p>
                        <p>
                            Step onto the smooth surface of our rink and prepare
                            to embark on a journey of discovery and excitement,
                            guided by our team of passionate coaches who are
                            committed to helping you unlock your full potential
                            on wheels. With personalized instruction tailored to
                            your individual needs and goals, you'll quickly find
                            yourself mastering new techniques, perfecting your
                            spins and turns, and conquering obstacles with
                            confidence and finesse.
                        </p>
                        <p>
                            But 66 Roller Skating is more than just a place to
                            learn it's a thriving community of like-minded
                            individuals who share a common passion for roller
                            skating. From themed skate nights and friendly
                            competitions to special events and outings, there's
                            always something exciting happening at our school.
                            Join us at 66 Roller Skating and become part of a
                            community where the joy of skating knows no bounds,
                            and every spin, jump, and glide is a celebration of
                            the sheer exhilaration of roller skating.
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h2>Address</h2>
                        <p>
                            <EnvironmentOutlined />
                            &nbsp;70-88 Koonung Rd, Blackburn North, Victoria
                            3130
                        </p>
                        <Map
                            location={{
                                latitude: -37.80699564585417,
                                longitude: 145.15231782475576,
                            }}
                            streetAddress="70-88 Koonung Rd, Blackburn North, Victoria 3130"
                            mapBoxApiKey={mapBoxApiKey}
                        />
                    </div>
                </div>
                <Footer isSticky={false} />
            </div>
        </Layout>
    );
}
