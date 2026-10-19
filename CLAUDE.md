# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Claude Code Automation Portfolio — a curated, docs-first workspace for showcasing automation projects built with Claude Code (CLI workflows, sub-agents, skills, deployment patterns). Not an application codebase; no build/lint/test toolchain is configured yet.

## Structure

- `projects/` — all project builds (each project in its own subdirectory, e.g. `projects/<project-name>/`)
- `docs/LEARNING-LOG.md` — running journal with columns `Date | Task | What I Learned | Portfolio Claim`
- `docs/MASTER-PROTOCOL.md` — 10-section canonical protocol (Project Initialization through Portfolio Documentation)
- `README.md` — portfolio title "Claude Code Automation Portfolio", structure table, and tech stack

## Architecture

This repo is a portfolio shell. `MASTER-PROTOCOL.md` is the source of truth for how projects are initialized, built, and shipped — treat it as the spec when scaffolding new work. `LEARNING-LOG.md` is the changelog of record; every task should append a row mapping the work to a portfolio claim. `projects/` is intentionally empty at init and accumulates independent builds over time — there is no shared runtime or monorepo linkage between projects.

No Cursor rules (`.cursor/rules/`, `.cursorrules`), no Copilot instructions (`.github/copilot-instructions.md`), and no repo-level Codex/Gemini configs were found. If you have user-level Codex or Gemini configs to import, run `/import` to scan and `/import --yes=<digest>` to apply.

## Workflow

- New projects: scaffold under `projects/<project-name>/` per `docs/MASTER-PROTOCOL.md` §1. Keep `README.md` and `docs/` current.
- Documentation: append to `docs/LEARNING-LOG.md` after each task; update `docs/MASTER-PROTOCOL.md` when a reusable pattern emerges.
- Verification: no automated tests exist yet. When a project introduces a toolchain (e.g. `package.json`, `Makefile`), document its build/lint/test commands here.

## Git

- This directory is not yet a git repository. When initialized, end commit messages with `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` and PR descriptions with `🤖 Generated with [Claude Code](https://claude.com/claude-code)`.

# Project Rules
- This is a portfolio workspace; every new project goes in projects/<project-name>/
- After every completed task, add a row to docs/LEARNING-LOG.md
- After learning any reusable rule, update docs/MASTER-PROTOCOL.md
- Write all code comments and prompts in simple English
- Remind me to take screenshots at important moments