import { createMmoModule } from "@mmo/core";
import { FastMCP } from "fastmcp";

import { registerMmoTools } from "./tools/index.js";

const server = new FastMCP({
  name: "MMO",
  version: "0.1.0",
});

const mmo = createMmoModule();

registerMmoTools(server, mmo);

await server.start({
  httpStream: {
    endpoint: "/mcp",
    port: Number(process.env.PORT ?? 3030),
  },
  transportType: "httpStream",
});
