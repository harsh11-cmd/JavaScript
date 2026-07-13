const user={
    usrname: "Harsh",
    age: 20,

    Welcome: function(){
        console.log(`${this.usrname} welcome to the world of JavaScript`);
    }
}
user.Welcome(); // calling the function Welcome() inside the object user to access the variable usrname
user.usrname="Dabhi"; // changing the value of the variable usrname inside the object user
user.Welcome(); // calling the function Welcome() inside the object user to access the variable usrname after changing its value
//Why this happens because the function Welcome() is a regular function and it has its own this context which refers to the object user.
//  So when we change the value of the variable usrname inside the object user, 
// it will not affect the value of the variable usrname inside the function Welcome().

//+++++++++++++++++++++++++++++++++++++++++++++++++++++Arrow Function+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Why Arrow functions needed because they do not have their own this context, they inherit the this context from the parent scope.

const addTwo =(num)=>{
    return num + 2;
}
console.log(addTwo(5)); // calling the function addTwo() with argument 5, it will return 7
const addThree = num => num + 3; // another way to declare a function using arrow function
console.log(addThree(5)); // calling the function addThree() with argument 5, it will return 8
