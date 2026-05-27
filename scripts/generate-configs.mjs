import { mkdirSync, writeFileSync } from "node:fs";

const endpoint = process.env.MMO_MCP_URL ?? "http://localhost:3030/mcp";

mkdirSync("openai/generated", { recursive: true });
mkdirSync("anthropic/generated", { recursive: true });

writeFileSync(
  "openai/generated/mcp-tool.json",
  `${JSON.stringify(
    {
      server_label: "mmo",
      server_url: endpoint,
      type: "mcp",
    },
    null,
    2,
  )}\n`,
);

writeFileSync(
  "anthropic/generated/mcp-connector.json",
  `${JSON.stringify(
    {
      name: "mmo",
      transport: {
        type: "http",
        url: endpoint,
      },
    },
    null,
    2,
  )}\n`,
);

console.log(`Generated OpenAI and Anthropic MCP configs for ${endpoint}`);

