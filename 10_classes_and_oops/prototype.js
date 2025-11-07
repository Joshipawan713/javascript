// let myName = 'javascript   '

// console.log(myName.length)

let myheroes = ['thor', 'spiderman']

let heroesPower = {
    thor: "hanner",
    spiderman: 'sling',

    getspiderPower: function(){
        console.log(`Spiddy power is ${this.spiderman}`)
    }
}

Object.prototype.all_object = function(){
    console.log(`All Object is presrnt in all objects`)
}

Array.prototype.all_object_one = function(){
    console.log(`All Object hello`)
}

// heroesPower.all_object()
// myheroes.all_object()
// myheroes.all_object_one()
// heroesPower.all_object_one()

// inheritance

const User = {
    name: 'javascript',
    email: 'javascript@gmail.com'
}

const Teacher = {
    makevideo : true
}

const TeacherSupport = {
    isAvailable : false
}

const TASupport = {
    makeassignment : 'JS Assignment',
    fulltime: true,
    __proto__: TeacherSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeacherSupport, Teacher)

let anothername = "JavascriptWithReact          "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True Length is : ${this.trim().length}`)
}

anothername.trueLength()