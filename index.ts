import { execa } from "execa";
import { renderIntro } from "./utils/introduction.js";
import { runCLI } from "./cli/index.js";
import { writeFile } from "fs";
import { createTsConfig } from "./utils/create-ts-config.js";


const start = async () => {
    // getPackageManager()
    renderIntro()
   const mycli =  await runCLI()    
   console.log("app state",mycli)
 
//    const gitIgnoreContent = "dist\n.env\node_modules"
//    writeFile(".gitignore2",gitIgnoreContent , (err) => {
//     console.log(err)
//    }) 
    
    createTsConfig()

}
start()