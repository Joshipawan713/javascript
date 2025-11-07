function SetUsername(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    SetUsername.call(this,username)
    this.email = email
    this.password = password
}


const newuser = new createUser("newuser", "newuser@gmail.com", "12345")
console.log(newuser)