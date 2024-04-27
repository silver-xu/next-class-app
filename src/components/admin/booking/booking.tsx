"use client";

import {
    randFullName,
    randNumber,
    randPastDate,
    randSoonDate,
} from "@ngneat/falso";
import type { TableProps } from "antd";
import { Table, Radio } from "antd";
import Link from "next/link";
import React from "react";

import localizedFormat from "dayjs/plugin/localizedFormat";
import commonStyles from "../common.module.scss";
import styles from "./booking.module.scss";
import dayjs from "dayjs";

dayjs.extend(localizedFormat);

interface DataType {
    key: string;
    className: string;
    bookingDateTime: Date;
    student: {
        name: string;
    };
    sessionDateTime: Date;
    status: string;
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "Class",
        dataIndex: "className",
        key: "className",
        render: (text) => <Link href="/admin/booking/manage">{text}</Link>,
    },
    {
        title: "Booking Time",
        dataIndex: "bookingDateTime",
        key: "bookingDateTime",
        render: (date: Date) => dayjs(date).format("LLL"),
        sorter: {
            compare: (a, b) => {
                return (
                    a.bookingDateTime.getTime() - b.bookingDateTime.getTime()
                );
            },
        },
        sortDirections: ["descend"],
        responsive: ["xxl"],
    },
    {
        title: "Student Name",
        dataIndex: ["student", "name"],
        key: "student.name",
        responsive: ["sm"],
    },
    {
        title: "Session Time",
        dataIndex: "sessionDateTime",
        render: (date: Date) => dayjs(date).format("LLL"),
        sorter: {
            compare: (a, b) =>
                a.sessionDateTime.getTime() - b.sessionDateTime.getTime(),
        },
        sortDirections: ["descend"],
        defaultSortOrder: "descend",
        key: "sessionDateTime",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
];

const randStudent = () => ({
    name: randFullName(),
});

const classNames = [
    "Kids Skating Class",
    "Junior Speed Skating",
    "Junior Skill Skating",
];

const randBooking = () => ({
    className: classNames[randNumber({ min: 0, max: 2 })],
    bookingDateTime: randPastDate(),
    sessionDateTime: randSoonDate(),
    student: randStudent(),
    status: "Booked",
});

const data: DataType[] = Array.from(Array(20).keys()).map((num) => ({
    key: num.toString(),
    ...randBooking(),
}));

const options = [
    { label: "All", value: "All" },
    { label: "For today only", value: "For today only" },
    { label: "Uncompleted only", value: "Uncompleted only" },
];

export const Booking = () => {
    return (
        <div className={`${commonStyles.content} ${styles.content}`}>
            <div className={commonStyles.title}>
                <div className={styles.bookingTitle}>
                    <h1>Bookings</h1>
                    <p>
                        View bookings and manage bookings by clicking the links
                        below
                    </p>
                </div>
                <Radio.Group
                    options={options}
                    value="All"
                    optionType="button"
                    className={commonStyles.options}
                />
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};
