import { confirm,  select } from "@clack/prompts";
import { Command } from "commander"
import { getPackageManager } from "../utils/get-package-manager.js";

interface CLI {
    appName: string 
}
export const runCLI = async() => {
    const cli :CLI  = {
        appName: ''
    }
    const program = new Command()
    .name("FAST NODE")
    .description("CLI for starting a node-ts project with a db and auth very fast.")
    .argument("[dir]", "Name your app")
    .parse (process.argv)

    const appName = program.args[0]

    if(appName){
        cli.appName = appName
    }
    console.log("your app is named", appName)
    const pkgManager = getPackageManager()
    console.log(pkgManager)

    const projectDb = await select({
        message: "Choose a db provider",
        options: [
            {
                value: "drizzle", label: "DrizzleORM"
            },
            {
                value: "sql", label: "MySQL"
            },
            {
                value: "pg", label: "pg-node"
            }
        ]
    })

    const projectAuth = await select({
        message: "Choose an authentication provider",
        options: [
            {
                value: "lucia", label: "Lucia Auth"
            }
        ]
    })


    const installPackages = await confirm({
        message: "Should we run " + pkgManager + " install ?"
    })
    

    const startGitRepo = await confirm({
        message: "Would you like this project to have a git repository?"
    })
    
  
    const packages = []
    if(projectAuth) packages.push(projectAuth)
    if(projectDb) packages.push(projectDb)

    return {
        appName: cli.appName,
        dbProvider: projectDb,
        appAuth: projectAuth,
        flags: {
            git: startGitRepo,
            install: installPackages,
        }

    }
}