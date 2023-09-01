
// Other way to immediately execute a function is wrap it into a parenthesis (function)(empty) empty one is return call
(
    function ayush() {
        console.log("Ayush Raina")
    }
)();    // semicolon is required here


// Extra Way -> Just replace function by arror function
(
    () => {
        console.log("Ayush Raina 2")
    }
)();

// If Parameters are required
(
    (username) => {
        console.log(`Account has been created for ${username}`)
    }
)("ayushraina767");



