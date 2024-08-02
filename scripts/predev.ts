import moduleAlias from "module-alias";
import { cwd } from "process";
import tsconfig from "../tsconfig.json";
console.info("Setting up module alias...");

const paths = tsconfig.compilerOptions.paths as Record<string, string[]>;

for (const path in paths) {
  const currentPath = paths[path]?.[0];
  const newPath = `${cwd()}/${currentPath}`;
  moduleAlias.addAlias(path, newPath);
  console.log(`Added ${newPath} from ${path}`);
}

console.log("Aliases added!");
