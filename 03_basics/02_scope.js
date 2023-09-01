


// {} -> scope
let a = 300

if(true) {
    let a = 10
    const b = 20
    var c = 30
    console.log(a)
}

console.log(a)



// nested scope

function one() {
    const username = "ayushraina"
    function two() {
        const website = "daaml"
        console.log(username)
    }
    
    two()
}

one()