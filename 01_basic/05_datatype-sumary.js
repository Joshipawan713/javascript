// Primitive 

//  7 type : String, Number, Boolen, null, undefined, Symbol, BigInt


const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outersideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) // false

const bigNumber = 4542124857456525454545n // BigInt

// Reference (Non-primitive)

// Array, Objects, Functions

const hereos = ['hero1', 'hero2', 'hero3'];

let obj = {
    name: "javascript",
    age: 20
}


const myfun = function(){
    console.log('Hello javascript');
}

// console.log(typeof bigNumber)
// console.log(typeof null)
// console.log(typeof score)
// console.log(typeof anotherId)



// ******************************************** //

// Stack (Primitive), Heap (Non-primitive)

// Stack - provide any copy value
// Heap - provide any orginal value

let nameone = "username1"

let nametwo = nameone
nametwo = "username222"

console.log(nameone)
console.log(nametwo)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = 'user@google.com'

console.log(userOne.email)
console.log(userTwo.email)