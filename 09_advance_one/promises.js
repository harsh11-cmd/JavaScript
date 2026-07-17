//promise takes 2 arguments resolve and reject : resolve is called when the promise is successful and 
// reject is called when the promise fails.

const promiseOne=new Promise(function(resolve,reject){
    // Asynchronous operation
    setTimeout(function(){
        console.log("Promise One resolved");
        resolve(); // Resolving the promise after 1 second
    },1000)
})
promiseOne.then(function(){
    console.log("Promise One then executed"); // This will execute after the promise is resolved 
    console.log("==============================");
})

// how to do without storing in variable

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise Two resolved");
        resolve(); // resolving the promise after 2 seconds
    },2000)
}).then(function(){
    console.log("Promise Two then executed");
        console.log("==============================");
})

//How to do promise with resolve argument

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise Three resolved");
        resolve({
            name: "Harsh",
            age: 22
        }) // We use object in resolve to pass the data to the then function
    },3000)
}).then(function(data){
    console.log(data); //data is a object which is passed from resolve function
    console.log("==============================");
})

// Promise chaining
new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({
                name: "Harsh",
                age: 20
            })
        }
        else{
            reject("Error: Something went wrong");
        }
    },4000)
})
.then(function(data){
    console.log(data);
    return data.name; // returning the name from the first then function to the next then function
})
.then(function(printName){
    console.log(printName); // printing the name which is returned from the previous then function
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Promise is either resolved or rejected");
})
//Explanation: In the above code we have created a promise which will resolve after 4 seconds and return an object with name and age. 
//             The first then function will receive the data from the resolve function and return the name to the next then function. 
//             The next then function will receive the name and print it. If there is any error in the promise, 
//             it will be caught by the catch function and print the error message.
//             The finally function will be executed regardless of whether the promise is resolved or rejected.   

//++++++++++++++++++++++++++++++async await+++++++++++++++++++++++++++++++
const promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({
                name: "Harsh",
                age: 20
            })
        }
        else{
            reject("Error: PromiseTwo went wrong");
        }
    },5000)
}) 
async function getData(){
    try{
        const response=await promiseTwo; // waiting for the promise to resolve
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
getData(); // calling the async function to get the data from the promise

async function getDataTwo(){
    try{
        const response=await fetch("https://api.github.com/users/harsh11-cmd");
        const data=await response.json(); // waiting for the response to be converted to json
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
getDataTwo(); // calling the async function to get the data from the api

// What is async await : async await is a way to write asynchronous code in a synchronous manner. 
// It makes the code easier to read and understand. The async keyword is used to declare a function as asynchronous, 
// and the await keyword is used to wait for a promise to resolve before moving on to the next line of code.

// fetch api is used to make network requests to a server and get the response.
fetch("https://api.github.com/users/harsh11-cmd")
.then(function(response){
    return response.json(); // converting the response to json
})
.then(function(data){
    console.log(data); // printing the data received from the api
})
.catch(function(error){
    console.log(error); // printing the error if any
})
.finally(function(){
    console.log("API call is either successful or failed"); // this will be executed regardless of whether the promise is resolved or rejected
})
