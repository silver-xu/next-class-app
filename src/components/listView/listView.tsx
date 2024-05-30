import { useContext } from "react";

import { ListViewItem } from "@/components/listViewItem";
import { SearchContext } from "@/components/search";

import styles from "./listView.module.scss";

export default function ListView() {
    const { listingSearchResults } = useContext(SearchContext);

    return (
        listingSearchResults && (
            <ul>
                {listingSearchResults.map((listingSearchResult, idx) => (
                    <li className={styles.searchResult} key={idx}>
                        <ListViewItem
                            listingSearchResult={listingSearchResult}
                        />
                    </li>
                ))}
            </ul>
        )
    );
}
