const accountID = 110306
let accountEmail="harsh@example.com"
var accountPassword="12345"
accountCity="Surat"
let accountState;

/*
const is a constant variable, which means its value cannot be changed once it is assigned. It is block-scoped, meaning it is only accessible within the block it is defined in.
let is a variable that can be reassigned, but it is also block-scoped.
var is a variable that can be reassigned and is function-scoped, meaning it is accessible throughout the function it is defined in.
do not use var, use let and const instead.
*/
console.table([accountID, accountEmail, accountPassword, accountCity , accountState]);
