import { cpSync, mkdirSync, rmSync } from "node:fs";

const source = "skills/claude/mmo-business-memory";
const target = "dist/skills/claude/mmo-business-memory";

rmSync(target, { force: true, recursive: true });
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });

console.log(`Packaged Claude skill: ${target}`);

