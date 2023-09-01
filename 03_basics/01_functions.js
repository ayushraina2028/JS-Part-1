function sayName() {
    console.log("Ayush Raina")
}

sayName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers(1,2) // if we dont give proper data types then automatic conversions happens

// we can store in result

const result = addTwoNumbers(4,5)
console.log(result) // undefined because no return

function addTwoNumberss(number1, number2) {
    let result = number1 + number2
    return result
}

const result1 = addTwoNumberss(4,5)
console.log(result1) // working fine



// Login user
function loginUserMessage(username="sam") { // default value is sam if nothing is passed

    

    return `${username} just logged in`
}

console.log(loginUserMessage("Ayush"))
console.log(loginUserMessage()) // if no argument passed then undefined is passed until there is default value

// Cart
function calculateCartPrice(...num1) { // ... used to get multiple inputs This is rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400))


const user = {
    username: "hitesh",
    price: 99
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username: "ayushraina",
    price: 999
})

