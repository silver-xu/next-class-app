"use client";

import { Button, Form, Input } from "antd";

import styles from "./contactUs.module.scss";

export const ContactUs = () => {
    const [form] = Form.useForm();

    return (
        <div className={styles.contactUs}>
            <h2>Contact Us</h2>
            <p>
                Please send us any product enquiries, suggestions or feedbacks.
            </p>
            <div className={styles.form}>
                <Form layout="vertical" form={form}>
                    <Form.Item
                        label="Your name"
                        name="name"
                        rules={[{ required: true, message: "" }]}
                    >
                        <Input
                            className={styles.input}
                            size="large"
                            placeholder="Mike James"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Your email"
                        name="email"
                        rules={[{ required: true, message: "" }]}
                    >
                        <Input
                            className={styles.input}
                            size="large"
                            placeholder="mike@gmail.com"
                        />
                    </Form.Item>
                    <Form.Item label="Mobile number" name="mobile">
                        <Input
                            className={styles.input}
                            size="large"
                            placeholder="0403 123 456"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Message"
                        name="message"
                        rules={[{ required: true, message: "" }]}
                    >
                        <Input.TextArea
                            rows={6}
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
                            htmlType="submit"
                        >
                            Send
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
