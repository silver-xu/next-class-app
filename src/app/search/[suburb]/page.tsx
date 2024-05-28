import dynamic from "next/dynamic";

const SearchClientComponent = dynamic(
    () => import("../../../components/search").then((mod) => mod.Search),
    { ssr: false }
);

export const metadata = {
    title: "nextclass. | Search Result",
    description: "nextclass. | Search Result",
};

export default function Search() {
    return <SearchClientComponent />;
}
