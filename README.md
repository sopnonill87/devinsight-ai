# 🚀 DevInsight AI  
**AI-powered code analysis and automated unit test generation.**

DevInsight AI is a full-stack developer productivity tool powered by AI.  
It analyzes code, detects issues, suggests improvements, and generates unit tests for:

- **JavaScript (Jest)**
- **PHP (PHPUnit)**
- **Python (PyTest)**

It includes:

- 🔍 **Code analysis API**  
- 🧪 **Unit test generation API**  
- 🧰 **CLI tool** for local workflows  
- 🟦 **GitHub Action** integration  
- ⚡ **Next.js frontend** for interactive usage  
- ☁️ **Vercel serverless backend**  

👉 **Live App:** https://your-vercel-url.vercel.app  
👉 **API-powered CLI:** in `/cli`  
👉 **Documentation:** in `/docs`

---

## ✨ Features

### 🔍 Code Analysis
- Detect bugs  
- Detect code smells  
- Identify security issues  
- Find performance problems  
- Suggest clean, maintainable refactors  
- Works for JS, PHP, Python  

### 🧪 Unit Test Generator
Automatically generates tests for:

| Language | Framework |
|----------|------------|
| JavaScript | Jest |
| PHP | PHPUnit |
| Python | PyTest |

Covers:
- Happy paths  
- Edge cases  
- Error conditions  
- Input validation  

### 🧰 CLI Tool
Run DevInsight directly from your terminal.

Examples:

```bash
node devinsight.js tests ../test.js JavaScript
node devinsight.js tests ../test.php PHP
node devinsight.js tests ../test.py Python

node devinsight.js analyze ../test.js JavaScript
node devinsight.js analyze ../test.php PHP
node devinsight.js analyze ../test.py Python
