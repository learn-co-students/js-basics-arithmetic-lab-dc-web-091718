/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
let num = 1000000000
let newID = num + oldID
const isAgeValid = function (age){ return Number.isInteger(age) }
let ageIsValid = isAgeValid(currentAge) // we can also do Number.isInteger(currentAge)
const randmonGenerator = function (range){ return Math.random()*range }
let randomNumber = randmonGenerator(20)
let randomInteger = Math.floor(randomNumber)
console.log(randomInteger)
let randomUserID = num + randomInteger
console.log(randomUserID)