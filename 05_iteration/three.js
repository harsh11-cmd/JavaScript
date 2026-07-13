//for of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to loop through the values of
//  an iterable object without having to use an index or a counter variable. The for of loop is a more concise and readable way to iterate over iterable objects compared to traditional for loops.

// let arr=[1,2,3,4,5];
// for(let value of arr){
//     console.log(value); // output: 1 2 3 4 5
// } // here value is a variable that takes the value of each element in the array arr during each iteration of the loop. The loop will continue until all elements in the array have been iterated over.

// const str="Hello World";
// for(let char of str){
//     console.log(char); // output: H e l l o   W o r l d
// } // here char is a variable that takes the value of each character in the string str during each iteration of the loop. The loop will continue until all characters in the string have been iterated over.

//Map
// const map=new Map();
// map.set("name","John");
// map.set("age",30);
// map.set("city","New York");

for(let [key,value] of map){
    console.log(`${key}: ${value}`); // output: name: John age: 30 city: New York
} // here key and value are variables that take the key and value of each entry in the map during each iteration of the loop. The loop will continue until all entries in the map have been iterated over.
// this is for of use only arraay and map not for object because object is not iterable