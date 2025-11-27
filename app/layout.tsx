import "./globals.css";
import React from "react";

export const metadata = {
    title: "DevInsight AI",
    description: "AI-powered code analysis and test generation"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                    backgroundColor: "#0f172a",
                    color: "#e5e7eb"
                }}
            >
                {children}
            </body>
        </html>
    );
}
