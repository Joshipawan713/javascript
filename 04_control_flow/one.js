// if statement

// const isUserLoggedIn = true

// if (isUserLoggedIn){
//     console.log('Yes');
// }
// else{
//     console.log("No");
// }


// < -> Less than
// <= -> Less than Equal
// > -> Greater than
// >= -> Greater than Equal
// == -> Equal to and assign
// != -> Not Equal to
// === -> Equal to and check data type
// !== -> Not Equal to and check data type

// const tempature = 41

// if (tempature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// console.log("Execute");


// const score = 200;

// if (score > 100){
//     const power = "fly";
//     console.log(`User Power : ${power}`);
// }

// console.log(`User Power : ${power}`);


// const balance = 1000

// // if(balance > 500) console.log("test"),console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }


const UserLoggedIn = true
const debitcard = true
const loggedFromGoogle = false
const loggedFromEmail = true

if (UserLoggedIn && debitcard && 2==3){
    console.log("Allow to buy course");
}


if (loggedFromEmail || loggedFromGoogle){
    console.log("user logged in");
}