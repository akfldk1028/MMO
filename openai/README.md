# OpenAI Integration

MMO exposes product capabilities through MCP so they can be used by OpenAI clients.

## Targets

- ChatGPT normal chats through a custom MCP app selected from the ChatGPT tools/apps menu.
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
- ChatGPT normal chat does not connect to an arbitrary local server directly. The MMO MCP endpoint must be reachable as a remote MCP server or through a supported tunnel, then configured as a custom app/connector in ChatGPT developer mode.
- After ChatGPT workspace approval, tool definitions are treated as a reviewed snapshot. Breaking tool schema changes require the workspace admin to refresh/review the app.
