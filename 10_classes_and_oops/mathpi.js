// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

const javascript = {
    name : 'reactjs',
    version: '22',
    isAvailable : true,

    logme: function(){
        console.log(`Code is not working`);
    }
}

console.log(Object.getOwnPropertyDescriptor(javascript, "name"));

Object.defineProperty(javascript, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(javascript, "name"));

for (let [key, value] of Object.entries(javascript)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}