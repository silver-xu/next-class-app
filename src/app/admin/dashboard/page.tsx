import dynamic from "next/dynamic";

import { Header } from "@/components/admin/header";

import styles from "./page.module.scss";

const Menu = dynamic(
    () => import("../../../components/admin/menu").then((mod) => mod.Menu),
    { ssr: false }
);

const Dashboard = dynamic(
    () =>
        import("../../../components/admin/dashboard").then(
            (mod) => mod.Dashboard
        ),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | admin",
    description: "nextclass. | admin",
};

export default function Page() {
    return (
        <>
            <div className={styles.headerWrapper}>
                <Header />
            </div>
            <div className={styles.menuWrapper}>
                <Menu />
            </div>
            <div className={styles.contentWrapper}>
                <Dashboard />
            </div>
        </>
    );
}
