import { NextRequest, NextResponse } from "next/server";
import { callOpenAI } from "../../../lib/openai";

export async function POST(req: NextRequest) {
    try {
        const { code, language, framework } = await req.json();

        if (!code || typeof code !== "string") {
            return NextResponse.json(
                { error: "Missing 'code' in request body" },
                { status: 400 }
            );
        }

        const lang = language || "JavaScript";
        const fw = framework || (lang === "PHP" ? "PHPUnit" : "Jest");

        const systemPrompt = `
You are an expert test engineer.
Given a ${lang} function or module, generate high-quality unit tests using ${fw}.
Requirements:
- Cover normal cases, edge cases, and error cases where applicable
- Use clear, concise test names
- Avoid unnecessary mocks/stubs unless needed
- Return ONLY the test code in a single code block.
`;

        const userPrompt = `Language: ${lang}
Test framework: ${fw}
Code under test:
\`\`\`
${code}
\`\`\`
`;

        const tests = await callOpenAI(systemPrompt, userPrompt);

        return NextResponse.json({ tests });
    } catch (err: any) {
        console.error("Generate tests API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
