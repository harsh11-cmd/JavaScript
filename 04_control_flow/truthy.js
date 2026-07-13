// const userEmail="harsh@example.com";
// if(userEmail){
//     console.log("You have a valid email address");
// }   
// else{
//     console.log("You do not have a valid email address");
// }
//output: You have a valid email address

// const userEmail=""
// if(userEmail){
//     console.log("You have a valid email address");
// }   
// else{
//     console.log("You do not have a valid email address");
// }
// //output: You do not have a valid email address


//Falsy values : false , 0 , -0 ,"",Bigint 0n, null , undefined , NaN
// so in above example if userEmail is empty string then it will be falsy value and the else block will be executed.

//Truthy values : true , 1 , -1 ,"0",Bigint 1n, {}, [], "false" , " " 
//If there are values in string or greater than 0 ot "0" then it will be truthy value and the if block will be executed.

const obj={}
if(Object.keys(obj).length===0) // how to check if an object is empty or not using Object.keys() method which returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
    {
    console.log("Object is empty");
}

//nullish coalescing operator (??) : It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or
//  undefined, and otherwise returns its left-hand side operand. It is useful for providing default values for variables that may be null or 
// undefined.
let val1;
//val1 = 10 ?? 5; 
// val1 = null ?? 5;
// val1 = undefined ?? 5;
// console.log(val1); // output: 5

//Ternary operator : It is a conditional operator that takes three operands. It is used to evaluate a condition and return one of two values based 
// on the result of the condition. The syntax for the ternary operator is: condition ? value_if_true : value_if_false
//Condition ? true : false

const age = 18;
age>=18 ? console.log("You are an adult") : console.log("You are a minor"); // output: You are an adult