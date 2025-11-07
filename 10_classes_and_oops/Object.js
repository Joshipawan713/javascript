function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printme = function(){
    console.log(`Price is ${this.score}`);
}

const java = new createUser("java", 25);
const python = new createUser("python", 250);

java.printme();
python.printme();