const accountID = 144553  // Cannot be change later

// accountID = 2; // Not allowed
console.log(accountID);

let accountEmail = "shreyash@google.com" // Due to the problem of 'var', we use 'let'
accountEmail = "shreyash@gmail.com"

var accountPassword = "12345"  // "var" having a scope problem -- Never Use var --
accountPassword = "54321"

accountCity = "Jaipur"
accountCity = "Aurangabad"

let accountState;  // the value is not defined that's why the value is 'undefined'

console.log(accountEmail);

console.table([accountEmail, accountCity, accountPassword, accountState])
