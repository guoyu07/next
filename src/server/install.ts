import * as clc from "cli-color";
import { join } from "path";
import { writeFileSync } from "fs";
import { safeDump } from "js-yaml";
import { execSync } from 'child_process';
import { prompt } from "inquirer";

async function install() {
    console.log(`
                 _            _     _
     _ __   ___ | |_ __ _  __| | __| |
    | "_ \\ / _ \\| __/ _\` |/ _\` |/ _\` |
    | | | | (_) | || (_| | (_| | (_| |
    |_| |_|\\___/ \\__\\__,_|\\__,_|\\__,_|

    `);
    console.log(clc.blue("Please answer the following questions carefully:"));

    const result = await prompt([
        {
            type: "list",
            message: "Please select which database engine you want use:",
            name: "engine",
            choices: [
                {
                    name: "Postgres",
                    value: "postgres",
                },
                {
                    name: "MySQL",
                    value: "mysql",
                },
                {
                    name: "Sqlite",
                    value: "sqlite",
                },
            ],
            default: 0,
        },
        {
            type: "input",
            message: "Database Name:",
            name: "database",
        },
        {
            type: "input",
            message: "Database Host:",
            name: "databaseHost",
        },
        {
            type: "input",
            message: "Database Port:",
            name: "databasePort",
        },
        {
            type: "input",
            message: "Database Username:",
            name: "databaseUsername",
        },
        {
            type: "input",
            message: "Database Password:",
            name: "databasePassword",
        },
        {
            type: "input",
            message: "Administration Username:",
            name: "username",
        },
        {
            type: "input",
            message: "Administration Password:",
            name: "password",
        },
    ]);

    writeFileSync(join(process.cwd(), "ormconfig.yml"), safeDump({
        default: {
            type: result.engine,
            host: result.databaseHost,
            port: result.databasePort,
            username: result.databaseUsername,
            password: result.databasePassword,
            database: result.database,
            entities: [
                "**/*.entity.js",
            ],
            migrations: [
                "**/*.migration.js",
            ],
            logging: true,
            migrationsRun: false,
            synchronize: true,
        },
    }));
    let wanted = "";
    switch(result.engine) {
        case "mysql":
            wanted = "mysql";
            break;
        case "sqlite":
            wanted = "sqlite3";
            break;
        default:
            wanted = "pg";
            break;
    }

    addPackageForDatabase(wanted);
}

function addPackageForDatabase(engine: string) {

    console.log(clc.blue(`Install package for database engine ${engine}...`));

    execSync(`yarn add ${engine} -W`, {
        cwd: process.cwd(),
        env: process.env,
        stdio: ["ignore", process.stdout, process.stderr],
    });

    console.log(clc.blue(`Installed package ${engine}`));
}

install();
