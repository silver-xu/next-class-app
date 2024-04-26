import dynamic from "next/dynamic";

import { Header } from "@/components/admin/header";

import { QrReader } from "@/components/admin/qr-reader/qr-reader";
import styles from "../common.module.scss";

const Menu = dynamic(
    () => import("../../../components/admin/menu").then((mod) => mod.Menu),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Manage Bookings",
    description: "nextclass. | Manage Bookings",
};

export default function Page() {
    return (
        <>
            <div className={styles.headerWrapper}>
                <Header selected="booking" />
            </div>
            <div className={styles.menuWrapper}>
                <Menu selected="booking" />
            </div>
            <div className={styles.contentWrapper}>
                <QrReader />
            </div>
        </>
    );
}
