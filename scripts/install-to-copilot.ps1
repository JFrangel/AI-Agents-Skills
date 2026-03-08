param(
    [string]$TargetDir = "$env:USERPROFILE\.copilot"
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Definition
$RepoRoot = Split-Path -Parent $ScriptDir

Write-Host "Installing skills and rules from: ${RepoRoot}" -ForegroundColor Cyan
Write-Host "Target Copilot dir: ${TargetDir}" -ForegroundColor Cyan

if (!(Test-Path $TargetDir)) {
    New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
}

function CopyIfExists($relPath, $destRoot) {
    $src = Join-Path $RepoRoot $relPath
    if (Test-Path $src) {
        $dest = Join-Path $destRoot (Split-Path $relPath -Leaf)
        Write-Host "Copying $relPath -> $dest" -ForegroundColor Yellow
        Copy-Item -Path $src -Destination $dest -Recurse -Force
    } else {
        Write-Host "Skipping (not found): $relPath" -ForegroundColor DarkGray
    }
}

# Ensure target skills folder exists
$targetSkills = Join-Path $TargetDir 'skills'
if (!(Test-Path $targetSkills)) { New-Item -ItemType Directory -Path $targetSkills | Out-Null }

# Copy main artifacts
CopyIfExists 'skills' $TargetDir
CopyIfExists '.cursorrules' $TargetDir
CopyIfExists '.agents' $TargetDir
CopyIfExists '.copilot' $TargetDir
CopyIfExists '.vscode\neuralforge.rules.md' $TargetDir
CopyIfExists '.copilot\skills-manifest.json' $TargetDir

Write-Host "Installation complete. Listing ${TargetDir}:" -ForegroundColor Green
Get-ChildItem -Path ${TargetDir} | ForEach-Object { Write-Host " - $_" }
