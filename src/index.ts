import "./scripts/predev";

import "module-alias/register";

import { fetchUrl } from "@lib/fetcher";

const url = "https://philosokitchen.com/basic-crepes-recipe-history/";

async function getRecipe() {
  const html = await (await fetchUrl(url)).text();
  console.log("HTML:", html);
}

getRecipe();
console.log("Hello World!");
