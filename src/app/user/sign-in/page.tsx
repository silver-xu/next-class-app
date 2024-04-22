import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "../../layout";

import userStyles from "../user.module.scss";
import styles from "./page.module.scss";
import Link from "next/link";

export const metadata = {
    title: "nextclass. | The interest of lifetime - Sign in",
    description: "nextclass. | The interest of lifetime - Sign in",
};

export default function Signin() {
    return (
        <Layout>
            <div>
                <Header theme="light" />
                <div className={styles.content}>
                    <div className={userStyles.loginBox}>
                        <h2>Welcome back</h2>
                        <p>
                            Don't have an account yet?{" "}
                            <Link href="/user/sign-up">Sign up for free</Link>
                        </p>
                        <Input
                            className={userStyles.largeInput}
                            placeholder="Email"
                            prefix={<UserOutlined />}
                        />
                        <Input
                            className={userStyles.largeInput}
                            placeholder="Password"
                            prefix={<LockOutlined />}
                        />
                        <p>Forgot your password?</p>
                        <Button
                            className={userStyles.largeButton}
                            type="primary"
                        >
                            Sign in
                        </Button>
                    </div>
                </div>
                <Footer isSticky={true} />
            </div>
        </Layout>
    );
}
