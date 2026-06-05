$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

$bundledNode = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if (Test-Path -LiteralPath $bundledNode) {
  & $bundledNode server.js
  exit $LASTEXITCODE
}

& node server.js

