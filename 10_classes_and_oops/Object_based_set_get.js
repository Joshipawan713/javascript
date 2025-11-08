const User = {
    _email : 'newtesting@gmail.com',
    _password : '23addf1',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    },

    get password(){
        return this._password.toUpperCase();
    },

    set password(value){
        this._password = value;
    },
}

const test = Object.create(User);
console.log(test.email);
console.log(test.password);