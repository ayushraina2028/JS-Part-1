const name = "ayush"
const repoCount = 15

// Old way
console.log(name + repoCount);

// Fstrings in JS
console.log(`My name is ${name} and I have made ${repoCount} repositories`);

// declare string
const gameName = new String('ayush-11') // It is dictionary now 0:a,1:y,.........etc

console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('u'))

// Substrings
const newString = gameName.substring(0,4)
console.log(newString);

// Slicing
const anotherString = gameName.slice(-8,3)
console.log(anotherString)

// Removing extra spaces
const thirdString = " ayushraina   "
console.log(thirdString);
console.log(thirdString.trim())  //ltrim and rtrim are present

// replace
const url = "ayushraina%20com"
url.replace('%20','-');
console.log(url.replace('%20','-'));

// splitting
console.log(gameName.split("-"))









