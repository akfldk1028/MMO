# MMO Integration Surfaces

MMO is intended to work from normal AI chat surfaces and API surfaces through one MCP module.

## Surface Matrix

| Surface | MMO path | Current repo status | Requirement |
| --- | --- | --- | --- |
| ChatGPT normal chat | ChatGPT custom MCP app/connector -> `apps/mmo-mcp` | Config draft generated | Remote MCP endpoint, ChatGPT developer mode, workspace approval |
| ChatGPT company knowledge | `search`/`fetch` tools -> `apps/mmo-mcp` | Tools implemented | Approved connector with read/fetch access |
| ChatGPT deep research | `search`/`fetch` tools -> `apps/mmo-mcp` | Tools implemented | Custom app/connector enabled for read/fetch |
| OpenAI Responses API | `openai/generated/mcp-tool.json` -> `apps/mmo-mcp` | Config generated | Public or reachable MCP URL |
| Claude normal chat | Claude custom connector -> `apps/mmo-mcp` | Config generated | Remote MCP endpoint, connector setup, production auth |
| Claude API | `anthropic/generated/mcp-connector.json` -> `apps/mmo-mcp` | Config generated | Messages/API request includes remote MCP server |
| Claude Skills | `skills/claude/mmo-business-memory` -> MMO tools | Skill source and package script exist | User/organization installs skill where supported |
| Claude Code/Desktop local | Local MCP config or connector -> `apps/mmo-mcp` | Endpoint exists | Runtime-specific MCP setup |

## Important Boundary

Normal ChatGPT and Claude chats do not magically see a local process. They see MMO only after the MCP server is configured as an app/connector for that chat product. For production, use HTTPS, auth, logging, and explicit action controls.

## Canonical Tools

- `search`
- `fetch`
- `remember`
- `recall`

Keep these stable because ChatGPT/Claude app approvals may snapshot tool schemas.

