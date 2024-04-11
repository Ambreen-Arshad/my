#! usr/bin/env node
import inquirer from "inquirer";
do{ let c_value :{ [key : string] :number} ={
    PKR : 278.40,
    UAE : 3.67,
    USD : 1,
    INR :83.37,
    EUR :0.93,
    Riyal :3.75,
    Qatari_Riyal : 3.64,
}

let ans = await inquirer.prompt([{
    type : "list",
    name : "from",
    message :"Converting from",
    choices : ['PKR','UAE','USD','INR','EUR','Riyal','Qatari_Riyal'] 
},
{
    type : "list",
    name : "to",
    message :"Converting to",
    choices : ['PKR','UAE','USD','INR','EUR','Riyal','Qatari_Riyal'] 
},
{
    type : "number",
    name : "amount",
    message :"Your amount to convert",
    choices : ['PKR','UAE','USD','INR','EUR','Riyal','Qatari_Riyal'] 
},
])
console.log(c_value[ans.to]/c_value[ans.from]*ans.amount);


} while (true);
