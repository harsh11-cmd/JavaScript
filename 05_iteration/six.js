const mynums = [1, 2, 3, 4, 5];
// const newnums=mynums.filter((num)=>num>2); // filter() method creates a new array with all elements that pass the test implemented by the provided function.
// console.log(newnums); // output: [3, 4, 5]
// //another way to write the above code is
// const newnums2=mynums.filter((num)=>{
//     return num>2;
// })
// console.log(newnums2); // output: [3, 4, 5]

//
const newnums3=[];
mynums.forEach((num)=>{
    if(num>2){
        newnums3.push(num);
    }
})
console.log(newnums3); // output: [3, 4, 5]

//in filter() method use for return a specific value from the array
// and in filter() method if we use callback function without {} then it will return the value automatically but if we use {} 
// then we have to use return statement to return the value from the callback function.
//We also use logical operators(&& , ||) in filter() method to return a specific value from the array.
