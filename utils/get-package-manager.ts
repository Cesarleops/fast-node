import { existsSync } from "node:fs"
import path from "node:path"
import { BUN_FILE, NPM_FILE, PNPM_FILE, YARN_FILE } from "./consts.js"


const checkPkgFile = (pkg: string) => {
    //get current working directory
    const cwd = process.cwd()
    //check if the default file of a package manager exists.
    return existsSync(path.join(cwd, pkg))
}
export const getPackageManager = () => {

    let pkgManager = ""
    switch(true){
        case checkPkgFile(PNPM_FILE) :{
            pkgManager = "pnpm"
            break

        }
        case checkPkgFile(BUN_FILE) :{
            pkgManager = "bun"
            break

        }
        case checkPkgFile(NPM_FILE) :{
            pkgManager = "npm"
            break

        }
        case checkPkgFile(YARN_FILE) :{
            pkgManager = "yarn"
            break
        }
        default : {
            pkgManager = "npm"
            break
        }
    }
 
    return pkgManager
}