---
name: mmo-business-memory
description: Use MMO MCP memory tools to store, search, and fetch durable business context for customer, product, finance, workflow, and decision-making tasks.
---

# MMO Business Memory

Use this skill when the user asks about MMO business context, company memory, customer facts, product decisions, finance assumptions, operating rules, or prior decisions that may have been stored in the MMO MCP server.

## Workflow

1. Before answering a business-context question, call the MMO MCP `search` or `recall` tool with the user's query.
2. If search returns relevant memory ids, call `fetch` for the most relevant records before using them.
3. When the user states a durable fact, preference, decision, rule, or customer-specific context, call `remember`.
4. Keep memory entries short, factual, and scoped. Do not store secrets, passwords, private keys, or payment credentials.
5. When memory is missing or ambiguous, say so and continue from the current conversation.

## Tool Use

- `remember`: store important business context.
- `recall`: retrieve stored memories by query.
- `search`: return result ids and short snippets for retrieval.
- `fetch`: load a full memory record by id.

## Memory Quality

Prefer storing:

- company facts
- product positioning
- customer preferences
- sales process rules
- finance/report assumptions
- integration decisions
- repeated workflow instructions

Avoid storing:

- one-off chat noise
- secrets or credentials
- unsupported claims
- sensitive personal data unless explicitly required and allowed

