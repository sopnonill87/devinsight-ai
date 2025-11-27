"use client";

import React, { useState } from "react";

type Props = {
    onResults: (data: { analysis?: string; tests?: string }) => void;
};

export default function CodeForm({ onResults }: Props) {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("JavaScript");
    const [framework, setFramework] = useState("Jest");
    const [loadingAnalyze, setLoadingAnalyze] = useState(false);
    const [loadingTests, setLoadingTests] = useState(false);

    async function callApi(
        endpoint: "analyze" | "generate-tests",
        setLoading: (v: boolean) => void
    ) {
        if (!code.trim()) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code, language, framework })
            });

            const json = await res.json();
            if (!res.ok) {
                alert(json.error || "Something went wrong");
                return;
            }

            if (endpoint === "analyze") {
                onResults({ analysis: json.analysis });
            } else {
                onResults({ tests: json.tests });
            }
        } catch (e) {
            console.error(e);
            alert("Network error");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                backgroundColor: "#020617",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #1e293b",
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}
        >
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                    <label style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                        Language
                    </label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        style={{
                            marginTop: "0.25rem",
                            padding: "0.5rem",
                            backgroundColor: "#020617",
                            color: "#e5e7eb",
                            borderRadius: "0.375rem",
                            border: "1px solid #475569"
                        }}
                    >
                        <option>JavaScript</option>
                        <option>TypeScript</option>
                        <option>PHP</option>
                        <option>Python</option>
                    </select>
                </div>

                <div>
                    <label style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                        Test Framework
                    </label>
                    <select
                        value={framework}
                        onChange={(e) => setFramework(e.target.value)}
                        style={{
                            marginTop: "0.25rem",
                            padding: "0.5rem",
                            backgroundColor: "#020617",
                            color: "#e5e7eb",
                            borderRadius: "0.375rem",
                            border: "1px solid #475569"
                        }}
                    >
                        <option>Jest</option>
                        <option>PHPUnit</option>
                        <option>PyTest</option>
                    </select>
                </div>
            </div>

            <div>
                <label style={{ fontSize: "0.875rem", color: "#9ca3af" }}>
                    Code Snippet
                </label>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows={12}
                    style={{
                        width: "100%",
                        marginTop: "0.5rem",
                        padding: "0.75rem",
                        backgroundColor: "#020617",
                        color: "#e5e7eb",
                        borderRadius: "0.375rem",
                        border: "1px solid #475569",
                        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas"
                    }}
                    placeholder={`Paste your ${language} function or module here...`}
                />
            </div>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <button
                    onClick={() => callApi("analyze", setLoadingAnalyze)}
                    disabled={loadingAnalyze || !code.trim()}
                    style={{
                        padding: "0.6rem 1.2rem",
                        borderRadius: "999px",
                        border: "none",
                        background:
                            "linear-gradient(90deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
                        color: "#020617",
                        fontWeight: 600,
                        cursor: loadingAnalyze ? "wait" : "pointer",
                        opacity: loadingAnalyze || !code.trim() ? 0.6 : 1
                    }}
                >
                    {loadingAnalyze ? "Analyzing..." : "Analyze Code"}
                </button>

                <button
                    onClick={() => callApi("generate-tests", setLoadingTests)}
                    disabled={loadingTests || !code.trim()}
                    style={{
                        padding: "0.6rem 1.2rem",
                        borderRadius: "999px",
                        border: "1px solid #38bdf8",
                        backgroundColor: "#0f172a",
                        color: "#e5e7eb",
                        fontWeight: 500,
                        cursor: loadingTests ? "wait" : "pointer",
                        opacity: loadingTests || !code.trim() ? 0.6 : 1
                    }}
                >
                    {loadingTests ? "Generating tests..." : "Generate Tests"}
                </button>
            </div>
        </div>
    );
}
