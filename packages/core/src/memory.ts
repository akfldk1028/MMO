import { randomUUID } from "node:crypto";

export type MemoryRecord = {
  content: string;
  createdAt: string;
  id: string;
  tags: string[];
  title: string;
};

export type CreateMemoryInput = {
  content: string;
  tags: string[];
  title: string;
};

export type SearchResult = {
  id: string;
  text: string;
  title: string;
  url: string;
};

export class MemoryStore {
  #memories = new Map<string, MemoryRecord>();

  create(input: CreateMemoryInput) {
    const memory: MemoryRecord = {
      content: input.content,
      createdAt: new Date().toISOString(),
      id: randomUUID(),
      tags: input.tags,
      title: input.title,
    };

    this.#memories.set(memory.id, memory);

    return memory;
  }

  fetch(id: string) {
    return this.#memories.get(id) ?? null;
  }

  recall(query: string, limit: number) {
    return [...this.#memories.values()]
      .map((memory) => ({ memory, score: this.#score(memory, query) }))
      .filter(({ score }) => score > 0 || query.trim() === "")
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ memory }) => memory);
  }

  search(query: string, limit = 10): SearchResult[] {
    return this.recall(query, limit).map((memory) => ({
      id: memory.id,
      text: memory.content.slice(0, 500),
      title: memory.title,
      url: `memory://${memory.id}`,
    }));
  }

  #score(memory: MemoryRecord, query: string) {
    const terms = query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    const haystack =
      `${memory.title} ${memory.content} ${memory.tags.join(" ")}`.toLowerCase();

    return terms.reduce((score, term) => {
      return haystack.includes(term) ? score + 1 : score;
    }, 0);
  }
}

export type MmoModule = {
  memory: MemoryStore;
};

export const createMmoModule = (): MmoModule => {
  return {
    memory: new MemoryStore(),
  };
};
