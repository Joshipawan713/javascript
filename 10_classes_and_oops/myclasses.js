// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptpassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const java = new User('Java', 'java@gmail.com', '12345');

// console.log(java.encryptpassword());
// console.log(java.changeUsername());

// // behind the scence

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptpassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const python = new User('Python', 'python@gmail.com', '12345');

console.log(python.encryptpassword());
console.log(python.changeUsername());