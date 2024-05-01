"use client";

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button, Table } from "antd";
import Link from "next/link";
import React from "react";

import localizedFormat from "dayjs/plugin/localizedFormat";
import commonStyles from "../common.module.scss";
import styles from "./campus.module.scss";
import dayjs from "dayjs";

dayjs.extend(localizedFormat);

interface DataType {
    key: string;
    name: string;
    address: {
        streetAddress: string;
        suburb: string;
        state: string;
        postCode: string;
    };
}

const columns: TableProps<DataType>["columns"] = [
    {
        title: "Campus",
        dataIndex: "name",
        key: "name",
        render: (text) => (
            <Link href="/admin/campus/manage" className={styles.link}>
                {text}
            </Link>
        ),
    },
    {
        title: "Address",
        dataIndex: ["address", "streetAddress"],
        key: "address.streetAddress",
    },
    {
        title: "Suburb",
        dataIndex: ["address", "suburb"],
        key: "address.suburb",
    },
    {
        title: "State",
        dataIndex: ["address", "state"],
        key: "address.state",
    },
    {
        title: "State",
        dataIndex: ["address", "postCode"],
        key: "address.postCode",
    },
    {
        title: "Remove",
        key: "action",
        render: () => (
            <Button
                type="link"
                icon={<DeleteOutlined />}
                className={styles.link}
            ></Button>
        ),
    },
];

const data: DataType[] = [
    {
        key: "0",
        name: "Blackburn North",
        address: {
            streetAddress: "70-88 Koonung Rd",
            suburb: "Blackburn North",
            state: "VIC",
            postCode: "3130",
        },
    },
    {
        key: "1",
        name: "Doncaster",
        address: {
            streetAddress: "123 Church Road",
            suburb: "Doncaster",
            state: "VIC",
            postCode: "3108",
        },
    },
    {
        key: "2",
        name: "Vermont South",
        address: {
            streetAddress: "2 Hanover Rd",
            suburb: "Vermont South",
            state: "VIC",
            postCode: "3133",
        },
    },
];

export const Campus = () => {
    return (
        <div className={`${commonStyles.content} ${styles.content}`}>
            <div className={commonStyles.title}>
                <div className={styles.bookingTitle}>
                    <h1>Campuses</h1>
                    <p>
                        View campuses and manage campuses by clicking the links
                        below
                    </p>
                </div>
            </div>
            <Button
                type="dashed"
                block
                icon={<PlusOutlined />}
                className={styles.addCampus}
            >
                Add Campus
            </Button>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};
