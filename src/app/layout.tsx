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
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body>
                {children}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="fonts/jost/stylesheet.css"
                />
                <link rel="icon" href="favicon.svg" />
            </body>
        </html>
    );
}
