# Anthropic Integration

MMO supports Anthropic through two layers:

- Remote MCP connector for tool calls.
- Claude Skills for repeatable workflows that use MMO tools correctly.

## Current MMO Endpoint

Local development endpoint:

```txt
http://localhost:3030/mcp
```

Production Claude MCP connector usage requires a public HTTPS MCP endpoint.

## Skills

MMO-owned Claude skills live under:

```txt
skills/claude/
```

Official Anthropic skill examples are vendored at:

```txt
vendor/anthropic-skills/
```

