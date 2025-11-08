class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        return this._email = value;
    }

    get password(){
        // return this._password.toUpperCase();
        return `${this._password}abjah`
    }

    set password(value){
        this._password = value;
    }
}

const javscript = new User('javascript@gmail.com', 'abc');
console.log(javscript.email);
console.log(javscript.password);