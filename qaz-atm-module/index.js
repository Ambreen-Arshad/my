#!/usr/bin/env node
import inquirer from "inquirer";
do {
    let balance = 20000; // Dollor
    let pin = 9876;
    let pinAnswer = await inquirer.prompt([
        {
            name: "pinCode",
            message: "enter yuor pinCode ",
            type: "number",
        },
    ]);
    if (pinAnswer.pinCode === pin) {
        console.log("Correct Pin Code!!!");
    }
    else {
        console.log("Incorrect pin number! \n\n please enter the correct code.");
    }
    let operator = await inquirer.prompt([
        {
            name: "option",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    {
        console.log("How much money you want to withdraw ?");
    }
    if (operator.option === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please select one Option",
                type: "number || list",
                choice: [1000, 2000, 5000, 10000],
            },
        ]);
    }
    else {
        console.log("Your current balance is : " + balance);
    }
    if (operator.option === "check balance") {
        console.log(`***Your Balance is : ${balance}***`);
        console.log("**************************************");
    }
    if (operator.option === "fast cash") {
        console.log("How much money you want to withdraw");
    }
    let fast = await inquirer.prompt([
        {
            name: "fast_option",
            message: "how much amount you want to withdraw",
            type: "list",
            choices: [1000, 2000, 5000, 10000],
        },
    ]);
    if (fast.fast_option === 1000) {
        balance -= fast.fast_option;
        console.log(`Your remaining balance is :  ${balance}`);
    }
    if (fast.fast_option === 2000) {
        balance -= fast.fast_option;
        console.log(`Your remaining balance is :  ${balance}`);
    }
    if (fast.fast_option === 5000) {
        balance -= fast.fast_option;
        console.log(`Your remaining balance is :  ${balance}`);
    }
    if (fast.fast_option === 10000) {
        balance -= fast.fast_option;
        console.log(`Your remaining balance is :  ${balance}`);
    }
    else {
        console.log("Thank you!");
    }
} while (true);
