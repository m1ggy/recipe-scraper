import moduleAlias from "module-alias";
import { cwd } from "process";
import * as tsconfig from "../../tsconfig.json";
console.info("Setting up module alias...");

const paths = tsconfig.compilerOptions.paths as Record<string, string[]>;

for (const alias in paths) {
  const aliasPaths = paths[alias];

  if (aliasPaths && aliasPaths.length > 0) {
    const path = alias.replace("/*", "");
    const target = aliasPaths[0].replace("/*", "");

    const newPath = `${cwd()}/build/src/${target}`;
    moduleAlias.addAlias(path, newPath);
    console.log(`Alias added: ${path} -> ${newPath}`);
  }
}

console.log("Aliases added!");
