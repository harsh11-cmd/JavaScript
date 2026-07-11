/* There are 2 types of Data types in Java Script
1. Primitive Data Types 
2. Non-Primitive Data Types

1. Primitive Data Types:[7]
   - Number 
   const value=10;
   - String
   const name="Harsh";
   - Boolean
   Const isLoggedIn=true;
   - Null
   Const Temp=null;
   - Undefined
   Const Email=undefined;
   - Symbol : to make unique identifiers for objects
   const id=Symbol("123");
   const id2=Symbol("123");
    console.log(id===id2) //output: false
   - BigInt
   const bignum=35248494149127n;

2. Non-Primitive Data Types(Refrence):
   - Object
   let myObj={
      name:"Harsh",
      age:22,
      isLoggedIn:true
   }
   - Array
   const arr=[1,2,3,4,5];
   - Function
   function myFunc(){
        console.log("Hello World"); 
    }



How to find the data type of a variable in JavaScript?
console.log(typeof variable) //
                |    |_Variable whose data type we want to find
                Keyword
*/