"use clients";

import { Card } from "antd";

import styles from "./manage-session.module.scss";
import commonStyles from "../common.module.scss";

export const ManageSession = () => (
    <div className={`${commonStyles.content} ${styles.content}`}>
        <Card title={"Sessions for 66 Roller Skating"} className={styles.card}>
            <h1>Junior Speed Skating</h1>
        </Card>
    </div>
);
