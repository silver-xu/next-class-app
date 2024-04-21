import styles from "./session-list.module.scss";
import Link from "next/link";

export const SessionList = () => (
    <ul className={styles.sessionList}>
        <li>
            <span>Monday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
        <li>
            <span>Tuesday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
        <li>
            <span>Wednesday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
        <li>
            <span>Thursday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
        <li>
            <span>Friday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
        <li>
            <span>Saturday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
        <li>
            <span>Sunday</span>
            <ul>
                <li>
                    <Link href="/listing/book">15:30 - 16:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">16:30 - 17:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">17:30 - 18:30</Link>
                </li>
                <li>
                    <Link href="/listing/book">18:30 - 19:30</Link>
                </li>
            </ul>
        </li>
    </ul>
);
