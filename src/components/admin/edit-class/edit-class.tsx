"use client";

import {
    Image,
    Button,
    Card,
    Form,
    Input,
    Upload,
    Tabs,
    Divider,
    Tree,
    TimePicker,
    InputNumber,
    Select,
} from "antd";
import { PlusOutlined, DeleteOutlined, SaveOutlined } from "@ant-design/icons";
import type { GetProp, UploadFile, UploadProps, TreeDataNode } from "antd";

import commonStyles from "../common.module.scss";
import styles from "./edit-class.module.scss";
import "./edit-class.css";

import { useState } from "react";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export const EditClass = () => {
    const [form] = Form.useForm();
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: "-1",
            name: "image.png",
            status: "done",
            url: "/listings/skate1.jpg",
        },
        {
            uid: "-2",
            name: "image.png",
            status: "done",
            url: "/listings/skate2.jpg",
        },
        {
            uid: "-3",
            name: "image.png",
            status: "done",
            url: "/listings/skate3.jpg",
        },
        {
            uid: "-4",
            name: "image.png",
            status: "done",
            url: "/listings/skate4.jpg",
        },
    ]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: "none" }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    const treeData: TreeDataNode[] = [
        {
            title: "Jan 29, 2024 - Mar 28, 2024",
            key: "0",
            children: [
                {
                    title: "Monday",
                    key: "0-0",
                    children: [
                        {
                            title: "2:30pm",
                            key: "0-0-0-0",
                        },
                        {
                            title: "3:30pm",
                            key: "0-0-0-1",
                        },
                        {
                            title: "4:30pm",
                            key: "0-0-0-2",
                        },
                    ],
                },
                {
                    title: "Tuesday",
                    key: "0-1",
                },
                {
                    title: "Wednesday",
                    key: "0-2",
                },
                {
                    title: "Thursday",
                    key: "0-3",
                },
                {
                    title: "Friday",
                    key: "0-4",
                },
                {
                    title: "Saturday",
                    key: "0-5",
                },
                {
                    title: "Sunday",
                    key: "0-6",
                },
            ],
        },
        {
            title: "Apr 15, 2024 - Jun 28, 2024",
            key: "1",
            children: [
                {
                    title: "Monday",
                    key: "1-0",
                },
                {
                    title: "Tuesday",
                    key: "1-1",
                },
                {
                    title: "Wednesday",
                    key: "1-2",
                },
                {
                    title: "Thursday",
                    key: "1-3",
                },
                {
                    title: "Friday",
                    key: "1-4",
                },
                {
                    title: "Saturday",
                    key: "1-5",
                },
                {
                    title: "Sunday",
                    key: "1-6",
                },
            ],
        },
        {
            title: "Jul 15, 2024 - Sep 20, 2024",
            key: "2",
            children: [
                {
                    title: "Monday",
                    key: "2-0",
                },
                {
                    title: "Tuesday",
                    key: "2-1",
                },
                {
                    title: "Wednesday",
                    key: "2-2",
                },
                {
                    title: "Thursday",
                    key: "2-3",
                },
                {
                    title: "Friday",
                    key: "2-4",
                },
                {
                    title: "Saturday",
                    key: "2-5",
                },
                {
                    title: "Sunday",
                    key: "2-6",
                },
            ],
        },
        {
            title: "Oct 7, 2024 - Dec 20, 2024",
            key: "3",
            children: [
                {
                    title: "Monday",
                    key: "3-0",
                },
                {
                    title: "Tuesday",
                    key: "3-1",
                },
                {
                    title: "Wednesday",
                    key: "3-2",
                },
                {
                    title: "Thursday",
                    key: "3-3",
                },
                {
                    title: "Friday",
                    key: "3-4",
                },
                {
                    title: "Saturday",
                    key: "3-5",
                },
                {
                    title: "Sunday",
                    key: "3-6",
                },
            ],
        },
    ];

    const tabItems = [
        {
            label: "Details",
            key: "0",
            children: (
                <div className={styles.form}>
                    <Form layout="vertical" form={form}>
                        <Form.Item label="Class Name *">
                            <Input
                                placeholder="Please enter a class name"
                                defaultValue="Junior Speed Skating"
                                className={styles.className}
                            />
                        </Form.Item>
                        <Form.Item label="Thursdaymbnail Images">
                            <p>You may upload a maximum of 5 images</p>
                            <Upload
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            {previewImage && (
                                <Image
                                    wrapperStyle={{ display: "none" }}
                                    preview={{
                                        visible: previewOpen,
                                        onVisibleChange: (visible) =>
                                            setPreviewOpen(visible),
                                        afterOpenChange: (visible) =>
                                            !visible && setPreviewImage(""),
                                    }}
                                    src={previewImage}
                                />
                            )}{" "}
                        </Form.Item>
                        <Form.Item>
                            <Divider />
                            <Button
                                type="primary"
                                icon={<SaveOutlined />}
                                className={styles.buttonGroup}
                            >
                                Save
                            </Button>
                            <Button
                                icon={<DeleteOutlined />}
                                className={styles.buttonGroup}
                            >
                                Remove
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            ),
        },
        {
            label: "Sessions",
            key: "1",
            children: (
                <div
                    className={styles.verticalForm}
                    style={{ paddingBottom: 15 }}
                >
                    <div>
                        <Tree
                            showLine={true}
                            showIcon={false}
                            treeData={treeData}
                        />
                        <Button
                            type="dashed"
                            block
                            size="small"
                            className={styles.addDateRange}
                        >
                            <PlusOutlined /> Add dates
                        </Button>
                        <Button
                            type="dashed"
                            block
                            size="small"
                            className={styles.addDateRange}
                        >
                            <DeleteOutlined /> Remove dates
                        </Button>
                    </div>
                    <Divider
                        type="vertical"
                        className={styles.verticalDivider}
                    />
                    <Form form={form} layout="vertical">
                        <Form.Item label="Session Time">
                            <TimePicker className={styles.input} />
                        </Form.Item>
                        <Form.Item label="Location">
                            <Select
                                className={styles.input}
                                options={[
                                    {
                                        value: 1,
                                        label: "Blackburn North",
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item label="Trial vacancy">
                            <InputNumber className={styles.input} />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                icon={<SaveOutlined />}
                                className={styles.buttonGroup}
                            >
                                Save
                            </Button>
                            <Button
                                icon={<DeleteOutlined />}
                                className={styles.buttonGroup}
                            >
                                Remove
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            ),
        },
    ];

    return (
        <div className={`${commonStyles.content} ${styles.content}`}>
            <Card title={"Junior Speed Skating"} className={styles.card}>
                <Tabs
                    defaultActiveKey="0"
                    size="small"
                    items={tabItems}
                    type="card"
                />
            </Card>
        </div>
    );
};
