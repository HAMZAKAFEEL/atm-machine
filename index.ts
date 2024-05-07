import inquirer from "inquirer";

//initialize user balance and pin code;
let mybalance = 5000;
let mypin = 22334;
//print welcome message;
console.log("WELCOME TO MY  ATM-MACHINE....!");

let pinnumber = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "ENTER YOUR PIN CODE: ",

  }

])
if(pinnumber.pin ===mypin){
    console.log("pin is correct, login successfully");
    //console.log (`current account balance is ${mybalance}`);

    let operationans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operator",
            choices: ["withdraw Amount" ,"Check balance"],



 
        }
    ])

    if(operationans .operation ==="withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "ENTER THE AMOUNT TO WITHDRAW: ",
            
            }
        ])
        if(amountAns.amount > mybalance){
            console.log("Insufficient balance");
        }
        else{
            mybalance-=amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully!`);
            console.log(`your remaining balance is: ${mybalance}`);
            
        }
    }
    else if (operationans.operation === "check balance"){
       console.log(`your account balance is: ${mybalance}`);
    }
}
else{
    console.log("pin is incorrect, please try again..!");
}

