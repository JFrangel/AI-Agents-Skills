# Copilot Instructions — Multi-Skill Orchestration

## Activación Automática de Skills

Este archivo configura el router de skills para que Copilot active automáticamente las siguientes habilidades usando triggers y la marca de identidad ⌬:

- ai-cto
- ai-founder
- arquitectura-agentes
- chunk-scoring
- plan
- idea-to-startup
- find-skills
- crm
- design-system
- security-guard
- documentation
- best-practices

---

## Reglas de Orquestación

- Cada vez que el usuario mencione un trigger definido en SKILL.md, activa la skill correspondiente.
- Todas las respuestas de skills deben iniciar con la marca ⌬ SKILL ACTIVADA: [NOMBRE].
- Permite multi-orquestación: varias skills pueden activarse en una sola interacción si los triggers coinciden.
- Prioriza la marca ⌬ sobre cualquier formato antiguo.

---

## Ejemplo de Activación

- Trigger: "refactoriza este código" → ⌬ SKILL ACTIVADA: PLAN
- Trigger: "security audit" → ⌬ SKILL ACTIVADA: SECURITY-GUARD
- Trigger: "tokens de diseño" → ⌬ SKILL ACTIVADA: DESIGN-SYSTEM

---

## Estado

Router de skills activo. Multi-orquestación habilitada. Todas las skills listadas están disponibles para activación automática.
