const yargs = require('yargs');
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
    .command('init', "initialise a new repository", {}, initRepo)

    .command(
        "add <file>",
        "Add a file to the repository",
        (yargs) => {
            yargs.positional("file", {
                describe: "File to add to the staging area",
                type: "string",
            });
        },
        (argv) => {
            addRepo(argv.file);
        }
    )

    .command(
        "commit <message>",
        "commit the staged file",
        (yargs) => {
            yargs.positional("message", {
                describe: "commit message",
                type: "string",
            });
        },
        (argv) => {
            commitRepo(argv.message);
        }
    )

    .command("push", "push commit to s3", {}, pushRepo)
    .command("pull", "pull command from s3", {}, pullRepo)

    .command(
        "revert <commitID>",
        "revert to a specific commit",
        (yargs) => {
            yargs.positional("commitID", {
                describe: "Commit ID to revert to",
                type: "string",
            });
        },
        (argv) => {
            revertRepo(argv.commitID);
        }

    )

    .demandCommand(1, "You need at least one command")
    .help()
    .parse();