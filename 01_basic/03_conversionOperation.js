let score = 100; //number

let scoreAsString = String(score); //convert number to string
console.log(scoreAsString); //output: "100"
console.log(typeof scoreAsString); //output: "string"

console.log("============")
let stringToNumber = Number(scoreAsString); //convert string back to number
console.log(stringToNumber); //output: 100
console.log(typeof stringToNumber); //output: "number"

console.log("============")
let booleanValue = true; //boolean
let booleanToString = String(booleanValue); //convert boolean to string
console.log(booleanToString); //output: "true"
console.log(typeof booleanToString); //output: "string"

console.log("============")
let stringToBoolean = Boolean(booleanToString); //convert string back to boolean
console.log(stringToBoolean); //output: true
console.log(typeof stringToBoolean); //output: "boolean"