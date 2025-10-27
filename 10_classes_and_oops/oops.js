// const user = {
//     username: 'jaavscript',
//     loginCount:8,
//     signIn:true,

//     getUserDetails: function(){
//         // console.log('Details Exist')
//         // console.log(`Username : ${this.username}`)
//         console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.loginCount)
// console.log(user.signIn)
// console.log(user.getUserDetails())
// console.log(this) // output - {}

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.loginCount = loginCount;

    this.greeting = function(){
        console.log(`Welcome: ${this.username}`);
    }

    return this;
}

const userOne = new User('javascript', 12, true);
const userTwo = new User('python', 11, false);
console.log(userOne.constructor);
// console.log(userTwo);
