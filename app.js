#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//printing a welcome message:
console.log(chalk.bold.yellowBright("\n \t\t(^___^) WELCOME TO TZ - WORD_COUNTER (^___^)"));
console.log("=".repeat(80));
//taking the input from user by prompting:
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright("\nEnter a Sentence:"),
    }
]);
// now trimming the sentence and splitting it inti words based on spaces:
let words = answers.sentence.trim().split(" ");
// NOTE: trim(): to remove whitespaces , split(): split will split my words before "space" and store in array
//Analizing:
console.log("=".repeat(80));
console.log(chalk.bold.blue("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.green(`\n -Total Words Count: ${chalk.bold.red(words.length)}`));
