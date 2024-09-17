//string in js

// let firstName="Anshika"
// let lastName='Baghel'

// //Number datatype in js
// //Number represents integer and floating point numbers
// let num=100
// let num1=96.7
// console.log(num1)
// let x=10
// console.log(x);
// console.log(typeof x)

// //----------------------------------

// //boolean data types

// let learning =true;
// let completed=false;
// console.log(learning)
// console.log(typeof learning)
// console.log(completed)
// console.log(typeof completed)
// let y=20>10
// console.log(typeof y)

// //undefined datatype

// //if a variable is declared but the value is not assigned then the value of that variable will be undefined.
// let a;
// console.log(a);
// console.log(typeof a)
//null datatype

// let num2=null
// console.log(num2)
// console.log(typeof num2)

//null datatype
//in js, null is a special value that represents empty or unknown value
//but here the output is showing  the datatype of the above num2 as object
//it is a known bg in javascript.

//javascript defines tha tnull is equal to undefined.Lrts check it out

console.log(null==undefined)


//reference datatype in js
//object datatype in js

//in js , an object is a collection of properties where each property is defined as a key-value pair.

let person ={
    firstName:'Anshika',
    lastName:'Baghel',
    age:20
};  //an empty object
console.log(person)
console.log(typeof person)

//array datatype

//array datatype
let number=[1,2,3,4,5];
console.log(number)
console.log(typeof number)

//function datatype
//syntax: function function_name(){}

function msg(){
    console.log("Hello, Anshika")
}
msg()

console.log(typeof msg)
let z;
console.log( z)
console.log(typeof z)
z="Anshika Baghel"
console.log(z)
console.log(typeof z)

z=100
console.log(z)
console.log(typeof z)

z=true
console.log(z)
console.log(typeof z)