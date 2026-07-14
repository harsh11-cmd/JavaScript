// reduce() prototype method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// const mynyms = [1, 2, 3, 4, 5];

// const sum=mynyms.reduce(function (accumulator,currentValue){
//     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//         return accumulator+currentValue;
// },0);
// const sum2=mynyms.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// console.log(sum); // output: 15 
// console.log(sum2); // output: 15

// Why output is 15 because reduce() method executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value. The first parameter of the reducer function is the accumulator, 
// which accumulates the callback's return values. The second parameter is the currentValue, 
// which is the current element being processed in the array. The second argument to reduce() (0 in this case) is 
// the initial value of the accumulator.

const shoppingCart = [
    {
        name: "shirt",
        price: 20,
        quantity: 2
    },
    {
        name: "pants",
        price: 30,
        quantity: 1
    },
    {
        name: "shoes",
        price: 50,
        quantity: 1
    }
]

const total=shoppingCart.reduce((acc, item)=>acc+item.price*item.quantity,0);
console.log(total);

