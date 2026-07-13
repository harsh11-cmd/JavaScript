//There are two types of scopes in JavaScript: Global Scope and Local(Block) Scope
// Global Scope: Variables declared outside of any function or block have global scope. 
// They can be accessed from anywhere in the code.
// Local(Block) Scope: Variables declared inside a function or block have local scope.

function one(){
    const username="Harsh";
    function two(){
        console.log(username);
    }
    two(); //calling function two() inside function one() to access the variable username
}
one(); // calling function one() to execute the code inside it

if(true){
    const name="Harsh";
    if(name==="Harsh"){
        const surname="Dabhi";
        console.log(name + surname); // accessing the variable name and surname inside the block
    }
}
// So scope means {} and the variables declared inside the block can only be accessed inside that block.
//  we can not access the variable surname outside the block because it has local scope.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++Intresting Example+++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1;
}
console.log(addOne(5)); // calling the function addOne() with argument 5, it will return 6

const addTwo=function(num) // another wway to declare a function using function expression
{
    return num + 2;
}
console.log(addTwo(5)); // calling the function addTwo() with argument 5, it will return 7