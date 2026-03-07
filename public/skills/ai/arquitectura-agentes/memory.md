# Memoria Persistente de Arquitectura de Agentes

*Registra decisiones arquitectónicas sobre prompts globales, estrategias de SDD y Agent Hooks.*

## Decisiones Base de Context Engineering
- Umbral crítico de "Context Rot" observado: 60%.
- Regla Caching CREAM: Priorizar contenido estático al principio del prompt. No mutar herramientas mid-session.
