import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "../layout";

import styles from "./page.module.scss";

export const metadata = {
    title: "nextclass. || The interest of lifetime - Home",
    description: "nextclass. || The interest of lifetime - Home",
};

export default function Signin() {
    return (
        <Layout>
            <div>
                <Header lightTheme={true} />
                <div className={styles.content}>
                    <div className={styles.loginBox}>
                        <h2>Welcome back</h2>
                        <p>Don't have an account yet? Sign up for free</p>
                        <Input
                            className={styles.largeInput}
                            placeholder="Email"
                            prefix={<UserOutlined />}
                        />
                        <Input
                            className={styles.largeInput}
                            placeholder="Password"
                            prefix={<LockOutlined />}
                        />
                        <p>Forgot your password?</p>
                        <Button className={styles.largeButton} type="primary">
                            Sign in
                        </Button>
                    </div>
                </div>
                <Footer isSticky={true} />
            </div>
        </Layout>
    );
}
