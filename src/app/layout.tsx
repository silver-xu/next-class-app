import type { Metadata } from "next";

import "./components.scss";
import "./globals.scss";

export const metadata: Metadata = {
    title: "nextclass.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {children}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="fonts/jost/stylesheet.css"
                />
            </body>
        </html>
    );
}
