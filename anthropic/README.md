# Anthropic Integration

MMO supports Anthropic through two layers:

- Remote MCP connector for tool calls.
- Claude.ai and Claude Desktop custom connectors using the same remote MCP endpoint.
- Claude Skills for repeatable workflows that use MMO tools correctly.

## Current MMO Endpoint

Local development endpoint:

```txt
http://localhost:3030/mcp
```

Production Claude MCP connector usage requires a public HTTPS MCP endpoint.

Local development can use `http://localhost:3030/mcp` for tools that run on the same machine, but Claude web/custom connector distribution requires a reachable remote endpoint and proper auth before production use.

## Skills

MMO-owned Claude skills live under:

```txt
skills/claude/
```

Official Anthropic skill examples are vendored at:

```txt
vendor/anthropic-skills/
```

The skill does not replace MCP. It tells Claude when and how to use the MMO MCP tools.
