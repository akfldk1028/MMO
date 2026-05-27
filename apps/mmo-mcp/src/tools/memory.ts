import { randomUUID } from "node:crypto";
import type { FastMCP } from "fastmcp";
import { z } from "zod";

type MemoryRecord = {
  content: string;
  createdAt: string;
  id: string;
  tags: string[];
  title: string;
};

const memories = new Map<string, MemoryRecord>();

const scoreMemory = (memory: MemoryRecord, query: string) => {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  const haystack = `${memory.title} ${memory.content} ${memory.tags.join(" ")}`.toLowerCase();

  return terms.reduce((score, term) => {
    return haystack.includes(term) ? score + 1 : score;
  }, 0);
};

const findMemories = (query: string, limit: number) => {
  return [...memories.values()]
    .map((memory) => ({ memory, score: scoreMemory(memory, query) }))
    .filter(({ score }) => score > 0 || query.trim() === "")
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ memory }) => memory);
};

export const registerMemoryTools = (server: FastMCP) => {
  server.addTool({
    name: "remember",
    description: "Use this to store durable business context, facts, preferences, decisions, or operating rules for later recall.",
    parameters: z.object({
      content: z.string().min(1).describe("The full memory content to store."),
      tags: z.array(z.string()).default([]).describe("Short tags such as company, customer, finance, product, or workflow."),
      title: z.string().min(1).describe("A short human-readable title for this memory."),
    }),
    execute: async (args: { content: string; tags: string[]; title: string }) => {
      const memory: MemoryRecord = {
        content: args.content,
        createdAt: new Date().toISOString(),
        id: randomUUID(),
        tags: args.tags,
        title: args.title,
      };

      memories.set(memory.id, memory);

      return JSON.stringify({
        id: memory.id,
        status: "stored",
      });
    },
  });

  server.addTool({
    name: "recall",
    description: "Use this to retrieve MMO business memories relevant to a user query.",
    parameters: z.object({
      limit: z.number().int().min(1).max(20).default(5),
      query: z.string().default("").describe("Search query for stored memories."),
    }),
    execute: async (args: { limit: number; query: string }) => {
      return JSON.stringify({
        memories: findMemories(args.query, args.limit),
      });
    },
  });

  server.addTool({
    name: "search",
    description: "Search MMO memory records. Use this for ChatGPT or Claude knowledge retrieval before fetching a specific record.",
    parameters: z.object({
      query: z.string().describe("Search query."),
    }),
    execute: async (args: { query: string }) => {
      const results = findMemories(args.query, 10).map((memory) => ({
        id: memory.id,
        text: memory.content.slice(0, 500),
        title: memory.title,
        url: `memory://${memory.id}`,
      }));

      return JSON.stringify({ results });
    },
  });

  server.addTool({
    name: "fetch",
    description: "Fetch a single MMO memory record by id after using search.",
    parameters: z.object({
      id: z.string().describe("Memory id returned by search."),
    }),
    execute: async (args: { id: string }) => {
      const memory = memories.get(args.id);

      if (!memory) {
        return JSON.stringify({
          error: "Memory not found",
          id: args.id,
        });
      }

      return JSON.stringify(memory);
    },
  });
};
