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