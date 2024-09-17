//operators in js

//operators in js are symbols that are used to perform operation on operands
//operands are the values or variables

//arithmetic operators
//assignment operators
//comparison operators
//logical operators
//string operators

//arithmetic operators 
//addition  subtraction multiplication division(a/b)  modulus(a%b) exponentiation(2**4 ->2*2*2*2)

//assignment operators are used to assign values to variables(a=b)

//increment or decrement operators are used to increment or decrement the value of variable by 1

//++a ->pre-increment  a++ ->post increment  

// in ++a first the value will increase and then it will be used .
//a++ first  the value will be used and then it will increase.
//--a ->pre-decrement  a-- ->post decrement

//similarly in --a first the value will decrement and then it will be used.
//a-- first the value will be used and then it will decrease.


//comparison operators

//> ,< ,>= ,<= ,== , !=,===, !==
//===   :  (strict equality checks)  (checks the data type) it will check for both value and data type.

// !== : (strict inequality) (flipped value strict equality checks)  // not equal value or not equal type(data type)

//== opeartor just checks the value irrespective of the type  let a=5  b="5" so a==b will return true because value is same.

// logical operators perform logical operations 

// AND (&&)  returns trie only if all are true

//OR (||) returns true if anyone or both the conditions are true.

//LOGICAL NOT (!)  returns the flipped value that is 0->1,1->0 ,true->false, false->true

// javascript string operators.

//'+' operator ->used to concatenate strings.

console.log("Hello"+" Javascript")
let a="Javascript"
a+=" Basics"
console.log(a)

// operator precedence 

//operator precedence in js determine the order in which operators are parsed concerning each other.

let result =2+3*4
console.log(result)//  

// operator associativity


//operator associativity in js defines the order in which operators of the same precendence are evaluated.

// two types of operator associativity : left to right  right to left.

//left to right associativity

let answer=4-2-1  //left->right associativity

//4-2
//2-1
console.log(answer)

//exponentiation operator  
let expo=2**3**2  //right ->left associativity
console.log(expo)