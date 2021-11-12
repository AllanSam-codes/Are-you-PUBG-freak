const chalk = require('chalk');
var score = 0
var readlineSync = require("readline-sync")

console.log(chalk.blue.magentaBright("Hi! I am Allan sam "))
console.log("  ")
console.log(chalk.black.bgWhite.bold("Did you like to play games ? "))
console.log("  ")
console.log(chalk.black.bgRed.bold("Then test how did you well know in PUBG "))

console.log("  ")
var userName = readlineSync.question(chalk.black.bgYellowBright.visible("what is your name ?  "))
console.log("  ")
console.log(chalk.black.bgWhite.bold("welcome " + userName + " ! "))

console.log("  ")

function play(question, options, answer) {
    console.log(question);
    // var userAnswer = readlineSync.question(question)
    // console.log(options);
    for (var i = 0; i < options.length; i++) {
        console.log(options[i]);
    }
    console.log("         ")
    var userAnswer = readlineSync.question(chalk.white.bgBlack.italic("Choose your option : "));

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green.bold("you are Right"))
        score = score + 1
    } else {
        console.log(chalk.bold.red("you are Wrong"))
        score = score - 1
    }
    console.log(chalk.visible.cyanBright("current score", score))
}


var question = [{
        question: "Who is the pubhliser of this game ? ",
        answer: "a",
        options: ["a)PUBG Corporation", "b)Epic games", "c)Blizzard", "d)Microsoft"],
    },
    {
        question: "when was the game publisher ? ",
        answer: "b",
        options: ["a)Jan 20 2018", "b)Dec 20 2017", "c)June 20 2016", "d)Dec 20 2016"],
    },
    {
        question: "How many maps are there ? ",
        answer: "d",
        options: ["a) 1", "b)2", "c)3", "d)4"],
    },
    {
        question: "What is the maximum level of pubg backpack ? ",
        answer: "d",
        options: ["a) 1", "b)2", "c)3", "d)4"],
    },
    {
        question: "Where you can play night mode ? ",
        answer: "a",
        options: ["a) Erangle", "b)Sanhok", "c)Miramar", "d)Vikendi"],
    },
];


for (var i = 0; i < question.length; i++) {
    var currentquestion = question[i]
    play(currentquestion.question, currentquestion.options, currentquestion.answer)
    console.log("^^^^^^^^^^^^^^^^")
}


// console.log(chalk.black.bgWhite.bold("welcome " + userName + " ! "))
console.log(chalk.magentaBright.visible("Congrats on your great score! you scored = ", score))
console.log(chalk.magentaBright.visible(" you scored = ", score))

console.log("      ")
console.log(chalk.red.bgBlack.underline("Thank you for playing this quiz "))

console.log("*****")