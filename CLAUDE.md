# CLAUDE.md — Project Context & Rules

## Project: AI Agents & Skills Harness (NeuralForge)
Este repositorio es un **Agent Harness** de grado industrial diseñado para orquestar múltiples agentes de IA especializados (Skills) mediante ingeniería de contexto avanzada.

## Tech Stack
- **Core**: Next.js, TypeScript, Node.js.
- **Intelligence**: Markdown-based Skills with YAML Frontmatter.
- **Styling**: Tailwind CSS, Shadcn/UI (Standard for Design System skill).
- **Architecture**: Modular, Spec-Driven Development (SDD).

## Directory Structure
- `skills/`: Active skills organized by category (`ai`, `backend`, `core`, `devops`, `documentation`, `frontend`, `testing`).
- `docs/`: Master documentation and architecture standards (`agent_harness_masterclass.md`).
- `.agents/`: Identity framework (`IDENTITY.md`, `SOUL.md`, `USER.md`).
- `src/`: Source code of the supporting platform (if applicable).

## Engineering Guidelines
1. **Spec-Driven Development (SDD)**: Create technical specs in `docs/` or chat before massive code changes.
2. **Identity Markers**: Every skill activation must start with its mandatory identity badge (e.g., `🛠️ **[SKILL ACTIVADA: AI-CTO]**`).
3. **Context Management (CREAM)**: Keep session context <60% to avoid "Context Rot".
4. **Zero Broken Code**: Never leave the codebase in a non-functional state.
5. **JSDoc**: All new logic must be documented using JSDoc (Params, Returns, Examples).

## Available Skills (12)
- **AI**: `ai-cto`, `ai-founder`, `arquitectura-agentes`, `chunk-scoring`.
- **Backend**: `crm`.
- **Core**: `find-skills`, `idea-to-startup`, `plan`.
- **DevOps**: `security-guard`.
- **Documentation**: `documentation`.
- **Frontend**: `design-system`.
- **Testing**: `best-practices`.
