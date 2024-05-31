import { MapSearch } from "@/components/map/mapSearch";
import Layout from "../../../layout";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

const mapBoxApiKey = process.env.MAPBOX_API_KEY ?? "";

export default function Search() {
    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <MapSearch mapBoxApiKey={mapBoxApiKey} />
            </div>
        </Layout>
    );
}
