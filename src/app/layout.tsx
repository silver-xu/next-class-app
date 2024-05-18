import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Jost } from "next/font/google";
import { ConfigProvider } from "antd";

import "./layout.css";

import theme from "@/theme/themeConfig";
import { Viewport } from "next";

const jost = Jost({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

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
