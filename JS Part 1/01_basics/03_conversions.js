let score = "44"

// Both are same ways
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

//but if 
let mark = "32abs"
console.log(typeof Number(mark))  // Number
console.log(Number(mark)) // value is NaN because cant be converted

console.log(Number(undefined)) // NaN
console.log(Number(null))  // 0
console.log(Number(true)) // 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "ayush" => true


// Conversion to String
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)

// **************** Operations ****************** //
let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2**3)
// / -> divide
// % -> remainder

let str1 = "ayush"
let str2 = " raina"
console.log(str1 + str2);

// Priority priority Conversions
console.log(1 + 2) // number 3
console.log("1" + 2) // string 12
console.log(1 + "2") // number 12
console.log("1" + 2 + 3) // string 123
console.log(1 + 2 + "3") // number 33


// Bad Practice
console.log(+true)






