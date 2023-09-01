// Primitive
// 7 Types (call by value(copy)) -> string,number,boolean,null,undefined,symbol,BigInt

// Reference or Non Primitive
// Array, Objects, Functions

// Int and float both lie in Number Category.

// Symbols used for uniquenes
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

//Arrays
const heroes = ["shaktimaan", "naagraj"]

// Objects
let myObject = {
    name: "ayush",
    age: 19,
}

// Function
const myFunction = function() {
    console.log("hello")
}


// ***************************** Memory ******************************* //

// Stack Memory: used in primitive datatypes (copy)
// Heap Memory: Non Primitive (original reference)


// Primitives
let myName = "AyushRaina"
let anotherName = myName  // copy given
anotherName = "AyushRainaIISc"
console.log(anotherName);
console.log(myName);


// non primitives
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne // By reference
userTwo.email = "ayush@iisc.ac.in"
console.log(userOne.email);
console.log(userTwo.email);

