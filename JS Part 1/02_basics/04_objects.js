const tinderUser = new Object()  // Singleton
// other way is const tinderuser = {} // Non Singleton

tinderUser.Id = "123abc"
tinderUser.name = "AyushRaina"


console.log(tinderUser)

// Nested Objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayush",
            lastname: "Raina"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// to merge
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {obj1,obj2}
const obj5 = {...obj1, ...obj2}
console.log(obj3)
console.log(obj4)
console.log(obj5)

// collecting all keys and values
console.log(tinderUser)
console.log(Object.keys(tinderUser)) // Keys in array format
console.log(Object.values(tinderUser))

// key value pairs
console.log(Object.entries(tinderUser))

// Check presence of some key
console.log(tinderUser.hasOwnProperty('name'))



// Destructuring
const course = {
    coursname: "JS",
    price: "999",
    courseInstructor: "Ayush"
}

// Other way for extraction
const {courseInstructor: teacher} = course
console.log(teacher) // Now easy if we want to print again

// JSON
// {
//     name: "ayush",
//     coursename: "javascript",
//     price: "1000"
// }




