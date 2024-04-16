import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Jost } from "next/font/google";
import { ConfigProvider } from "antd";

import "./layout.css";

import theme from "@/theme/themeConfig";

const jost = Jost({ subsets: ["latin"] });

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={jost.className}>
                <AntdRegistry>
                    <ConfigProvider theme={theme}>{children}</ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
