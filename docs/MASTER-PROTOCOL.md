# MASTER PROJECT PROTOCOL

> Central reference for initializing, building, and shipping automation projects with Claude Code.

## 1. Project Initialization

- Always create a dedicated folder for each new project and launch Claude Code from inside that folder — the working directory binds `CLAUDE.md`, skills, sub-agents, and git.
- Workspace starter prompt for every new project — follow these steps:
  1. Create folders: `projects/<project-name>/` and `docs/` (use kebab-case, e.g. `projects/link-shortener/`)
  2. Create `docs/LEARNING-LOG.md` with header: `| Date | Task | What I Learned | Portfolio Claim |`
  3. Create `docs/MASTER-PROTOCOL.md` with 10 headings (1. Project Initialization → 10. Portfolio Documentation)
  4. Create root `README.md` with portfolio title, structure overview, and tech stack
- Workspace layout: `projects/` for builds, `docs/` for documentation; root `README.md` with portfolio title, structure overview, and tech stack; per-project scaffolding and naming conventions.
- Run `/init` to generate `CLAUDE.md`, then add project rules via `/memory` > Project instructions.

## 2. Core Commands & Shortcuts

- Slash commands (`/exit`, `/init`, `/memory`, `/compact`, `/agents`, `/help`, `/config`) work ONLY inside the Claude Code REPL; OS commands (`cd`, `mkdir`, `code .`) run in PowerShell.
- Claude Code sessions are resumable with: `claude --resume <session-id>`.
- In VS Code use the integrated terminal for the Claude Code CLI; the Copilot Chat panel is a different product and is not used.
- Auto mode lets the permission classifier auto-approve safe commands; press `shift+tab` to cycle permission modes.
- `/memory` opens `CLAUDE.md` in the system editor (Notepad on Windows when `$EDITOR` is unset); the same file can be edited directly in VS Code.

## 3. Token Management

- API errors show as `API error · Retrying · attempt X/9`; wait 60s, then `Esc` + retry, then switch model in router if needed (model fallback).
- Watch `Crunched/Cogitated for Xm Ys` to track token/time usage per task.
- Before each task, check usage and set a token budget. Run `/compact` when context passes 70%. Log usage in `docs/LEARNING-LOG.md` if you switch models.

## 4. Sub-agents (Create & Use)

- Create sub-agents by asking Claude to generate `.claude/agents/<name>.md` files with frontmatter (`name`, `description`, `model`).
- Sub-agent files contain instructions for specialized tasks (review, testing, docs).
- Use sub-agents by referencing them: "Use the `<agent-name>` sub-agent to..."
- Main agent delegates work and receives summaries; context stays clean.
- Sub-agent files can be committed to git and shared across projects.
- Test sub-agents by asking them to review a file and apply their suggestions.

## 5. Skills (Create & Organize)

- Author reusable skills in `.claude/skills/<skill-name>/SKILL.md` with clear trigger phrases.
- Keep skills focused on one workflow; name with kebab-case (e.g. `deploy-check`).
- Document skill usage in `docs/MASTER-PROTOCOL.md` §5 when a reusable pattern emerges.
- Test skills inline before relying on them in portfolio tasks.

## 6. MCP & External Tools

- Configure MCP servers in `.claude/settings.json` or project `.mcp.json`; use env vars for auth tokens.
- Verify MCP tools with a read-only test call before using in builds.
- Keep external tool credentials out of `docs/` and `projects/` — use env vars only.
- Document any new MCP integration in §6 with setup steps.

## 7. Deployment Patterns

- Prefer free-tier targets: Netlify (static) and Render (server) — see `memory/deployment-free-tier.md`.
- Document build command and env vars for each deployed project in its `README.md`.
- Use `projects/<name>/` isolation — one deploy target per project, no shared runtime.
- Verify deployment with a live URL check before marking done.

## 8. Quality Checks

- Run build, lint, and test commands and paste output before marking done.
- Check Definition of Done: docs current, `LEARNING-LOG.md` row added, screenshot taken, live URL verified.
- Request review via `code-reviewer` sub-agent for docs and config changes.
- Keep checks in simple English — one action per bullet.

## 9. Anti-patterns (What NOT to do)

- Do not launch Claude Code from the portfolio root for per-project work — always use `projects/<project-name>/`.
- Do not commit secrets or env files — use env vars and `.gitignore`.
- Do not skip the `LEARNING-LOG.md` row after a task — every task maps to a portfolio claim.
- Do not use complex code comments or prompts — write in simple English.

## 10. Portfolio Documentation

- After every task: append one row to `docs/LEARNING-LOG.md` (`Date | Task | What I Learned | Portfolio Claim`).
- Keep `README.md` current — update the Structure table when adding projects.
- Remind the user to take screenshots at important moments.
- All commit messages end with `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` and PRs with `🤖 Generated with [Claude Code](https://claude.com/claude-code)`.
