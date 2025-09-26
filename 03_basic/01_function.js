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

// console.log(loginUserMessage('javascript')); // output - javascript just logged in
// console.log(loginUserMessage('')); // output -  just logged in
// console.log(loginUserMessage()); // output -  undefined just logged in


function calculateCartPrice(...num1){ // ...num1 - rest operator
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username:'Javascript',
    price: 200
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user);
handleobject({
    username:'Python',
    price: 400
});

const mynewarr = [200,400,100,600];

function returnSecondValue(getarr){
    return getarr[1];
}

// console.log(returnSecondValue(mynewarr));
console.log(returnSecondValue([200,400,100,600]));
