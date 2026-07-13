//for in loop is used to iterate over the properties of an object. It allows you to loop through the keys of an object without having to use an index or a counter variable. The for in loop is a more concise and readable way to iterate over the properties of an object compared to traditional for loops.
let obj={
    name:"John",
    age:30,
    city:"New York"
}
 for(let key in obj){
    console.log(`${key}`); 
 } // print the keys of the object

 const arr=["apple","banana","cherry"];
 for(let index in arr){
    console.log(`${arr[index]}`); 
 } // printing the values of the array