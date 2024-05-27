import { Header } from "@/components/header";
import Layout from "./layout";

import { HomeSearch } from "@/components/home-search";
import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | The interest of lifetime - Home",
    description:
        "nextclass. | Home - Search after school classes, find talent of lifetime",
};

export default function Home() {
    return (
        <Layout>
            <div>
                <div className={styles.splash}>
                    <Header theme="transparent" />
                    <div className={styles.searchBox}>
                        <h1>Search afterschool classes</h1>
                        <h2>Find talent of lifetime</h2>
                        <HomeSearch />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
