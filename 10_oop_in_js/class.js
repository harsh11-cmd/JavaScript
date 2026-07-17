// class user{
//     constructor(name,password, email) {
//         this.name = name;
//         this.password = password;
//         this.email = email;
//     }
//     encryptPassword(password) {
//         console.log(`Encrypting password for ${this.password}`);
//     }
//     changeUsername(){
//         console.log(`name in upper case is ${this.name.toUpperCase()}`);
//     }
    
// }
// user1=new user("Harsh","1234","harsh@example.com");
// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


//without using class
function user(name,password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
}
user.prototype.encryptPassword=function(password){
    console.log(`Encrypting password for ${this.password}`);
}
user.prototype.changeUsername=function(){
    console.log(`name in upper case is ${this.name.toUpperCase()}`);
}
user1=new user("Harsh","1234","harsh@example.com");
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());