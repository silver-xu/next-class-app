import dynamic from "next/dynamic";

import { ManageSession } from "@/components/admin/manage-session";
import { Header } from "@/components/admin/header";

import styles from "../../common.module.scss";

const Menu = dynamic(
    () => import("../../../../components/admin/menu").then((mod) => mod.Menu),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Manage Classes",
    description: "nextclass. | Manage Classes",
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
            <div className={styles.contentWrapper}>
                <ManageSession />
            </div>
        </>
    );
}
