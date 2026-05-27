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

