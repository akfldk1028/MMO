# MMO

MMO is a business MCP product built on top of the vendored FastMCP framework.

## One Module Flow

MMO is built as one product module:

```txt
@mmo/core
  -> apps/mmo-mcp
  -> OpenAI MCP config
  -> Anthropic MCP config
  -> Claude Skill package
```

Run the whole module build:

```bash
pnpm mmo:build
```

That command builds the vendored FastMCP framework, type-checks MMO core and MCP server, packages the Claude Skill, and generates OpenAI/Anthropic MCP config files.

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
