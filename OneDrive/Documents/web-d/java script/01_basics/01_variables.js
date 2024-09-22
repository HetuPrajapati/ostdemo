const accountId = 122334;
let accountEmail = "het@google.com";
var accountPassword = "12345";
accountCity = "visnagar";
let accountState;

// accountId = 12
console.log(accountId);

// prefer not to use var
// because of issue in block scope and functional scope

accountEmail = "xyz@gmail.com";
accountPassword = "123123";
accountCity = "hello";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState,]);
