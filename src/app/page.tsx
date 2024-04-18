import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "./layout";

import styles from "./page.module.scss";
import Link from "next/link";

export const metadata = {
    title: "nextclass. || The interest of lifetime - Home",
    description: "nextclass. || The interest of lifetime - Home",
};

export default function Home() {
    return (
        <Layout>
            <div>
                <div className={styles.splash}>
                    <Header theme="transparent" />
                    <h1>Experience trial class</h1>
                    <h2>Find talent of lifetime</h2>
                    <div className={styles.search}>
                        <Input
                            placeholder="Dancing, arts or skating"
                            variant="borderless"
                        />
                        <Button
                            type="primary"
                            shape="circle"
                            icon={<SearchOutlined />}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.topHeading}>Recommended</h2>
                    <h3>4 carefully selected classes by our editors</h3>
                    <ul className={styles.listings}>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/piano.jpg" />
                                <h4>Piano class - Music Studio</h4>
                                <p>Boxhill, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/skating.jpg" />
                                <h4>Skating class - 66 Skating</h4>
                                <p>Balwyn, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/gym.jpg" />
                                <h4>Gym class - Gym Girls</h4>
                                <p>Melbourne City, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/chess.jpg" />
                                <h4>Chess class - Brain Power</h4>
                                <p>Burwood, VIC</p>
                            </Link>
                        </li>
                    </ul>

                    <h2>Popular</h2>
                    <ul className={styles.listings}>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/piano.jpg" />
                                <h4>Piano class - Music Studio</h4>
                                <p>Boxhill, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/skating.jpg" />
                                <h4>Skating class - 66 Skating</h4>
                                <p>Balwyn, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/gym.jpg" />
                                <h4>Gym class - Gym Girls</h4>
                                <p>Melbourne City, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/chess.jpg" />
                                <h4>Chess class - Brain Power</h4>
                                <p>Burwood, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/piano.jpg" />
                                <h4>Piano class - Music Studio</h4>
                                <p>Boxhill, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/skating.jpg" />
                                <h4>Skating class - 66 Skating</h4>
                                <p>Balwyn, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/gym.jpg" />
                                <h4>Gym class - Gym Girls</h4>
                                <p>Melbourne City, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/chess.jpg" />
                                <h4>Chess class - Brain Power</h4>
                                <p>Burwood, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/piano.jpg" />
                                <h4>Piano class - Music Studio</h4>
                                <p>Boxhill, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/skating.jpg" />
                                <h4>Skating class - 66 Skating</h4>
                                <p>Balwyn, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/gym.jpg" />
                                <h4>Gym class - Gym Girls</h4>
                                <p>Melbourne City, VIC</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/listing">
                                <img src="thumbnails/chess.jpg" />
                                <h4>Chess class - Brain Power</h4>
                                <p>Burwood, VIC</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer isSticky={false} />
            </div>
        </Layout>
    );
}
