const accountId = "12345"
let accountEmail = "hello@gmail.com"
var accountPassword = "122345"
accountCity = "Jaipur"
let accountState; // variable declared but not assign value then js assign udedefined
// accountId = 2 // not allowed

accountEmail = "1@gmail.com"
accountPassword = "5255"
accountCity = "City"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])