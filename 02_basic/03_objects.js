//singleton
// object.create();

//object literal
const mysym=Symbol("key1");
const juser={
    name: "Harsh",
    age: 20,
    location: "Surat",
    [mysym]: "key1",
    email: "harsh@example.com",
    isLoggedIn: true,
    lastLogin: ["Monday", "Tuesday"]
}
console.log(juser.name); //How to access object properties
console.log(juser.lastLogin[1]);

console.log(juser["email"]); //How to access object properties using bracket notation
console.log(juser["lastLogin"][0]);
console.log(juser["age"]);
console.log(juser[mysym]); //How to access symbol properties

// Object.freeze(juser); //freeze the object so that it cannot be modified
// juser.email="harsh@google.com"; //This will not work as the object is frozen
// console.log(juser.email); //This will still print the old email

juser.greeting=function(){
    console.log("Hello User");

}
juser.greetingTwo=function(){
    console.log(`Hello : ${this.name}`);
}
console.log(juser.greeting());
console.log(juser.greetingTwo());