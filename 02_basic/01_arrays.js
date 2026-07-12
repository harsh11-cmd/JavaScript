//Arrays
//---------------------Declaration-----------------------------
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); 
const fruits1 = new Array("apple", "banana", "orange");
console.log(fruits1[1]); 

//Array Methods
fruits.push("grape"); // Add an element to the end of the array
console.log(fruits); 

fruits.pop(); // Remove the last element from the array
console.log(fruits); 

fruits.unshift("kiwi"); // Add an element to the beginning of the array
console.log(fruits);
fruits.shift(); // Remove the first element from the array
console.log(fruits);

console.log(fruits.includes("banana")); // Check if the array contains a specific element

const newarray=fruits.join()
console.log(fruits);
console.log(newarray);
console.log(typeof newarray); // Convert the array to a string

const newarr1 = new Array(1,2,3,4,5);
console.log(newarr1);

const myarr1=newarr1.slice(0,3); // Slice is only shows a value form given array index
console.log("A ",newarr1);
console.log(myarr1);

const myarr2=newarr1.splice(1,3); // Splice is cut the value from given array index
console.log("B ",newarr1);
console.log(myarr2);