const user=new Object();
user.name="Harsh";
user.age=20;

console.log(user.name);

const newuser={
    fullname :{
        firstname: "Harsh",
        Lastname: "Dabhi"
    }
};
console.log(newuser.fullname.firstname);

const obj1={
    key1: "value1",
    key2: "value2"
}
const obj2={
    key3: "value3",
    key4: "value4"
}
// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

const obj4={...obj1,...obj2};
console.log(obj4);

console.log(Object.keys(obj4)); //Get all the keys of the object
console.log(Object.values(obj4)); //Get all the values of the object