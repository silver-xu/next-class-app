"use client";

import React from "react";

import commonStyles from "../common.module.scss";
import styles from "./class.module.scss";
import { Button } from "antd";

const classNames = [
    "Kids Skating Class",
    "Junior Speed Skating",
    "Junior Skill Skating",
];

export const Class = () => {
    return (
        <div className={`${commonStyles.content} ${styles.content}`}>
            <div className={commonStyles.title}>
                <div className={styles.bookingTitle}>
                    <h1>Classes</h1>
                    <p>View and manage Partner Classes</p>
                </div>
                <Button type="primary" className={styles.titleButton}>
                    Add
                </Button>
            </div>
            <div className={styles.card}>
                <ul>
                    {classNames.map((className, i) => (
                        <li className={styles.class}>
                            <img src={`/listings/skate${i + 1}.jpg`} />
                            <div className={styles.description}>
                                <h3>{className}</h3>
                                <p>Multi-location in Melbourne Metropolitan</p>
                                <div>
                                    <Button
                                        className={styles.button}
                                        href="/admin/class/add"
                                    >
                                        Edit
                                    </Button>
                                    <Button className={styles.button}>
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
