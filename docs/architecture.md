# MMO Architecture

MMO is a universal AI business module repository.

## Layers

1. MCP server
   - Implemented in `apps/mmo-mcp`.
   - Provides tools that ChatGPT, Claude, and other MCP clients can call.

2. Vendored framework/reference code
   - `fastmcp/` contains the vendored FastMCP framework.
   - `vendor/openai-apps-sdk-examples/` contains OpenAI reference examples.
   - `vendor/anthropic-skills/` contains Anthropic Agent Skills examples.

3. Agent workflow packages
   - `skills/claude/` contains MMO-owned Claude Skills.
   - Future OpenAI app/widget metadata belongs under `openai/`.
   - Anthropic connector and skill docs belong under `anthropic/`.

## Product Direction

MMO should remain client-neutral:

- MCP is the shared execution layer.
- Skills are workflow/instruction packages.
- Apps SDK UI is added only when ChatGPT needs an interactive surface.

## Surface Contract

Every user-facing integration should point back to one shared module:

```txt
packages/core
  -> apps/mmo-mcp
  -> ChatGPT custom MCP app
  -> OpenAI API MCP tool
  -> Claude custom connector
  -> Claude API MCP connector
  -> Claude Skill workflow package
```

Do not fork business logic per client. Add client-specific behavior only in adapters, generated configs, or skill instructions.

