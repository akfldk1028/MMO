# MMO

MMO is a business MCP product built on top of the vendored FastMCP framework.

## Structure

- `fastmcp/` - vendored FastMCP framework source
- `apps/mmo-mcp/` - MMO MCP server product

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

