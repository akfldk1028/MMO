import { existsSync } from "node:fs";

const required = [
  "packages/core/src/index.ts",
  "apps/mmo-mcp/src/server.ts",
  "apps/mmo-mcp/src/tools/index.ts",
  "skills/claude/mmo-business-memory/SKILL.md",
  "openai/generated/mcp-tool.json",
  "openai/generated/chatgpt-custom-app.json",
  "anthropic/generated/mcp-connector.json",
  "anthropic/generated/claude-surfaces.json",
  "docs/integration-surfaces.md",
];

const missing = required.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error("MMO integration is incomplete. Missing files:");
  for (const path of missing) {
    console.error(`- ${path}`);
  }
  process.exit(1);
}

console.log("MMO integration files are present.");
