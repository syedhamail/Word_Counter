#! usr/bin/env node
import inquirer from "inquirer";
let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter your sentence"
});
let words_count = user_ans.words.trim().split("").length;
console.log(`Your sentence has ${words_count} words.`);
