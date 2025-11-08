class User {
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const newuser = new User('Python')
// console.log(newuser.createId());


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const newteacher = new Teacher('testteacher', 'testteacher@gmail.com');
newteacher.logme()
console.log(newteacher.createId())