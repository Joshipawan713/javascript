// array

const myarr = [0,1,2,3,4,5]

const heros = ['hero1', 'hero2', 'hero3']

const newarr = new Array(1,2,3,4)

// console.log(myarr[0])

// myarr.push(6)
// myarr.push(7)
// myarr.pop() // last value of array is removed

// myarr.unshift(11)
// myarr.shift() // first value of array is removed

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9)) // value not exist then return -1

// const newarrval = myarr.join()

// console.log(typeof myarr)
// console.log(typeof newarrval)


// // slice , splice
console.log("A ", myarr);  // output - A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myarr.slice(1,3)
console.log(myn1) // output - [ 1, 2 ]
console.log("B ", myarr) // output - B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myarr.splice(1,3)
console.log("C ", myarr) // output - C  [ 0, 4, 5 ]
console.log(myn2) // output - [ 1, 2, 3 ]