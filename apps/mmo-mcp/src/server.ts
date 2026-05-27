import { FastMCP } from "fastmcp";

import { registerMemoryTools } from "./tools/memory.js";

const server = new FastMCP({
  name: "MMO",
  version: "0.1.0",
});

registerMemoryTools(server);

await server.start({
  httpStream: {
    endpoint: "/mcp",
    port: Number(process.env.PORT ?? 3030),
  },
  transportType: "httpStream",
});
