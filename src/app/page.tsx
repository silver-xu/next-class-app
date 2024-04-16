import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "./layout";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. || The interest of lifetime - Home",
    description: "nextclass. || The interest of lifetime - Home",
};

export default function Home() {
    return (
        <Layout>
            <div>
                <div className={styles.splash}>
                    <Header lightTheme={false} />
                    <h1>Trial different classes</h1>
                    <h2>Find interest of lifetime</h2>
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
                            <img src="thumbnails/piano.jpg" />
                            <h4>Piano class - Music Studio</h4>
                            <p>Boxhill, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/skating.jpg" />
                            <h4>Skating class - 66 Skating</h4>
                            <p>Balwyn, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/gym.jpg" />
                            <h4>Gym class - Gym Girls</h4>
                            <p>Melbourne City, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/chess.jpg" />
                            <h4>Chess class - Brain Power</h4>
                            <p>Burwood, VIC</p>
                        </li>
                    </ul>

                    <h2>Popular</h2>
                    <ul className={styles.listings}>
                        <li>
                            <img src="thumbnails/piano.jpg" />
                            <h4>Piano class - Music Studio</h4>
                            <p>Boxhill, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/skating.jpg" />
                            <h4>Skating class - 66 Skating</h4>
                            <p>Balwyn, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/gym.jpg" />
                            <h4>Gym class - Gym Girls</h4>
                            <p>Melbourne City, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/chess.jpg" />
                            <h4>Chess class - Brain Power</h4>
                            <p>Burwood, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/piano.jpg" />
                            <h4>Piano class - Music Studio</h4>
                            <p>Boxhill, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/skating.jpg" />
                            <h4>Skating class - 66 Skating</h4>
                            <p>Balwyn, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/gym.jpg" />
                            <h4>Gym class - Gym Girls</h4>
                            <p>Melbourne City, VIC</p>
                        </li>
                        <li>
                            <img src="thumbnails/chess.jpg" />
                            <h4>Chess class - Brain Power</h4>
                            <p>Burwood, VIC</p>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </Layout>
    );
}
