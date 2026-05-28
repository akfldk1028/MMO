# MMO

MMO is a business MCP product built on top of the vendored FastMCP framework.

## One Module Flow

MMO is built as one product module:

```txt
@mmo/core
  -> apps/mmo-mcp
  -> ChatGPT custom MCP app / OpenAI MCP config
  -> Claude custom connector / Anthropic MCP config
  -> Claude Skill package
```

Run the whole module build:

```bash
pnpm mmo:build
```

That command builds the vendored FastMCP framework, type-checks MMO core and MCP server, packages the Claude Skill, and generates OpenAI/Anthropic MCP config files.

Check whether the integrated surface files exist:

```bash
pnpm mmo:doctor
```

## Structure

- `fastmcp/` - vendored FastMCP framework source
- `packages/core/` - MMO business logic shared by every adapter
- `apps/mmo-mcp/` - MMO MCP server product
- `skills/claude/` - MMO-owned Claude Skills
- `openai/generated/` - generated OpenAI MCP config
- `anthropic/generated/` - generated Anthropic MCP config
- `vendor/` - upstream reference repositories

## MVP Tools

- `remember` - store a business memory
- `recall` - retrieve stored memories by query
- `search` - ChatGPT/Claude-friendly search over stored memories
- `fetch` - fetch one stored memory by id

## Run

```bash
pnpm install
pnpm dev:mcp
```

## Package Everything

```bash
pnpm mmo:build
```

## Target Surfaces

- ChatGPT normal chat: install MMO as a custom MCP app/connector in ChatGPT developer mode, then select it from the ChatGPT tools/apps menu.
- ChatGPT company knowledge/deep research: use MMO `search` and `fetch` tools.
- OpenAI API: use the generated MCP tool config in `openai/generated/mcp-tool.json`.
- Claude normal chat: add MMO as a Claude custom connector using the remote MCP endpoint.
- Claude API: use the generated connector config in `anthropic/generated/mcp-connector.json`.
- Claude Skills: package `skills/claude/mmo-business-memory` with `pnpm package:claude-skill`.
