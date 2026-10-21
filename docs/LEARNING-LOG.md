
# Learning Log

A running record of tasks completed, lessons extracted, and portfolio-ready claims.

| Date | Task | What I Learned | Portfolio Claim |
|------|------|----------------|-----------------|
| 2026-10-18 | Portfolio workspace initialization | How to scaffold a structured portfolio with dedicated `projects/` and `docs/` areas and protocol-driven documentation | Built a portfolio workspace with standardized structure for automation project delivery |
| 2026-10-18 | Fresh workspace launch & folder binding | Each project needs its own folder; Claude Code's working directory binds CLAUDE.md, skills, sub-agents, and git | Launched isolated project workspaces with correct working-directory binding |
| 2026-10-18 | Agent-executed workspace creation | Agents can execute `mkdir` and file scaffolding directly in PowerShell | Automated workspace scaffolding via agent-executed shell commands |
| 2026-10-18 | Workspace structure creation | Starter prompt creates `projects/`, `docs/`, `README.md`, `docs/LEARNING-LOG.md`, `docs/MASTER-PROTOCOL.md` (10 sections) | Created a repeatable portfolio workspace template |
| 2026-10-18 | API error retry handling | `API error · Retrying · attempt X/9` — wait 60s, Esc + retry, then model fallback via router | Handled transient API errors with timed retries and model fallback |
| 2026-10-18 | /init CLAUDE.md generation | `/init` analyzes the codebase and generates `CLAUDE.md` for future sessions | Initialized project guidance via automated CLAUDE.md generation |
| 2026-10-18 | Memory layers learned | Project instructions live in `CLAUDE.md` (editable via `/memory`); docs/ holds protocol + learning log | Configured layered project memory (CLAUDE.md + docs protocol) |
| 2026-10-18 | $EDITOR / Notepad behavior | `/memory` opens `CLAUDE.md` in `$EDITOR`/`$VISUAL` (Notepad on Windows when unset); editable directly in VS Code | Navigated editor binding for project memory management |
| 2026-10-18 | Sub-agent creation & protocol review | Created code-reviewer sub-agent in .claude/agents and used it to audit docs for clarity and gaps | Set up automated code review via sub-agents for quality checks |
| 2026-10-19 | code-reviewer audit of MASTER-PROTOCOL.md | Used code-reviewer sub-agent to review protocol for clarity and structure | Applied automated review to improve portfolio docs |
| 2026-10-19 | Applied 3 protocol fixes from code review | Expanded placeholder sections, fixed vague token bullet, broke overloaded init bullet into checklist | Improved portfolio docs via actionable protocol updates |
| 2026-10-19 | Sub-agent creation & orchestration | Created code-reviewer.md in .claude/agents/, tested review workflow, applied 3 fixes to MASTER-PROTOCOL.md | Orchestrated multi-agent workflow with delegated review tasks |
| 2026-10-19 | Portfolio website build | Built responsive portfolio site in projects/portfolio-website/ with semantic HTML, CSS Grid/Flexbox, and scroll animations | Delivered professional portfolio website with modern responsive design |
| 2026-10-19 | Lead capture API | Built lead-capture-api with Express + SQLite, POST/GET /api/leads, validation, and Render deploy ready | Delivered REST API with SQLite persistence and free-tier deployment |
## 2026-10-20 | Hour 4: Webhooks + OAuth 2.0 + Follow-up Agent

### What I Built:
- Lead Scoring Agent (scorer.js) - JavaScript function that assigns priority scores
- Webhook Simulator (simulate-form.js) - Simulates n8n/Make automation
- Complete automation pipeline: Form → API → Agent → Database

### OAuth 2.0 Learning:
- OAuth 2.0 = Authorization without sharing passwords
- Used it when connecting GitHub to Render.com
- Used it when "Login with Google" on websites
- Token-based authentication (not password-based)
- Scopes define what access is granted (least privilege principle)

### Portfolio Claims:
✅ Built REST API with Express + SQLite
✅ Implemented lead scoring agent (business logic automation)
✅ Simulated webhook automation (n8n/Make equivalent)
✅ Understood OAuth 2.0 authorization flow
✅ Deployed to GitHub with conventional commits

## 2026-10-20 | Hour 5: Python + RAG + MCP

### What I Built:
- Python automation script (process_leads.py) - CSV processing + email drafting
- RAG bot (rag_bot.py) - Context-aware AI with knowledge base
- MCP configuration (mcp_config.json) - AI-tool integration setup

### Key Learnings:
- Python is the king of automation (80% of real-world automation uses Python)
- RAG = Retrieval-Augmented Generation (AI ko context dena before answering)
- MCP = Model Context Protocol (USB-C for AI - gives AI access to tools)
- CSV processing is fundamental skill for data automation

### Portfolio Claims:
✅ Built Python automation for lead processing
✅ Implemented RAG system for knowledge base queries
✅ Configured MCP for AI-tool connectivity
✅ Automated data pipeline (CSV → Filter → Email Draft)

### Challenges:
- Python wasn't installed initially (used Microsoft Store version)
- Understanding RAG concept (retrieval + generation steps)
- MCP configuration syntax (JSON structure)

---

## 2026-10-20 | Hour 6: Portfolio Packaging

### What I Did:
- Updated main README.md with all projects and skills
- Documented complete learning journey
- Prepared portfolio for job applications
- Final git commit and push

### Final Portfolio Claims:
✅ Full-stack automation engineer (6-hour build)
✅ Backend: Node.js + Express + SQLite
✅ Frontend: HTML + CSS + JavaScript
✅ Automation: Python + Webhooks + RAG + MCP
✅ DevOps: Git + GitHub + Netlify + ngrok
✅ AI Integration: Claude Code + Protocol system

### Next Steps:
- Apply to automation engineer jobs
- Build more complex workflows (n8n/Make)
- Learn advanced RAG (vector databases, embeddings)
- Explore more MCP servers (Slack, Gmail, etc.)