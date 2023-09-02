const promiseOne = new Promise(function(resolve,reject){
    // Do async task,DB calls, etc
    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed")
})

// method 2 using arror functions
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2")
        resolve()
    },1000)
}).then(()=>{
    console.log("async 2 complete")
})

// Passing of a data through resolve
const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"ayushraina779", email:"ayushraina@iisc.ac.in"})
    },1000)
})
PromiseThree.then((user)=>{
    console.log(user)
})

// using of reject and completing the promise
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error) {
            resolve({username: "ayushraina767", password: "iisc123"})
        }
        else {
            reject("Something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("Kuch to hua lekin kaam ho gaya")
})

// Async Await
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error) {
            resolve({username: "ayushrainaJS", password: "JS123"})
        }
        else{
            reject("JavaScript went wrong")
        }
    },1000)
})

// async await is way to receive from promises
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    }
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive() 

// basic fetch
async function getAllUsers(){

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  // here await is required we have to wait before it is done
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
}

getAllUsers()


// Doing above thing directly
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}) // Gets printed first before other ones have set timeout