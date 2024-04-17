import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Layout from "../layout";

import styles from "./page.module.scss";

export default function Signin() {
    return (
        <Layout>
            <div>
                <Header theme="dark" />
                <Breadcrumb
                    text="Home
>
London Hotels
>
Great Northern Hotel, a Tribute Portfolio Hotel, London"
                />
                <div className={styles.content}></div>
                <div className={styles.content}></div>
                <Footer isSticky={false} />
            </div>
        </Layout>
    );
}
