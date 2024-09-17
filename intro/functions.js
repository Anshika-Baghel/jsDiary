// function ->is a block of code that performs the specific task.
//functions in javascript are reusable block of code that can be called from anywhere in your program.

//syntax:  function function_name(){ code to be executed}

function documenting_journey(){
    console.log("Hi! everyone I am Anshika and I am learning javascript and documenting it so welcome to my js diary ")

}
documenting_journey()

//Parameters and arguments in js

//parameters are the values that are declared in the function definition 

//while arguments are the values that are passed to the funtion when it is called.

function greet(firstName,lastName){
    console.log("Hello "+firstName+" "+lastName+" here!")
}

greet("Anshika","Baghel")

// note***** ->we can pass any datatype as the argument and we can pass any no. of arguments
//if we pass less no. of arguments then the rest of the parameters will be undefined

//if we pass more parameters then the additional arguments will be ignored

greet("Anshika")
greet("Kumari","Anshika","Baghel")

//default parameters in js
//default parameters are the ones that have default value
// means if the argumnet is not passed to the function , the default value will be used.

function sum(x,y=0){
    console.log(x+y)
}
sum(45)// 45+undefined hence the output is undefined
sum(30,67);

sum(4)

// return statement in js
// areturn statement is used to return a value when the function is called.
//return statement denotes that the function has ended.
function add(a,b){
    return a+b
}
let value=add(20,78)
console.log("The result is :"+value)

// in js a function can return another function also
function fn1(x){
    function fn2(y){
        return x*y
    }
    return fn2
}
let result=fn1(2)
console.log(result)
console.log(result(2))