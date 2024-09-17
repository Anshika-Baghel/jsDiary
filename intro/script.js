alert("Hey there everyone,I am learning one of the powerful programming lanuguage of the world javascript.")
document.write("Hey there! everyone today I am learning one of the most powerful programming language of the world. ")
console.log("I am documenting my javascript journey so welcome to my javascript diary.")
let x=10;
if(x>5)
{
    let y=20;
    console.log(y);
}
//console.log(y)
const a=9
console.log(a);
//a=6


//------------------------------------------
//exmaple of global scope.
var z="Hey there! Anshika this side!!"

function example(){
    console.log(z);
}
// in order to excute the above function we need to call it 
example();
console.log(z)

//--------------------------------------------

//exmaple of function scope

function functionscope(){
    var fs="Hello trying the example for function scope."
    console.log(fs);
}
functionscope();
//console.log(fs)

//---------------------------------------------

//example of block scope

function functionblockscope(){
    if(true)
    {
        let bv="Trying the example for blockscope";
        console.log(bv);
    }
}

functionblockscope();
console.log(bv);

