# Integración de Skills con GitHub Copilot

Este directorio contiene artefactos y recomendaciones para que GitHub Copilot (o herramientas compatibles) descubran y usen las `skills` del repositorio.

Archivos:
- `skills-manifest.json`: lista de skills con triggers (útil para registrarlas manualmente en Copilot o para orquestadores locales).

Guía rápida para usar estas skills con Copilot en VS Code:

1. Instala la extensión **GitHub Copilot** y asegúrate de tener sesión iniciada. Ver: https://docs.github.com/en/copilot
2. Copilot no importará archivos automáticamente desde proyectos sin configuración adicional. Opciones:
   - Copia el contenido de `skills/` a la carpeta de skills que use tu instalación de Copilot/agent (p. ej. `~/.copilot/skills` o la ruta que tu agente requiera). El script `init-skills.ps1` puede ayudar a inyectar estas carpetas en otro proyecto.
   - Registra manualmente las `skills` en la plataforma de Copilot (si tu organización lo permite) usando el manifiesto `skills-manifest.json`.
   - Configura un MCP/local orchestrator que exponga un endpoint seguro; luego configura Copilot para permitir ese MCP (ver docs de Copilot / MCP servers).

3. Recomendaciones operativas:
   - Habilita audit logs y allowlist MCP si trabajas en entorno corporativo.
   - Normaliza el handshake obligatorio (bloque ```text``` sin emojis). El orquestador puede forzar/corregir el formato.
   - Usa `skills-manifest.json` como fuente de verdad para sincronizar con Copilot Admin (enterprise) o para scripts de importación.

Recursos:
- Copilot Agents: https://docs.github.com/en/copilot/concepts/agents
- MCP / Integraciones: https://docs.github.com/copilot/how-tos/administer-copilot/configure-mcp-server-access

Si quieres, puedo:
- generar un script que copie `skills/` a `~/.copilot/skills` (Windows/WSL),
- crear un pequeño servidor MCP de ejemplo que exponga las skills para Copilot,
- o generar un PR con instrucciones para administrar las skills desde un equipo.
