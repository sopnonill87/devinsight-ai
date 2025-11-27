// lib/openai.ts
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

if (!process.env.OPENAI_API_KEY) {
    console.warn("⚠️ OPENAI_API_KEY is not set.");
}

export async function callOpenAI(systemPrompt: string, userPrompt: string) {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error("OPENAI_API_KEY is missing");
    }

    const res = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt }
            ],
            temperature: 0.2
        })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("OpenAI error:", text);
        throw new Error("OpenAI API error: " + res.statusText);
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    return content.trim();
}
