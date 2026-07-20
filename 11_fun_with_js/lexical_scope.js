// lexical scope means a child function can access variables from its parent function,
// but the parent function cannot access variables from its child function.

function parentFunction() {
    let myVariable = "Hello from parent function!";

    function childFunction() {
        let childVariable = "Hello from child function!";
        console.log(myVariable); // Accessing variable from parent function
    }
    function childFunction2(){
       // console.log(childVariable); // Trying to access variable from child function (will throw an error). A child can not share their variables
        console.log(myVariable); // Accessing variable from parent function
    }
    childFunction(); // Calling the child function
    childFunction2(); // Calling the second child function
}

parentFunction(); // Calling the parent function
