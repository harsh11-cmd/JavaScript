//----------------------------------|Conversion|------------------------------------------//

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

//----------------------------------|Operations|------------------------------------------//

let value=10
let negValue=-value //negation
console.log(negValue) //output: -10

console.log("============")
let incrementValue=++value //increment
console.log(incrementValue) //output: 11

console.log("============")
let str1="Hello"
let str2="World"
let str3=str1+" "+str2 //concatenation
console.log(str3) //output: "Hello World"

console.log("============")
console.log("1"+2) //output: "12"
console.log(1+"2") //output: "12"
console.log(1+2+"3") //output: "33"