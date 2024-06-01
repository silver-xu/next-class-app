import dynamic from "next/dynamic";
import Layout from "@/app/layout";

const CombinedSearch = dynamic(
    () =>
        import("../../../../components/search/combinedSearch").then(
            (mod) => mod.CombinedSearch
        ),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

const mapBoxApiKey = process.env.MAPBOX_API_KEY ?? "";

export default function Search() {
    return (
        <Layout>
            <CombinedSearch mapBoxApiKey={mapBoxApiKey} />
        </Layout>
    );
}
