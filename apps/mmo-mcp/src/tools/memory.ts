import type { MmoModule } from "@mmo/core";
import type { FastMCP } from "fastmcp";
import { z } from "zod";

export const registerMemoryTools = (server: FastMCP, mmo: MmoModule) => {
  server.addTool({
    name: "remember",
    description: "Use this to store durable business context, facts, preferences, decisions, or operating rules for later recall.",
    parameters: z.object({
      content: z.string().min(1).describe("The full memory content to store."),
      tags: z.array(z.string()).default([]).describe("Short tags such as company, customer, finance, product, or workflow."),
      title: z.string().min(1).describe("A short human-readable title for this memory."),
    }),
    execute: async (args: { content: string; tags: string[]; title: string }) => {
      const memory = mmo.memory.create(args);

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
        memories: mmo.memory.recall(args.query, args.limit),
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
      return JSON.stringify({
        results: mmo.memory.search(args.query),
      });
    },
  });

  server.addTool({
    name: "fetch",
    description: "Fetch a single MMO memory record by id after using search.",
    parameters: z.object({
      id: z.string().describe("Memory id returned by search."),
    }),
    execute: async (args: { id: string }) => {
      const memory = mmo.memory.fetch(args.id);

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
