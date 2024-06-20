
//The tsconfig.json will be created based on the node or bun version. 
//Using the bases from https://github.com/tsconfig/bases

import { writeFile } from "node:fs"

export const createTsConfig = () => {
  const nodeVersion = process.versions.node.substring(0,2)
  const file = JSON.stringify( {
    "extends": `@tsconfig/node${nodeVersion}/tsconfig.json`,
    "compilerOptions" : {
      "outDir": "dist"
    }
  }, null,2)
  writeFile("tsconfig.json",file, (err) => {
    console.log("f",err)
  })
} 