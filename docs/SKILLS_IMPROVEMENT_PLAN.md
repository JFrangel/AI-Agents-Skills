# Plan de Mejora Integral de Skills (Agent Harness)

Este documento presenta un análisis y propuestas de mejora para las 12 skills (agentes) del repositorio NeuralForge. El objetivo es alinear las implementaciones individuales de cada skill con los estándares definidos en los documentos globales (`.cursorrules`, `CLAUDE.md`, `.agents/SOUL.md` y `docs/agent_harness_masterclass.md`), mejorando la eficiencia del contexto, la seguridad y la adherencia a la arquitectura de orquestación.

## 1. Análisis del Estado Actual

Actualmente, las skills están bien categorizadas y estructuradas usando YAML Frontmatter. Sin embargo, se han identificado tres áreas críticas de divergencia entre las directrices del Master Protocol y las implementaciones locales (`SKILL.md`):

1.  **Inconsistencia en la "Marca de Identidad" (Handshake Técnico):**
    *   La Sección IV de `.cursorrules` prohíbe el uso de emojis dentro del bloque técnico del handshake y exige símbolos terminales (⌬, 🛡, ⚗, ◉, ▣), además de un bloque ````text ... ```` obligatorio.
    *   Varios archivos `SKILL.md` (ej. `design-system`, `find-skills`, etc.) contienen ejemplos o directrices contradictorias (ej. `🔴 OBLIGATORIO: MARCA DE IDENTIDAD DE LA SKILL` usando emojis y texto libre).
2.  **Riesgo de "Context Rot" (Saturación de Contexto):**
    *   Según `agent_harness_masterclass.md`, el "Context Rot" ocurre si superamos el 60% de uso de tokens.
    *   Archivos como `design-system/SKILL.md` incluyen secciones excesivamente largas de código (variables CSS, Tailwind configs) en su propia definición.
3.  **Falta de Cumplimiento de SDD (Spec-Driven Development):**
    *   `CLAUDE.md` establece el SDD como el "Harness Definitivo".
    *   Muchos `workflows` de skills operativas (`plan`, `crm`, etc.) pasan directamente de "análisis" a "ejecución", omitiendo la generación obligatoria de un archivo `task.md` o un diseño de especificación.

## 2. Propuestas de Mejora (Por Área)

### 2.1 Estandarización del "Handshake Técnico" (Marca de Identidad)

**Acción Requerida:** Actualizar la sección `🔴 OBLIGATORIO: MARCA DE IDENTIDAD` de todos los archivos `SKILL.md`.

*   **Eliminar** los saludos genéricos o introducciones informales (ej. "Siempre que intervengas asumiendo este rol, responde iniciando con: 🎨...").
*   **Imponer** el formato estricto del bloque de texto:
    ```markdown
    **REPORTE: [DETALLE CORTO DE LA INTERVENCIÓN]**
    ```text
    ⌬ SKILL ACTIVADA: [NOMBRE-SKILL]
    Applied → [acción ejecutada]
    STATUS: 🛡 Security ACTIVE | ⚗ Env: DEV | ⟳ Mode: Single-Skill
    ```
    ```
*   **Beneficio:** Uniformidad total en las interacciones y refuerzo del comportamiento "máquina-terminal" (SOUL), sin pérdida de contexto por saludos o emojis decorativos.

### 2.2 Optimización de la Ventana de Contexto (Prevención de Context Rot)

**Acción Requerida:** Limpiar los `SKILL.md` pesados.

*   Mover grandes bloques de código, tablas de gradientes y configuraciones de ejemplos que saturan el System Prompt hacia la carpeta `examples/` dentro de la skill correspondiente.
*   En el `SKILL.md`, incluir una directriz breve (ej. "Revisa el archivo `examples/design-tokens.md` para extraer la paleta de colores").
*   **Beneficio:** Menor consumo de tokens base, reduciendo latencias y asegurando que las reglas críticas (como SDD y Handshake) no sean "desplazadas" de la atención del LLM.

### 2.3 Refuerzo del Spec-Driven Development (SDD) y el Bucle de Feedback

**Acción Requerida:** Modificar el bloque `workflow` en skills operativas (`plan`, `crm`, `design-system`, `best-practices`, etc.).

*   Añadir o modificar el "Paso 1" (`step1`) para que exija explícitamente la creación y validación de un plan o especificación (`task.md`) antes de tocar el código real.
*   En las skills de refactorización/QA, reforzar el "Stop Hook" (el agente no debe reportar éxito hasta que las herramientas locales como linters/tests pasen exitosamente).
*   **Beneficio:** Previene "código roto" y alucinaciones arquitectónicas, garantizando que el agente valide su estrategia con el usuario antes de la ejecución a gran escala.

### 2.4 Estandarización de `output_format`

**Acción Requerida:** Homogeneizar los valores en el YAML Frontmatter de cada `SKILL.md`.

*   Asegurar que todas las listas de `output_format.sections` incluyan explícitamente `technical handshake` como primer elemento y requieran respuestas estructuradas en markdown, tablas y viñetas (como dicta `SOUL.md`), erradicando respuestas puramente conversacionales.
*   **Beneficio:** Predictibilidad total en la entrega de respuestas de cualquier skill, facilitando la lectura humana y la evaluación técnica.

## 3. Estrategia de Implementación

Para implementar estas mejoras en el código sin romper el uso actual, se sugiere el siguiente enfoque por fases:

1.  **Fase 1 (Global):** Refactorizar masivamente la sección de *Marca de Identidad* en los 12 archivos `SKILL.md` (un solo PR) asegurando el cumplimiento de la Sección IV del Master Protocol.
2.  **Fase 2 (Contexto):** Mover el código duro a `examples/` para las skills pesadas (como `design-system` y `crm`).
3.  **Fase 3 (Workflows):** Actualizar los bloques YAML `workflow` y `output_format` para exigir SDD (Spec-Driven Development).

---
*Este documento fue generado basándose en un análisis profundo de la arquitectura `agent_harness_masterclass.md` y las configuraciones de los agentes actuales.*