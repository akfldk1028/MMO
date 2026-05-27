import type { MmoModule } from "@mmo/core";
import type { FastMCP } from "fastmcp";

import { registerMemoryTools } from "./memory.js";

export const registerMmoTools = (server: FastMCP, mmo: MmoModule) => {
  registerMemoryTools(server, mmo);
};

