import dynamic from "next/dynamic";

import { Header } from "@/components/admin/header";

import styles from "../../common.module.scss";

const Menu = dynamic(
    () => import("../../../../components/admin/menu").then((mod) => mod.Menu),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Manage Campuses",
    description: "nextclass. | Manage Campuses",
};

export default function Page() {
    return (
        <>
            <div className={styles.headerWrapper}>
                <Header selected="class" />
            </div>
            <div className={styles.menuWrapper}>
                <Menu selected="class" />
            </div>
            <div className={styles.contentWrapper}></div>
        </>
    );
}
