"use client";

import {
    Image,
    Button,
    Card,
    Form,
    Input,
    Upload,
    Collapse,
    Tabs,
    Select,
    InputNumber,
} from "antd";
import type { GetProp, UploadFile, UploadProps, CollapseProps } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

import commonStyles from "../common.module.scss";
import styles from "./edit-class.module.scss";
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

    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    const tabItems = [
        {
            label: "12:30 PM",
            key: "1",
            children: (
                <div className={styles.sessionsForm}>
                    <span className={styles.label}>Teaching Location</span>
                    <Select
                        defaultValue="Blackburn North"
                        options={[
                            {
                                value: "Blackburn North",
                                label: "Blackburn North",
                            },
                        ]}
                    />
                    <span className={styles.label}>Trial Vacancies</span>
                    <InputNumber
                        min={1}
                        defaultValue={1}
                        className={styles.trialVacancies}
                    />
                    <Button type="primary">Remove Session</Button>
                </div>
            ),
        },
        {
            label: "1:30 PM",
            key: "2",
            children: "Content of Tab",
        },
        {
            label: "2:30 PM",
            key: "3",
            children: "Content of Tab",
        },
        {
            label: "3:30 PM",
            key: "4",
            children: "Content of Tab",
        },
        {
            label: "4:30 PM",
            key: "5",
            children: "Content of Tab",
        },
    ];

    const multiTabItems: CollapseProps["items"] = [
        {
            key: "1",
            label: "Jan 29th, 2024 - March 28th, 2024",
            children: (
                <>
                    <ul className={styles.multiTab}>
                        <li className={styles.active}>Mon</li>
                        <li className={styles.notEmpty}>Tue</li>
                        <li>Wed</li>
                        <li className={styles.notEmpty}>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ul>
                    <div className={styles.sessions}>
                        <Tabs
                            tabPosition="left"
                            items={tabItems}
                            size="small"
                        />
                    </div>
                </>
            ),
            extra: (
                <CloseOutlined
                    onClick={(event) => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                    }}
                />
            ),
        },
        {
            key: "2",
            label: "Apr 15th, 2024 - Jun 28th, 2024",
            children: <p>{text}</p>,
            extra: (
                <CloseOutlined
                    onClick={(event) => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                    }}
                />
            ),
        },
        {
            key: "3",
            label: "Jul 15th, 2024 - Sep 20th, 2024",
            children: <p>{text}</p>,
            extra: (
                <CloseOutlined
                    onClick={(event) => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                    }}
                />
            ),
        },
        {
            key: "4",
            label: "Oct 7th, 2024 - Dec 20th, 2024",
            children: <p>{text}</p>,
            extra: (
                <CloseOutlined
                    onClick={(event) => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                    }}
                />
            ),
        },
    ];

    return (
        <div className={`${commonStyles.content} ${styles.content}`}>
            <Card
                title={"Edit Class for 66 Roller Skating"}
                className={styles.card}
            >
                <h1>Junior Speed Skating</h1>

                <Form layout="vertical" form={form} className={styles.form}>
                    <Form.Item label="Class Name">
                        <Input placeholder="Please enter a class name" />
                    </Form.Item>
                    <Form.Item label="Thumbnail Images">
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
                    <Form.Item label="Available Date Ranges">
                        <Button
                            type="dashed"
                            block
                            icon={<PlusOutlined />}
                            className={styles.addDateRange}
                        >
                            Add Available Date Range
                        </Button>
                        <Collapse
                            items={multiTabItems}
                            defaultActiveKey={["1"]}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Update</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};
