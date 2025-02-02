import dotenv from "dotenv";
import yargs from "yargs";
import { PlatformOptions, ReviewArgs } from "./common/types";
import { logger } from "./common/utils/logger";

dotenv.config();

const handleNoCommand = async () => {
  const inquirer = await import("inquirer");
  const questions = [
    {
      type: "list",
      name: "command",
      message: "What do you want to do?",
      choices: [
        { name: "Review the staged files", value: "review" },
        {
          name: "Configure the script (Recommended for first time use)",
          value: "configure",
        },
      ],
    },
  ];

  const answers = await inquirer.default.prompt(questions);
  return answers.command;
};

export const getYargs = async (): Promise<ReviewArgs> => {
  const argv = yargs
    .option("ci", {
      description:
        "Indicates that the script is running on a CI environment. Specifies which platform the script is running on, 'github' or 'gitlab'. Defaults to 'github'.",
      choices: ["github", "gitlab"],
      type: "string",
      coerce: (arg) => {
        return arg || "github";
      },
    })
    .option("setupTarget", {
      description:
        "Specifies for which platform ('github' or 'gitlab') the project should be configured for. Defaults to 'github'.",
      choices: ["github", "gitlab"],
      type: "string",
      default: "github",
    })
    .option("commentPerFile", {
      description:
        "Enables feedback to be made on a file-by-file basis. Only work when the script is running on GitHub.",
      type: "boolean",
      default: false,
    })
    .option("model", {
      description: "The model to use for generating the review.",
      type: "string",
      default: "gpt-4",
    })
    .option("reviewType", {
      description:
        "Type of review to perform. 'full' will review the entire file, 'changed' will review the changed lines only but provide the full file as context if possible. 'costOptimized' will review only the changed lines using the least tokens possible to keep api costs low. Defaults to 'changed'.",
      choices: ["full", "changed", "costOptimized"],
      type: "string",
      default: "changed",
    })
    .option("debug", {
      description: "Enables debug logging.",
      type: "boolean",
      default: false,
    })
    .command("review", "Review the pull request.")
    .command("configure", "Configure the script.")
    .parseSync();

  if (!argv._[0]) {
    argv._[0] = await handleNoCommand();
  }

  if (argv.shouldCommentPerFile && !argv.isCi) {
    throw new Error(
      "The 'commentPerFile' flag requires the 'ci' flag to be set."
    );
  }

  if (argv.isCi === PlatformOptions.GITLAB && argv.shouldCommentPerFile) {
    logger.warn(
      "The 'commentPerFile' flag only works for GitHub, not for GitLab."
    );
  }

  return argv;
};
