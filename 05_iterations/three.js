// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val);
// }

// const greeting = "Hello World";

// for (const greet of greeting){
//     if (greet == ' '){
//         break;
//     }
//     console.log(`Each char is ${greet}`);
// }


// maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('USSR', "Russia");

// console.log(map);

for (const [key, value] of map){
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Fire'
}

// for (const [key, value] of myObject){
//     console.log(key, ':-', value);
// }