let a = 300;

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = 'javascript';

    function two(){
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website); // not access
    two();
}

// one();

if(true){
    const username = "javascript";
    if(username == 'javascript'){
        const website = ' youtube';
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


// +++++++++++++++++++++ Intersing +++++++++++++++++++++

console.log(adddone(5));

function adddone(num){
    return num + 1;
}

// addTwo(5);

const addTwo = function(num){
    return num + 2;
}

addTwo(5);


// start video - https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23
