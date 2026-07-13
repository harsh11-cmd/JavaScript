//for loop

// const array = [1,2,3,4,5];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

//Nested for loop
//Printing multiplication table using nested for loop 
// for(let i=1;i<=10;i++){
//     console.log(`Outer loop: ${i}`);
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Continue and break statement

for(let i=1;i<=10;i++){
    if(i===5){
        continue; // it will skip the iteration when i=5 and continue with the next iteration
    }
    console.log(i);
    if(i===8){
        break; // it will break the loop when i=8
    }
}