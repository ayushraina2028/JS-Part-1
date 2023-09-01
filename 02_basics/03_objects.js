// Singleton
// Object.create -> later discuss

const mySym = Symbol('key1')

// object literals
const JsUser = {
    name: "Ayush Raina",
    age: 18,
    [mySym]: "myKey1",
    location: "Bengaluru",
    email: "ayushraina@iisc.ac.in" 
}

// Accessing 
console.log(JsUser.email)
console.log(JsUser['email'])

console.log(typeof JsUser.mySym)  // string
console.log(JsUser[mySym]) // In case of symbols

// change
JsUser.email = "ayushraina779@gmail.com"

// freezing changes
//Object.freeze(JsUser)

console.log(JsUser)

// Function
JsUser.greeting = function() {
    console.log("Hello Js User")
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greetingTwo())