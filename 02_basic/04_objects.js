// const tinderUser = new Object() // singleton objects

const tinderUser = {} // non-singleton objects

tinderUser.id = "1234";
tinderUser.name = "User";
tinderUser.IslooggedIn = false;


// console.log(tinderUser);


const regularUser = {
    email: "user@gmail.com",
    fullname: {
        userfullname:{
            firstname: 'Javascript',
            lastname: 'nodejs'
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1, obj2} // output - { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2); // output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// const obj3 = Object.assign({}, obj1, obj2, obj4); // output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);


console.log(tinderUser) // output - { id: '1234', name: 'User', IslooggedIn: false }

console.log(Object.keys(tinderUser)) // output - [ 'id', 'name', 'IslooggedIn' ]
console.log(Object.values(tinderUser)) // output - [ '1234', 'User', false ]
console.log(Object.entries(tinderUser)) // output - [ [ 'id', '1234' ], [ 'name', 'User' ], [ 'IslooggedIn', false ] ]
console.log(Object.hasOwnProperty('IslooggedIn'))