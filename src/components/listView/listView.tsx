import { useContext } from "react";

import { ListViewItem } from "@/components/listViewItem";
import { SearchContext } from "@/components/search";

import styles from "./listView.module.scss";

export default function ListView() {
    const { listings } = useContext(SearchContext);

    return (
        listings && (
            <ul>
                {listings.map((listing, idx) => (
                    <li className={styles.searchResult} key={idx}>
                        <ListViewItem listing={listing} />
                    </li>
                ))}
            </ul>
        )
    );
}
