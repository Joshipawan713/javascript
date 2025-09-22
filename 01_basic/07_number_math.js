// ************   Number   **************** //


const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 223.83454
// console.log(othernumber.toPrecision(3)) // output - 224

const hundered = 10000000
// console.log(hundered.toLocaleString('en-IN'))


// ************* Maths ****************  //

// console.log(Math.abs(-5))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,4,3,6,7,1))
// console.log(Math.max(4,4,3,6,7,1))

console.log(Math.random())
console.log((Math.random()* 10 ) + 1)
console.log(Math.floor(Math.random()* 10 ) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)