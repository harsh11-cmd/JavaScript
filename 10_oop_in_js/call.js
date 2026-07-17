function setUsername(username){
    this.username=username;
}

function createUser(username,loginCount,isLoggedIn){
    setUsername.call(this,username); // call method is used to call the setUsername function and pass the current object as the first argument. so here a user can access the properties of setUsername function.
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
}
const user1=new createUser("Harsh", 12, true); // new keyword is used to create an object using the constructor function createUser.
console.log(user1); // user1 is an object created using the constructor function createUser.

// call function is used to call a function with a given this value and arguments provided individually. In the above code.