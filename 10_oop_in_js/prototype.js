//Inheritance in JavaScript using prototype

const user={
    name: "Harsh",
    email:"harsh@example.com"
}
const contactDetails={
    phone: "1234567890",
    address: "123, Main Street"
}
user.__proto__= contactDetails; // __proto__ is used to set the prototype of an object. so here a user can access the properties of contactDetails
console.log(user.name); // Harsh
console.log(user.phone); // 1234567890
console.log(user.address); // 123, Main Street
 //Modern syntax
 Object.setPrototypeOf(user, contactDetails); // Object.setPrototypeOf() is used to set the prototype of an object. 
                                            // so here a user can access the properties of contactDetails



