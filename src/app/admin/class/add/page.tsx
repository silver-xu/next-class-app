import dynamic from "next/dynamic";

import { Header } from "@/components/admin/header";

import { EditClass } from "@/components/admin/edit-class";
import styles from "../../common.module.scss";

const Menu = dynamic(
    () => import("../../../../components/admin/menu").then((mod) => mod.Menu),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Add Class",
    description: "nextclass. | Add Class",
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
                <EditClass />
            </div>
        </>
    );
}
