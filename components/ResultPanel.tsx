"use client";

import React from "react";

type Props = {
    analysis?: string;
    tests?: string;
};

export default function ResultPanel({ analysis, tests }: Props) {
    const nothing = !analysis && !tests;

    return (
        <div
            style={{
                backgroundColor: "#020617",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #1e293b",
                minHeight: "200px"
            }}
        >
            {nothing && (
                <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                    Results will appear here after you analyze code or generate tests.
                </p>
            )}

            {analysis && (
                <section style={{ marginBottom: "1.5rem" }}>
                    <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                        Code Analysis
                    </h2>
                    <div
                        style={{
                            whiteSpace: "pre-wrap",
                            fontFamily:
                                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas"
                        }}
                    >
                        {analysis}
                    </div>
                </section>
            )}

            {tests && (
                <section>
                    <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                        Generated Tests
                    </h2>
                    <pre
                        style={{
                            backgroundColor: "#020617",
                            border: "1px solid #334155",
                            borderRadius: "0.5rem",
                            padding: "0.75rem",
                            overflowX: "auto",
                            fontSize: "0.85rem"
                        }}
                    >
                        {tests}
                    </pre>
                </section>
            )}
        </div>
    );
}
