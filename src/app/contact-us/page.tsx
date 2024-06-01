import { ContactUs } from "@/components/contactUs";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "@/app/layout";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Contact Us",
    description: "nextclass. | Contact Us",
};

export default function Search() {
    return (
        <Layout>
            <div>
                <Header theme="light" />
                <div className={styles.contentWrapper}>
                    <ContactUs />
                </div>
                <Footer />
            </div>
        </Layout>
    );
}
