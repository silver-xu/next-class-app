import { Header } from "@/components/header";
import Layout from "./layout";

import { Search } from "@/components/search";
import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | The interest of lifetime - Home",
    description: "nextclass. | The interest of lifetime - Home",
};

export default function Home() {
    return (
        <Layout>
            <div>
                <div className={styles.splash}>
                    <Header theme="transparent" />
                    <div className={styles.searchBox}>
                        <h1>Search afterschool class</h1>
                        <h2>Find talent of lifetime</h2>
                        <Search />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
