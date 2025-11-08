class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A New course was added by ${this.username}`);
    }
}

const newObj = new Teacher('TestUser', 'testuser@gmail.com', '12345');
newObj.addCourse();
newObj.logme();

const newObj1 = new User('TestUser1')
newObj1.logme();

console.log(newObj instanceof Teacher); // true
console.log(newObj instanceof User); // true
// console.log(newObj);