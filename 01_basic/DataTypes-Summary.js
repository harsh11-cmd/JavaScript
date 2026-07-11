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

//=================================||Memory Allocation||=================================//
/*
 There are 2 types of memory allocation in JavaScript
1. Stack Memory Allocation
2. Heap Memory Allocation

1. Stack Memory Allocation:
   - Stack memory is used for static memory allocation.
   - It stores primitive data types and function calls.
   - It has a LIFO(Last In First Out) structure.
   - It is faster than heap memory allocation.

   EX: 
   let a="Harsh";
   let b=a; //b is assigned the value of a, so b is also "Harsh"
   let b="Dabhi"; //b is now assigned a new value, so b is now "Dabhi"

   console.log(a) //output: "Harsh"
   console.log(b) //output: "Dabhi"

   //In the above example, a and b are pointing to different memory locations in stack memory, 
   // so when we change the value of b, it does not affect the value of a.

2. Heap Memory Allocation:   
   - Heap memory is used for dynamic memory allocation.
   - It stores non-primitive data types.
   - It has a random access structure.
   - It is slower than stack memory allocation.

   EX:
   let obj1={
      name:"Harsh",
      age:22
   }
   let obj2=obj1;
   obj2.name="Dabhi"; //obj2 is now assigned a new value, so obj2 is now "Dabhi"

   console.log(obj1.name) //output: "Dabhi"
   console.log(obj2.name) //output: "Dabhi"
   //In the above example, obj1 and obj2 are pointing to the same memory 
   // location in heap memory, so when we change the value of obj2, it also changes the value of obj1.
*/