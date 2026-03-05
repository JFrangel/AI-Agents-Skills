---
name: find-skills
description: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.
argument-hint: "[skills|help|ayuda|que puedes hacer]"
user-invocable: true
---

# Skill Discovery & Helper

## Propósito
Esta skill ayuda al usuario a encontrar la herramienta correcta para su necesidad. Actúa como un "Router" inteligente.

## Catálogo de Skills Disponibles

Cuando el usuario pregunte "¿qué puedes hacer?" o tenga una necesidad vaga, sugiérele una de estas skills:

### 1. Para Ideas de Negocio y Startups
- **Skill**: `ai-founder`
- **Uso**: "Tengo una idea de startup", "necesito un modelo de negocio", "pitch deck".
- **Qué hace**: Genera un plan completo de negocio + tecnología.

### 2. Para Arquitectura Técnica y MVP
- **Skill**: `ai-cto`
- **Uso**: "Arquitectura para hackaton", "stack tecnológico", "MVP rápido".
- **Qué hace**: Define stack, base de datos y roadmap técnico enfocado en ejecución rápida.

### 3. Para Diseño Conceptual (Agnóstico)
- **Skill**: `idea-to-startup`
- **Uso**: "Diseño de sistema agnóstico", "pipeline conceptual", "idea abstracta".
- **Qué hace**: Convierte ideas en diagramas y flujo de trabajo sin atarse a Next.js/React.

### 4. Para Desarrollo y Refactorización (Código)
- **Skill**: `plan`
- **Uso**: "Refactorizar código", "estructura de carpetas", "buenas prácticas".
- **Qué hace**: Guía cambios de código modulares y documentados.

### 5. Para Diseño Visual y UI
- **Skill**: `design-system`
- **Uso**: "Tokens de diseño", "componentes UI", "Tailwind", "d", "design", "sistema diseño".
- **Qué hace**: Provee sistema de diseño, animaciones y componentes base.

## Activadores de Skills

### AI Founder (`ai-founder`)
**Se activa con:** "Quiero crear una startup", "pitch deck", "modelo de negocio".
**Enfoque:** Negocio + Estrategia.

### AI CTO (`ai-cto`)
**Se activa con:** "Arquitectura para hackaton", "stack tecnológico", "MVP técnico".
**Enfoque:** Ejecución técnica rápida.

### Idea to Startup (`idea-to-startup`)
**Se activa con:** "Idea abstracta", "pipeline conceptual", "diseño agnóstico".
**Enfoque:** Flowcharts y lógica pura.

### Plan de Desarrollo (`plan`)
**Se activa con:** "Refactoriza este código", "buenas prácticas Next.js", "analiza impacto".
**Enfoque:** Calidad de código y modularidad.

### Buscador de Skills (`find-skills`)
**Se activa con:** "Qué puedes hacer", "ayuda", "tengo una idea pero no sé por dónde empezar".
**Enfoque:** Ayuda y descubrimiento de skills.

## Cómo responder
Si el usuario pregunta algo vago, responde:
"Para ayudarte mejor, puedo usar una de mis skills especializadas. ¿Qué necesitas?
1. **AI Founder**: Para crear un negocio completo.
2. **AI CTO**: Para arquitectura técnica y MVPs.
3. **Plan Tech**: Para refactorizar y escribir mejor código."
---

# Find Skills

This skill helps you discover and install skills from the open agent skills ecosystem.

## When to Use This Skill

Use this skill when the user:

- Asks "how do I do X" where X might be a common task with an existing skill
- Says "find a skill for X" or "is there a skill for X"
- Asks "can you do X" where X is a specialized capability
- Expresses interest in extending agent capabilities
- Wants to search for tools, templates, or workflows
- Mentions they wish they had help with a specific domain (design, testing, deployment, etc.)

## What is the Skills CLI?

The Skills CLI (`npx skills`) is the package manager for the open agent skills ecosystem. Skills are modular packages that extend agent capabilities with specialized knowledge, workflows, and tools.

**Key commands:**

- `npx skills find [query]` - Search for skills interactively or by keyword
- `npx skills add <package>` - Install a skill from GitHub or other sources
- `npx skills check` - Check for skill updates
- `npx skills update` - Update all installed skills

**Browse skills at:** https://skills.sh/

## How to Help Users Find Skills

### Step 1: Understand What They Need

When a user asks for help with something, identify:

1. The domain (e.g., React, testing, design, deployment)
2. The specific task (e.g., writing tests, creating animations, reviewing PRs)
3. Whether this is a common enough task that a skill likely exists

### Step 2: Search for Skills

Run the find command with a relevant query:

```bash
npx skills find [query]
```

For example:

- User asks "how do I make my React app faster?" → `npx skills find react performance`
- User asks "can you help me with PR reviews?" → `npx skills find pr review`
- User asks "I need to create a changelog" → `npx skills find changelog`

The command will return results like:

```
Install with npx skills add <owner/repo@skill>

vercel-labs/agent-skills@vercel-react-best-practices
└ https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
```

### Step 3: Present Options to the User

When you find relevant skills, present them to the user with:

1. The skill name and what it does
2. The install command they can run
3. A link to learn more at skills.sh

Example response:

```
I found a skill that might help! The "vercel-react-best-practices" skill provides
React and Next.js performance optimization guidelines from Vercel Engineering.

To install it:
npx skills add vercel-labs/agent-skills@vercel-react-best-practices

Learn more: https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices
```

### Step 4: Offer to Install

If the user wants to proceed, you can install the skill for them:

```bash
npx skills add <owner/repo@skill> -g -y
```

The `-g` flag installs globally (user-level) and `-y` skips confirmation prompts.

## Common Skill Categories

When searching, consider these common categories:

| Category        | Example Queries                          |
| --------------- | ---------------------------------------- |
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing         | testing, jest, playwright, e2e           |
| DevOps          | deploy, docker, kubernetes, ci-cd        |
| Documentation   | docs, readme, changelog, api-docs        |
| Code Quality    | review, lint, refactor, best-practices   |
| Design          | ui, ux, design-system, accessibility     |
| Productivity    | workflow, automation, git                |

## Tips for Effective Searches

1. **Use specific keywords**: "react testing" is better than just "testing"
2. **Try alternative terms**: If "deploy" doesn't work, try "deployment" or "ci-cd"
3. **Check popular sources**: Many skills come from `vercel-labs/agent-skills` or `ComposioHQ/awesome-claude-skills`

## When No Skills Are Found

If no relevant skills exist:

1. Acknowledge that no existing skill was found
2. Offer to help with the task directly using your general capabilities
3. Suggest the user could create their own skill with `npx skills init`

Example:

```
I searched for skills related to "xyz" but didn't find any matches.
I can still help you with this task directly! Would you like me to proceed?

If this is something you do often, you could create your own skill:
npx skills init my-xyz-skill
```
