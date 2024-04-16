import { Dropdown, MenuProps, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import styles from "./footer.module.scss";

const items: MenuProps["items"] = [
    {
        label: "US English",
        key: "0",
    },
    {
        label: "中文",
        key: "1",
    },
];

export interface FooterProps {
    isSticky: boolean;
}

export const Footer = (props: FooterProps) => {
    const { isSticky } = props;

    const footerClassName = isSticky
        ? `${styles.footer} ${styles.sticky}`
        : styles.footer;

    return (
        <div className={footerClassName}>
            <div className={styles.footerWrapper}>
                <p>
                    © 2024 Powered by the educo pty ltd. All rights reserved.
                </p>
                <ul>
                    <li>
                        <a href="https://www.google.com">Privacy Statement</a>
                    </li>
                    <li>
                        <a href="https://www.google.com">
                            Terms and Conditions
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com">Contact Us</a>
                    </li>
                </ul>
                <div className={styles.language}>
                    <Dropdown menu={{ items }} trigger={["click"]}>
                        <a>
                            <Space>
                                Language: EN
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
