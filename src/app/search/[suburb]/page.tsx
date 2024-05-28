import dynamic from "next/dynamic";
import Layout from "@/app/layout";

const SearchClientComponent = dynamic(
    () => import("../../../components/search").then((mod) => mod.Search),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

export default function Search() {
    return (
        <Layout>
            <SearchClientComponent />
        </Layout>
    );
}
