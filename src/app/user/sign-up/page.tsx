import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input } from "antd";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Layout from "../../layout";

import userStyles from "../user.module.scss";
import styles from "./page.module.scss";
import Link from "next/link";

export const metadata = {
    title: "nextclass. || The interest of lifetime - Home",
    description: "nextclass. || The interest of lifetime - Home",
};

export default function SignUp() {
    return (
        <Layout>
            <div>
                <Header theme="light" />
                <div className={styles.content}>
                    <div className={userStyles.loginBox}>
                        <h2>Welcome to Nextclass.</h2>
                        <p>
                            Already have an account?{" "}
                            <Link href="/user/sign-in">Sign in</Link>
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
                        <Input
                            className={userStyles.largeInput}
                            placeholder="Confirm password"
                            prefix={<LockOutlined />}
                        />
                        <Checkbox className={userStyles.checkBox}>
                            I agree to the terms and conditions
                        </Checkbox>
                        <Checkbox className={userStyles.checkBox}>
                            I agree to receive the latest promotions
                        </Checkbox>
                        <Button
                            className={userStyles.largeButton}
                            type="primary"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
                <Footer isSticky={true} />
            </div>
        </Layout>
    );
}
