// singleton
// Object.create()

// object literals

const mySym = Symbol('key1'); 

const JsUser = {
    name: "Javacsript",
    "full name": "Javascirpt",
    [mySym]: "mykey1", // symbol defined in object
    age: 30,
    location:'Delhi',
    email:'email@gmail.com',
    isLoogedIn: false,
    lastLoggedDays:['Monday', 'Sunday']
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]); // access only this way not access console.log(JsUser.full name)
// console.log(JsUser[mySym]);

JsUser.email = 'email@outlook.com'
// Object.freeze(JsUser);

JsUser.email = 'email@hotmail.com'

// console.log(JsUser);


JsUser.greeting = function(){
    console.log('Hello Js User');
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());