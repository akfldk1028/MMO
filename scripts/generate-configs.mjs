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
  "openai/generated/chatgpt-custom-app.json",
  `${JSON.stringify(
    {
      app_name: "MMO",
      description:
        "Business memory and workflow MCP module for ChatGPT normal chats, company knowledge, and deep research.",
      mcp_server_url: endpoint,
      recommended_tools: ["search", "fetch", "remember", "recall"],
      setup:
        "Create a custom MCP app/connector in ChatGPT developer mode, provide this endpoint, scan tools, then publish or enable for the workspace.",
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

writeFileSync(
  "anthropic/generated/claude-surfaces.json",
  `${JSON.stringify(
    {
      connector_name: "MMO",
      mcp_server_url: endpoint,
      supported_paths: [
        "Claude custom connector",
        "Claude API MCP connector",
        "Claude Desktop or Claude Code MCP setup where supported",
        "Claude Skill workflow package",
      ],
      skill_source: "skills/claude/mmo-business-memory",
    },
    null,
    2,
  )}\n`,
);

console.log(`Generated OpenAI and Anthropic MCP configs for ${endpoint}`);
