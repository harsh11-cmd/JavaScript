const user={
    usernamr: "Harsh",
    loginCount: 12,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.usernamr}, Login Count: ${this.loginCount}, Is Logged In: ${this.isLoggedIn}`);
    }
}
user.getUserDetails();

// this keyword in JS is used to refer to the current object. In the above code, we have created an object user with properties username,
//  loginCount and isLoggedIn. We have also created a method getUserDetails which will print the details of the user. The this keyword is
//  used to refer to the current object user.

function userTwo(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

   return this
}
const user1=new userTwo("Harsh", 12, true); // new keyword is used to create an object using the constructor function userTwo.
const user2=new userTwo("Rohit", 10, false);
console.log(user1); // user1 is an object created using the constructor function userTwo. 
                    // The this keyword is used to refer to the current object user1.
console.log(user2); // user2 is an object created using the constructor function userTwo. 
                    // The this keyword is used to refer to the current object user2.
console.log(user1.constructor); //it returns the constructor function userTwo which is used to create the object user1.
// after defining the new keyword it creates a new object {}