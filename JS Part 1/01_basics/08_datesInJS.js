let myDate = new Date()
console.log(myDate);

// better way
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
console.log(myDate.getMonth() + 1)

//Specific date Declaration
let myCreateDate = new Date(2023, 0, 23) 
console.log(myCreateDate)
console.log(myCreateDate.toString()) // 23 Jan 2023 => Month are in 0 based indexing
console.log(myCreateDate.toLocaleString())

let myNewDate = new Date("01-14-2023")  // Generally followed MM_DD_YYYY
console.log(myNewDate.toString())

// Time Stamps
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/1000)) // seconds till now

