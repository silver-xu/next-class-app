"use client";

import { PhoneButton } from "../phoneButton";
import { Button, Form, Input } from "antd";

import styles from "./enquiries.module.scss";
import { useState } from "react";

interface ContactUsProps {
    phoneNumber?: string;
    email: string;
}

export const Enquiries = (props: ContactUsProps) => {
    const { phoneNumber } = props;
    const [form] = Form.useForm();

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={styles.contactUs}>
            <h3>Contacts</h3>
            <p>Please give us a call or drop us a message.</p>
            <div className={styles.infoButtons}>
                {phoneNumber && (
                    <PhoneButton type="primary" phoneNumber={phoneNumber} />
                )}
                <Button size="large" onClick={toggleCollapsed}>
                    Send Enquiries
                </Button>
            </div>
            {!collapsed && (
                <div className={styles.form}>
                    <h4>Send Enquiries</h4>
                    <Form layout="vertical" form={form}>
                        <Form.Item label="Your name">
                            <Input
                                className={styles.input}
                                size="large"
                                placeholder="Mike James"
                            />
                        </Form.Item>
                        <Form.Item label="Your email">
                            <Input
                                className={styles.input}
                                size="large"
                                placeholder="mike@gmail.com"
                            />
                        </Form.Item>
                        <Form.Item label="Mobile number">
                            <Input
                                className={styles.input}
                                size="large"
                                placeholder="0403 123 456"
                            />
                        </Form.Item>
                        <Form.Item label="Message">
                            <Input.TextArea
                                rows={4}
                                placeholder="Please write your message"
                                className={styles.input}
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                className={styles.sendEnquiriesButton}
                            >
                                Send
                            </Button>
                            <Button
                                size="large"
                                type="default"
                                className={styles.input}
                                onClick={toggleCollapsed}
                            >
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </div>
    );
};
