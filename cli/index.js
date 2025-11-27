// cli/index.js
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export async function run() {
    const args = process.argv.slice(2);

    if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
        console.log(`
DevInsight CLI

Usage:
  devinsight analyze <file> [language]
  devinsight tests <file> [language]

Examples:
  devinsight analyze src/index.js JavaScript
  devinsight tests app/Service.php PHP
`);
        process.exit(0);
    }

    const command = args[0];
    const filePath = args[1];
    const language = args[2] || "JavaScript";

    if (!filePath) {
        console.error("Missing file path.");
        process.exit(1);
    }

    const resolved = path.resolve(process.cwd(), filePath);
    if (!fs.existsSync(resolved)) {
        console.error(`File not found: ${resolved}`);
        process.exit(1);
    }

    const code = fs.readFileSync(resolved, "utf8");

    const baseUrl = process.env.DEVINSIGHT_API_URL || "http://localhost:3000";
    let endpoint = "";

    if (command === "analyze") {
        endpoint = "/api/analyze";
    } else if (command === "tests") {
        endpoint = "/api/generate-tests";
    } else {
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }

    const url = baseUrl + endpoint;

    console.log(`Calling ${url}...`);

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language })
    });

    const json = await res.json();

    if (!res.ok) {
        console.error("Error:", json.error || res.statusText);
        process.exit(1);
    }

    if (command === "analyze") {
        console.log("\n=== DevInsight Analysis ===\n");
        console.log(json.analysis);
    } else {
        console.log("\n=== DevInsight Generated Tests ===\n");
        console.log(json.tests);
    }
}
