import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "./layout";

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
                        <div className={styles.search}>
                            <Input
                                placeholder="Arts schools"
                                variant="borderless"
                            />{" "}
                            <span>in</span>{" "}
                            <Input
                                placeholder="Melbourne"
                                variant="borderless"
                            />
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<SearchOutlined />}
                            />
                        </div>
                    </div>
                </div>
                <Footer isSticky={false} />
            </div>
        </Layout>
    );
}
