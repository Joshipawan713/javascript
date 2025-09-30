const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'Ruby',
    swift:'swift',
    py:'Python'
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map();
map.set('IN', "India");
map.set('USA', "United State of America");
map.set('USSR', "Russia");


// // for in not working through this map

// for (const key in map) {
//     console.log(key);
// }