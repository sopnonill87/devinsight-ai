//#!/usr/bin/env node
#!/usr/bin/env node
import("../index.js").then((m) => m.run()).catch((err) => {
    console.error("devinsight-cli error:", err);
    process.exit(1);
});
