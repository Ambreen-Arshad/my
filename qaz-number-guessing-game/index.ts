#! /usr/bin/env node

import inquirer from "inquirer";

console.log("WELCOME to the NUMBER-GUESSING-GAME!");

// Generate Random Numbers by computer
let rendomNumber : number = Math.floor(Math.random()*10 + 1)

// user attempts
let attempts : number = 5 
console.log("You have 5 attempts to guess it!");

// use loop for attempts
for(let index = 1 ; index <= attempts ; index ++){
    // get input from user through inquirer
    const answerUser =await inquirer.prompt([{
        name : "guessedNumber",
        type : "number",
        message : "guess the number between 1 to 10",
    }])
        // use if else to check
if(answerUser.guessedNumber === rendomNumber){
    console.log("congratulation! you`re guessed the correct number!");
    break
}
// show tem attempts
// provide hints

if(answerUser.guessedNumber > rendomNumber){
    console.log("too high! try again.");
}
else{
    console.log("too low ...!! try again. ");
    if(answerUser.guessedNumber!== rendomNumber && index <5){
        console.log(`you have ${attempts-index} attempts left`);
    }
if(attempts === index){
    console.log("game over! you`re run out of attempts.");
    console.log(`the correct number was ${rendomNumber} , better luck next time!`);
}
}
    
}