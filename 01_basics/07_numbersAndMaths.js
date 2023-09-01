const score = 400 // JS automatically took datatype as number
const score2 = new Number(400)  // Here we gave 

console.log(score)
console.log(score2);

console.log(score2.toString());
console.log(typeof score2.toString());

// Floats
console.log(score2.toFixed(2))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // round off (takes digit from start)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // returns string according to Indian values


// *************************** Maths ***************************** //
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))

// Others are -> Math.min, Math.max

// Important => Math.random
console.log(Math.random())  // values between 0,1
console.log(Math.floor(Math.random()*100) + 1) // values between 1,100

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min) // Generates values between min and max




