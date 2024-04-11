#! /usr/bin/env node
import { lutimes } from "fs/promises";
import inquirer from "inquirer";
import { todo } from "node:test";
import { toUSVString } from "util";
// inquirer --------------done
// array ----------------------------- done
// function -------------------------------------------done
// operators --------------------------------------------------------done

let todos : string[] = ['Saim','Sarim','Umar'];
async function createTodo(todos : string[]){
    do{

        let ans = await inquirer.prompt([{
            type : "list",
            message : "select an operation",
            name : "select",
            choices : ['add','update','view','delete'],
        }])
        //console.log(ans);
        todos.forEach(todo=> console.log(todo));
       // function no 1
        if(ans.select === 'add'){
            let addTodo = await inquirer.prompt([{
                type : "input",
                message : "add items in the list",
                name : "todo",
            }]);
            todos.push(addTodo.todo);
            //console.log(todos);
            todos.forEach(todo => console.log(todo));
        }

         // function no 2
    if(ans.select === 'update'){
        let updateTodo = await inquirer.prompt([{
            type : "list",
            message : "update items in the list",
            name : "todo",
            choices : todos.map(item=>item)
        }]);
        let addTodo = await inquirer.prompt([{
            type : "input",
            message : "add items in the list",
            name : "todo",
        }]);
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo,addTodo.todo];
        //console.log(todos);
        todos.forEach(todo => console.log(todo));
    }
    // function no 3
        if(ans.select === 'view'){
       console.log("*** TO DO LIST ***");
       //console.log(todos);
       todos.forEach(todo => console.log(todo));
       console.log("********************************");
        }

    //function no 4
        if(ans.select === 'delete'){
            let deleteTodo = await inquirer.prompt([{
                type : "list",
                message : "update items in the list",
                name : "todo",
                choices : todos.map(item=>item)
            }]);
            let newTodo = todos.filter(val => val !== deleteTodo.todo);
            todos = [...newTodo];
            //console.log(todos);
            todos.forEach(todo => console.log(todo));
        }

    } while(true);

}
createTodo(todos);