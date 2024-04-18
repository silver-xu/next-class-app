"use client";

import {
    Button,
    Descriptions,
    DescriptionsProps,
    Divider,
    Form,
    Input,
    InputNumber,
    Steps,
} from "antd";

import { Breadcrumb } from "@/components/breadcrumb";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Layout from "../../layout";

import { SessionList } from "@/components/session-list";
import styles from "./page.module.scss";
import { useState } from "react";

type LayoutType = Parameters<typeof Form>[0]["layout"];

export default function Book() {
    const [screen, setScreen] = useState<number>(0);

    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

    const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === "horizontal"
            ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
            : null;

    const onPrevious = () => {
        setScreen(screen - 1);
    };

    const onNext = () => {
        setScreen(screen + 1);
    };

    const items: DescriptionsProps["items"] = [
        {
            label: "Class",
            children: " Junior Skating Class - 66 Roller Skating",
        },
        {
            label: "Session",
            children: "Monday 14:30 - 15:30",
        },
        {
            label: "Full Name",
            children: "Queenie Li",
        },
        {
            label: "Age",
            children: "5 years",
        },
        {
            label: "Special Notes",
            children: "N/A",
        },
    ];

    const screens = [
        <>
            <h2>Which session would you like</h2>
            <SessionList />
        </>,
        <>
            <h2>Let us know who you are</h2>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
            >
                <Form.Item label="First Name">
                    <Input placeholder="Queenie" />
                </Form.Item>
                <Form.Item label="Last Name">
                    <Input placeholder="Li" />
                </Form.Item>
                <Form.Item label="Age">
                    <InputNumber
                        placeholder="5"
                        className={styles.field}
                        min={5}
                    />
                </Form.Item>
                <Form.Item label="Special Notes">
                    <Input.TextArea
                        autoSize={{ minRows: 3 }}
                        placeholder="Skill Levels, Accessbility Requirements etc"
                    />
                </Form.Item>
            </Form>
        </>,
        <>
            <h2>Check again before booking</h2>
            <Descriptions bordered items={items} column={1} />
        </>,
        <>
            <h2>Your booking is complete</h2>
            <p>An email to confirm your booking will be sent shortly.</p>
            <Descriptions bordered items={items} column={1} />
        </>,
    ];

    const buttonGroups =
        screen === screens.length - 1 ? undefined : (
            <>
                <Divider />
                <Button
                    type="default"
                    className={styles.button}
                    onClick={onPrevious}
                    disabled={screen === 0}
                >
                    Previous
                </Button>
                <Button
                    type="primary"
                    className={styles.button}
                    onClick={onNext}
                >
                    {screen < screens.length - 1 ? "Next" : "Confirm Booking"}
                </Button>
            </>
        );

    return (
        <Layout>
            <div>
                <Header theme="dark" />
                <Breadcrumb
                    text="Home
                            >
                            Sports Classes
                            >
                            Junior Skating Class - 66 Roller Skating"
                />
                <div className={styles.contentWrapper}>
                    <div className={styles.wizardWrapper}>
                        <Steps
                            size="small"
                            current={screen}
                            className={styles.steps}
                            items={[
                                {
                                    title: "Session",
                                },
                                {
                                    title: "Details",
                                },
                                {
                                    title: "Confirm",
                                },
                                {
                                    title: "Complete",
                                },
                            ]}
                        />
                        {screens[screen]}
                        {buttonGroups}
                    </div>
                </div>
                <Footer isSticky={false} />
            </div>
        </Layout>
    );
}
