import { Search } from "@/components/search/search";
import { Listings } from "@/components/listings";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <div id="wrapper">
            <Header />
            <Search />
            <Listings />
            <Footer />
        </div>
    );
}
