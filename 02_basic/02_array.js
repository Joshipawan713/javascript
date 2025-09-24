const marvel_heros = ['hero1', 'hero2', 'hero3'];
const dc_heros = ['hero1', 'hero2', 'hero3'];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros); // output - [ 'hero1', 'hero2', 'hero3', [ 'hero1', 'hero2', 'hero3' ] ]
// console.log(marvel_heros[3]) // output - [ 'hero1', 'hero2', 'hero3' ]


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros) // output - [ 'hero1', 'hero2', 'hero3', 'hero1', 'hero2', 'hero3' ]


const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros) // output - [ 'hero1', 'hero2', 'hero3', 'hero1', 'hero2', 'hero3' ]

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray('Javascript')); // check is array or not
console.log(Array.from('Javascript')); // convert the array
console.log(Array.from({name:'javascript'}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))