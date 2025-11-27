import { NextRequest, NextResponse } from "next/server";
import { callOpenAI } from "../../../lib/openai";

export async function POST(req: NextRequest) {
    try {
        const { code, language } = await req.json();

        if (!code || typeof code !== "string") {
            return NextResponse.json(
                { error: "Missing 'code' in request body" },
                { status: 400 }
            );
        }

        const lang = language || "unknown";

        const systemPrompt = `
You are an expert ${lang} developer and code reviewer.
Given a code snippet, you will:
- Identify bugs, security issues, and code smells
- Comment on readability and maintainability
- Suggest concrete improvements with examples
- Provide a short summary and 3–5 bullet-point recommendations
Return your answer in structured markdown with headings:
# Summary
# Issues Found
# Suggestions
# Recommended Refactors
`;

        const userPrompt = `Language: ${lang}
Code:
\`\`\`
${code}
\`\`\`
`;

        const analysis = await callOpenAI(systemPrompt, userPrompt);

        return NextResponse.json({ analysis });
    } catch (err: any) {
        console.error("Analyze API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}