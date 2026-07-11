//=================================||Numbers||=================================//
const num1=10;
console.log(num1)

const num2=new Number(20);
console.log(num2);
console.log(num2.toString().length); //converting number object to string and getting the length of the string
console.log(num2.toFixed(2)); //converting number object to string with 2 decimal places

const num3=new Number(123.456);
console.log(num3.toPrecision(3)); //converting number object to string with 3 significant digits

const num4=100000;
console.log(num4.toLocaleString('en-IN')); //converting number to string with locale specific formatting (Indian format in this case) 

//=================================||Maths||=================================//

console.log(Math); //Math is a built-in object that has properties and methods for mathematical constants and functions
console.log(Math.abs(-10)); //converts negative number to positive number
console.log(Math.round(4.6)); //rounds the number to the nearest integer
console.log(Math.floor(4.6)); //rounds the number down to the nearest integer
console.log(Math.ceil(4.6)); //rounds the number up to the nearest integer
console.log(Math.min(1,2,3,4,5)); //returns the minimum value from the given numbers
console.log(Math.max(1,2,3,4,5)); //returns the maximum value from the given numbers

console.log(Math.random()); //returns a random number between 0 and 1
console.log(Math.random()*10); //returns a random number between 0 and 10
console.log(Math.floor(Math.random()*10)+1); //returns a random integer between 1 and 10

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); //returns a random integer between min and max (inclusive)

console.log(Math.PI); //returns the value of PI
console.log(Math.sqrt(16)); //returns the square root of the number
console.log(Math.sin(30)); //returns the sine of the angle in radians
console.log(Math.log2(8)); //returns the base-2 logarithm of the number