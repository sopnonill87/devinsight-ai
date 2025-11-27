"use client";

import React from "react";
import CodeForm from "../components/CodeForm";
import ResultPanel from "../components/ResultPanel";

export default function HomePage() {
    const [state, setState] = React.useState<{
        analysis?: string;
        tests?: string;
    }>({});

    return (
        <main
            style={{
                minHeight: "100vh",
                padding: "2rem",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div style={{ maxWidth: "1200px", width: "100%" }}>
                <header
                    style={{
                        marginBottom: "2rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap"
                    }}
                >
                    <div>
                        <h1 style={{ fontSize: "1.8rem", margin: 0 }}>
                            DevInsight AI
                        </h1>
                        <p style={{ color: "#9ca3af", marginTop: "0.3rem" }}>
                            AI-powered code review and test generation for busy developers.
                        </p>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                        MVP · {new Date().getFullYear()}
                    </span>
                </header>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
                        gap: "1.5rem"
                    }}
                >
                    <CodeForm
                        onResults={(data) =>
                            setState((prev) => ({
                                analysis: data.analysis ?? prev.analysis,
                                tests: data.tests ?? prev.tests
                            }))
                        }
                    />
                    <ResultPanel analysis={state.analysis} tests={state.tests} />
                </div>
            </div>
        </main>
    );
}
