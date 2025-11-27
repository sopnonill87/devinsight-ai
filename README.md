# 🚀 DevInsight AI  
**AI-powered code analysis and unit test generation for developers**

DevInsight AI is a lightweight, open-source developer tool that uses LLMs to:
- 🔍 Analyze code for issues, smells, and improvements  
- 🧪 Generate unit tests automatically  
- 📊 Provide actionable insights for better code quality  
- 🛠 Offer a CLI for local workflows  
- 🟦 Provide an API that integrates with GitHub Actions  

This project was built in 20 days as a powerful developer productivity tool using:
- Next.js (full stack)
- OpenAI LLMs
- Node.js CLI
- Vercel Serverless Functions

 👉 **Live App:** https://devinsight-ai.vercel.app  
 👉 **CLI:** (to be published on npm)  
 👉 **Documentation:** See below  

---

## ✨ Features

### 🔍 Code Analysis  
Paste your code → DevInsight AI returns:
- Bugs & vulnerabilities  
- Code smells  
- Readability issues  
- Maintainability risks  
- Suggested refactors  
- Best-practice recommendations  

### 🧪 Unit Test Generator  
Supports:
- **Jest (JS/TS)**  
- **PHPUnit (PHP)**  
- **PyTest (Python)**  

The AI creates:
- Happy path tests  
- Edge cases  
- Negative cases  
- Simple, readable test names  

### 🧰 DevInsight CLI  
Run DevInsight from your terminal:

```bash
devinsight analyze src/index.js JavaScript
devinsight tests app/Service.php PHP
