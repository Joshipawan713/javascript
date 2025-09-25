function sayMyName(){
    console.log('J');
    console.log('A');
    console.log('V');
    console.log('A');
    console.log('S');
    console.log('C');
    console.log('R');
    console.log('I');
    console.log('P');
    console.log('T');
}

// // function reference - sayMyName
// // function execution - sayMyName()

// sayMyName();


// function addTwoNumber(first,second){ // parameters
//     console.log(first + second);
// }

function addTwoNumber(first,second){ // parameters
    // let result = first + second;
    // return result;
    return first + second;
}

const result = addTwoNumber(3,3); // call the function - say arguments
// console.log("Result: ", result);



function loginUserMessage(username = 'Dafult'){
    if(username === undefined){
        console.log('Please enter the username');
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage('javascript')); // output - javascript just logged in
// console.log(loginUserMessage('')); // output -  just logged in
// console.log(loginUserMessage()); // output -  undefined just logged in


// last vide - https://www.youtube.com/watch?v=Bn56WahG_t0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=19
