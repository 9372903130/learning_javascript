const accountId = 1265
let accountEmail = "kaif@gmail.com"
var accountPassword = "234"
accountCity = "mumbai"
let accountState;

// accountId = 2 not allowed


accountEmail = "khkl@google.com"
accountPassword ="456"
accountCity = "Bengaluru"

console.log(accountId);
/* prefer not use var because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])