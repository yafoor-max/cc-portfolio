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
