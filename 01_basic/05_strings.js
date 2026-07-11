const name = "Harsh";
const age = 22;

console.log(name + age); //old way of concatenation

console.log(`My name is ${name} and I am ${age} years old.`); //new way of concatenation using template literals

const gameName = new String("Cricket"); //creating a string object using String constructor
console.log(gameName);
console.log(gameName[0]); //accessing the first character of the string object
console.log(gameName.length); //getting the length of the string object
console.log(gameName.__proto__); //getting the prototype of the string object
console.log(gameName.toUpperCase()); //converting the string object to uppercase
console.log(gameName.toLowerCase()); //converting the string object to lowercase
console.log(gameName.charAt(5)); //getting the character at index 5 of the string object
console.log(gameName.indexOf("c")); //getting the index of the first occurrence of "c" in the string object

const newGame=gameName.substring(0,3); //getting the substring from index 0 to 3 of the string object
console.log(newGame); //output: "Cri"

const newGame2=gameName.slice(-7,4); //getting the substring from index -7 to 4 of the string object
console.log(newGame2); //output: "Cri" (negative index counts from the end of the string)

const newGame3="    FF      "
console.log(newGame3.trim()); //removes whitespace from both ends of the string

const Email="harsh71@gmail.com"
console.log(Email.replace("71", "72")); //replaces "71" with "72" in the string
console.log(Email.includes("gmail")); //checks if "gmail" is present in the string, returns true or false
console.log(Email.split("@")); //splits the string into an array of substrings using "@" as the delimiter