const user = {
    username: "ayushraina",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this) // -> prints whole object
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this) // -> currently referes to empty 


function chai() {
    let username = "ayush"
    console.log(this.username) // undefined, hence it is working in objects only
}
chai()


// Arrow Function
const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))

// Implicit return
const addThree = (num1, num2) => (num1 + num2) // If parenthesis is used then no need for return, if we dont use then return is required
console.log(addThree(5,6))


const myArray = [2,3,5,7,9]
