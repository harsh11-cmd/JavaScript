const marvel_heros=["Ironman","Hulk","Thor"];
const dc_heros=["Batman","Superman","Flash"];

// marvel_heros.push(dc_heros); // Push dc_heros array into marvel_heros array
// console.log(marvel_heros);

// const all_heros=marvel_heros.concat(dc_heros); // Cpncat aur combine two arrays
// console.log(all_heros);

// const all_new_heros=[...marvel_heros,...dc_heros]; // Spread operator to combine two arrays
// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[8,9,[10]]];
// console.log(another_array.flat(Infinity)); // flat method to flatten the array

console.log(Array.isArray(marvel_heros)); // Check if marvel_heros is an array or not
console.log(Array.isArray("Hello")); // Check if "Hello" is an array or not
console.log(Array.from("Hello")); // Convert string into array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3)); // Create array from individual values