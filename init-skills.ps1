# Script para inicializar Skills en un proyecto nuevo
# Uso: .\init-skills.ps1 "C:\ruta\al\nuevo\proyecto"

param (
    [string]$TargetDir = (Get-Location)
)

$SourceDir = "d:\proyects\AI-Agents-Skills"

Write-Host "Inyectando Agent Harness en: $TargetDir" -ForegroundColor Cyan

# Crear carpetas si no existen
if (!(Test-Path "$TargetDir\skills")) { New-Item -ItemType Directory -Path "$TargetDir\skills" }
if (!(Test-Path "$TargetDir\.agents")) { New-Item -ItemType Directory -Path "$TargetDir\.agents" }

# Copiar Reglas y Skills
Copy-Item -Path "$SourceDir\skills" -Destination "$TargetDir" -Recurse -Force
Copy-Item -Path "$SourceDir\.cursorrules" -Destination "$TargetDir" -Force
Copy-Item -Path "$SourceDir\.windsurfrules" -Destination "$TargetDir" -Force
Copy-Item -Path "$SourceDir\.agents" -Destination "$TargetDir" -Recurse -Force

Write-Host "✅ Skills inyectadas con éxito. Reinicia el Agente para activar." -ForegroundColor Green
