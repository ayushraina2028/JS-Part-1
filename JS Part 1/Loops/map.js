const myNumbers = [1,2,3,4,5,6,7,8,9,10]



// Chaining -> myNumbers.map().map()......etc
myNumbers.map(
    (nums) => {
        return nums + 10
    }
).map (
    (num) => {
        return num + 10
    }
).map (
    (num1) => {
        console.log(num1-5)
    }
)

// Method 2 for chain
const newNums = myNumbers
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNums)