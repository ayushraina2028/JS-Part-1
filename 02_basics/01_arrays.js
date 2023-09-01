const myArr = [0,1,2,3,4,5] // arrays are resizable
console.log(myArr[0])

// shallow copy -> by reference
// deep copy -> by value
// Javascirpt Arrays make shallow copies

// Declaration II
const myHeroes = ['ayush','raina']

// Declaration III
const myNumbers = new Array(7,8,8,9,7,6,3,3,4,5)
console.log(myNumbers[3])

// Array methods
console.log(myArr)
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

// Unshift
myArr.unshift(7)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9)) // false
console.log(myArr.indexOf(3)) // -1 if not in there

const newArr = myArr.join() // adds all elements of array into a string, comma separated
console.log(newArr)

// Slice, Splice
console.log("A ", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ", myArr)

// Splice : Removes part of an array
const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)



