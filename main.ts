#!/usr/bin/env node

import inquirer from "inquirer";

const anwsers: {
    sentence: string
} = await inquirer.prompt ([
    {
                name: "sentence",
                type : "input",
                message: "Enter your sentence to count the words:"

    }
])
const words= anwsers.sentence.trim().split(" ")

// print the array of words to the console.

console. log (words)

// print the word count of the sentences to the console

console.log(`your sentence word count is ${words.length}`)





