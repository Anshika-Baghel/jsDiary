//ternary operator

//syntax: (condition)?(expression 1 is executedif condition is true):(expression 2 is executed if condition is false)
let answer=(2>3)?"yes it is greater":"no it is not greater"
console.log(answer)


// loop statements in js
// loop is used to repeat a block of code 

//1 for loop  for(let i=1;i<5;i++){}
//2 while loop while(condition){}
//3 do-while loop do{}while(condition);



//----------------------------------------------


// break and continue statements in js

//break ->   break statement is used to terminate the loop immediately
for(let i=1;i<5;i++)
{
    if(i==3)
    break;
console.log(i)
}

//continue ->continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration

for(let i=1;i<5;i++)
{
    if(i==3){
        continue;
    }

    console.log(i);
}