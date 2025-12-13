# DevInsight AI  
**An AI-powered developer productivity system for code analysis, refactoring insights, and automated unit test generation.**

DevInsight AI is a full-stack, production-oriented AI tooling system designed to integrate **Large Language Models (LLMs)** into real software engineering workflows — not as demos, but as **repeatable, extensible engineering tools**.

The system focuses on **code comprehension, quality assurance, and test automation**, and is intentionally designed to be used via **CLI tools, CI/CD pipelines (GitHub Actions), APIs, and a web interface**, reflecting how modern engineering teams actually work.

---

## Why DevInsight AI Exists

Most AI code assistants operate primarily as chat interfaces or editor plugins. While useful for ad-hoc queries, they are difficult to integrate into **automated engineering workflows** such as CI/CD pipelines, code reviews, and test generation processes.

DevInsight AI was created to address this gap by providing:

- Deterministic, automation-friendly AI-assisted code analysis  
- Repeatable unit test generation  
- Interface-agnostic access (CLI, GitHub Actions, API, Web UI)  
- Clear architectural separation between orchestration logic and AI inference  

The goal of this project is to demonstrate how **LLMs can be safely and practically embedded into real-world software systems**, rather than remaining experimental or conversational tools.

---

## High-Level Architecture

DevInsight AI is built as a **modular, multi-interface system**, designed for scalability and extensibility.

**Core components:**
- **CLI Tool** – Enables local developer workflows
- **GitHub Action** – Integrates AI analysis and test generation into CI/CD pipelines
- **API Layer** – Central request handling and orchestration
- **Prompt Orchestration Layer** – Context-aware prompt construction and response handling
- **LLM Provider** – AI inference layer
- **Frontend (Next.js)** – Interactive web interface
- **Serverless Backend (Vercel)** – Scalable, low-overhead deployment

The architecture is designed to:
- Avoid tightly coupling UI logic with AI inference
- Control prompt size, structure, and context
- Support multiple programming languages and frameworks
- Enable future extensions without architectural rewrites

*(Architecture diagram can be found in the documentation.)*
![Architecture Diagram](./img/devinsight.png "System Architecture")

---

## Key Features

### 🔍 Code Analysis
- LLM-assisted static and semantic code analysis  
- Detection of potential bugs, security risks, and performance issues  
- Identification of code smells and maintainability concerns  
- Suggestions for clean, maintainable refactors  
- Language-agnostic analysis flow with language-specific context  

**Supported languages:**
- JavaScript  
- PHP  
- Python  

---

### 🧪 Unit Test Generator
Automatically generates unit tests covering:

- Happy paths  
- Edge cases  
- Error conditions  
- Input validation  

**Supported frameworks:**

| Language     | Framework |
|-------------|-----------|
| JavaScript  | Jest      |
| PHP         | PHPUnit   |
| Python      | PyTest    |

---

### 🧰 CLI Tool
DevInsight AI can be executed directly from the terminal, enabling automation-first workflows.

**Examples:**

```bash
node devinsight.js tests ../test.js JavaScript
node devinsight.js tests ../test.php PHP
node devinsight.js tests ../test.py Python

node devinsight.js analyze ../test.js JavaScript
node devinsight.js analyze ../test.php PHP
node devinsight.js analyze ../test.py Python
```

### GitHub Action Integration

DevInsight AI can be integrated into GitHub Actions to automate:
- Code analysis during pull requests
- Unit test generation during CI runs

This enables AI-assisted quality checks as part of standard development pipelines.

### 🌐 Web Interface

A Next.js-based frontend provides an interactive interface for experimenting with code analysis and test generation.

### Live App:
https://devinsight-6tkmxpgut-noni-gopal-sutradhars-projects.vercel.app/

### Design Decisions and Trade-offs

Key architectural decisions in DevInsight AI include:

- Using a serverless backend to allow horizontal scaling without infrastructure overhead
- Separating prompt orchestration from request handling to improve determinism and maintainability
- Providing CLI and GitHub Action interfaces to prioritise automation-first workflows
- Focusing on analysis and test generation rather than conversational AI

These decisions were made to prioritise reliability, extensibility, and real-world usability over novelty.

### Project Structure

/app/api – Serverless backend and orchestration logic

/cli – Command-line interface for local workflows

/components – Next.js web application

### Documentation
- Technical documentation and architectural notes are available in the /docs directory.
- The system architecture and design rationale are explained in detail in the accompanying article:
**“The Bold Architect: How I Engineered DevInsight AI from the Ground Up”**
- Link: https://medium.com/@sopnonill87/the-bold-architect-how-i-engineered-devinsight-ai-from-the-ground-up-2b77ffbac29c

### Summary

DevInsight AI is an open-source demonstration of how LLMs can be embedded into real developer workflows through clean architecture, automation-friendly interfaces, and careful prompt orchestration.

The project is intentionally open-source and documented to:
- Serve as a usable developer productivity tool, and
- Act as a reference implementation for engineers interested in building production-grade AI-assisted systems.
