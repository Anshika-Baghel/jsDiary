// three types of control flow statements in js
/*
conditional statements
loops
try/catch statements*/
//conditional statements are used to execute different actions based on different conditions


// switch statement 
//it is used to execute a block of code based on the value of an expression.

let value =true
switch(typeof value)
{
    case "number":
        console.log("number")
      break;

    case "string":
        console.log("string")  
      
      default:
        console.log("type not defined")
        break;
}