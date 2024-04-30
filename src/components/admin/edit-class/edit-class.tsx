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
    Table,
    Modal,
    TimePicker,
    Select,
    InputNumber,
    DatePicker,
} from "antd";
import type {
    GetProp,
    UploadFile,
    UploadProps,
    TreeDataNode,
    TableProps,
} from "antd";
import { PlusOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons";

const ReactQuill = dynamic(() => import("react-quill").then((mod) => mod), {
    ssr: false,
});

import commonStyles from "../common.module.scss";
import styles from "./edit-class.module.scss";
import "react-quill/dist/quill.snow.css";
import "./edit-class.css";

import dynamic from "next/dynamic";
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
    const [addSessionOpen, setAddSessionOpen] = useState(false);
    const [addDateRangeOpen, setAddDateRangeOpen] = useState(false);
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

    interface DataType {
        time: string;
        location: string;
        trialQuantity: number;
    }

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "Session",
            dataIndex: "time",
            key: "time",
            render: (text) => <div>{text}</div>,
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Trial Quantity",
            dataIndex: "trialQuantity",
            key: "trialQuantity",
            responsive: ["lg"],
        },
        {
            title: "Remove",
            key: "action",
            render: () => (
                <Button
                    type="link"
                    icon={<DeleteOutlined />}
                    className={styles.removeLink}
                ></Button>
            ),
        },
    ];

    const data: DataType[] = [
        {
            time: "1:30 pm",
            location: "Blackburn North Campus",
            trialQuantity: 1,
        },
        {
            time: "2:30 pm",
            location: "Blackburn North Campus",
            trialQuantity: 1,
        },
        {
            time: "3:30 pm",
            location: "Blackburn North Campus",
            trialQuantity: 1,
        },
    ];

    const tabItems = [
        {
            label: "Details",
            key: "0",
            children: (
                <div className={styles.formWrapper}>
                    <Form layout="vertical" form={form} className={styles.form}>
                        <Form.Item label="Class Name *">
                            <Input
                                placeholder="Please enter a class name"
                                defaultValue="Junior Speed Skating"
                                className={styles.className}
                            />
                        </Form.Item>
                        <Form.Item label="Images">
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
                            )}
                        </Form.Item>
                        <Form.Item label="Description">
                            <ReactQuill
                                theme="snow"
                                style={{ height: 300 }}
                                placeholder="Type some class description here"
                            />
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
        {
            label: "Sessions",
            key: "1",
            children: (
                <div
                    className={styles.verticalForm}
                    style={{ paddingBottom: 15 }}
                >
                    <div className={styles.leftPanel}>
                        <Tree
                            showLine={true}
                            showIcon={false}
                            treeData={treeData}
                        />
                        <div>
                            <Button
                                type="dashed"
                                block
                                size="small"
                                className={styles.topMargin}
                                onClick={() => setAddDateRangeOpen(true)}
                            >
                                <PlusOutlined /> Add dates
                            </Button>
                            <Button
                                type="dashed"
                                block
                                size="small"
                                className={styles.topMargin}
                            >
                                <DeleteOutlined /> Remove dates
                            </Button>
                        </div>
                    </div>
                    <Divider
                        type="vertical"
                        className={styles.verticalDivider}
                    />
                    <Divider
                        type="horizontal"
                        className={styles.horizontalDivider}
                    />
                    <Form form={form} layout="vertical" className={styles.form}>
                        <h3>Jan 24, 2024 - Mar 28, 2024</h3>
                        <p>Every Monday</p>
                        <Button
                            type="dashed"
                            block
                            icon={<PlusOutlined />}
                            className={styles.bottomMargin}
                            onClick={() => setAddSessionOpen(true)}
                        >
                            Add Session
                        </Button>
                        <Table columns={columns} dataSource={data} />
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
            <Modal
                title="Add date range"
                open={addDateRangeOpen}
                onCancel={() => setAddDateRangeOpen(false)}
                onOk={() => setAddDateRangeOpen(false)}
            >
                <Form form={form} layout="vertical" className={styles.form}>
                    <Form.Item label="Specify           Range">
                        <DatePicker.RangePicker />
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                title="Every Monday"
                open={addSessionOpen}
                onCancel={() => setAddSessionOpen(false)}
                onOk={() => setAddSessionOpen(false)}
            >
                <Form form={form} layout="vertical" className={styles.form}>
                    <p>Jan 29, 2024 - Mar 28, 2024</p>
                    <Divider />
                    <Form.Item label="Session">
                        <TimePicker />
                    </Form.Item>
                    <Form.Item label="Campus">
                        <Select
                            defaultValue="Blackburn North"
                            options={[
                                {
                                    value: "Blackburn North",
                                    label: "Blackburn North",
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Trial quantity">
                        <InputNumber defaultValue={1} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};
