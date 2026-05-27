# OpenAI Integration

MMO exposes product capabilities through MCP so they can be used by OpenAI clients.

## Targets

- ChatGPT Apps / Apps SDK
- ChatGPT connectors
- Deep Research compatible `search` and `fetch` tools
- Responses API MCP tools

## Current MMO Endpoint

Local development endpoint:

```txt
http://localhost:3030/mcp
```

## Implementation Notes

- MMO's MCP server lives in `apps/mmo-mcp`.
- OpenAI reference examples are vendored at `vendor/openai-apps-sdk-examples`.
- Keep tool names simple and model-friendly: `search`, `fetch`, `remember`, `recall`.
- Add ChatGPT UI/widget resources only when the product needs an in-ChatGPT visual interface.

