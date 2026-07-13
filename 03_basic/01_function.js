function myname(){
    console.log("My name is Harsh Dabhi");
}
myname();

function add(num1 ,num2){
   let result=num1+num2;
   return result;
    
}
function username(name){
    if(name==="undefined"){
        console.log("Please enter your name");
        return;
    }
     return `Hello ${name}`;
}
console.log(username("Harsh"));

function PriceCalculatorInCart(val1,val2,...num1) //  first 2 arguments are handled separately, "..."Rest operator to take multiple arguments without knowing the number of arguments
{
    return  num1;
}
console.log(PriceCalculatorInCart(100,200,300,400,500));

const user={
    name:"Harsh",
    age:20
}
function getUserDetails(anyobject) // how to use object as a parameter in function 
{
        console.log(`USername is ${anyobject.name} and age is ${anyobject.age}`);
}
getUserDetails(user);

//How to use array in function as a parameter
const myarray=[1,2,3,4,5,6,7,8,9];
function getArrayDetails(anyarray)
{
    return anyarray[2];
}
console.log(getArrayDetails(myarray));

