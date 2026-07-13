// map() method creates a new array with the results of calling a provided function on every element in the calling array.

const myarr=[1,2,3,4,5,6,7,8,9,10];

let mynums=myarr.map((num)=>num*2); // map() method creates a new array with the results of calling a provided function on every element in the calling array.
console.log(mynums); // output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


//so here we can use multiple map() method with filter() method to create a new array with the results of calling a 
// provided function on every element in the calling array and then filter the elements of the new array based on a condition.
let mynums2=myarr
                .map((num)=>num*10)
                .map((num)=>num+5) // map() method creates a new array with the results of calling a provided function on every element in the calling array.
                .filter((num)=>num>50); // filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(mynums2); 