//for each loop

const coding=["HTML","CSS","JavaScript","React","Node.js"];
// coding.forEach(function(item){
//     console.log(item);
// }) //this is using a callback function

// coding.forEach((item)=>{
//     console.log(item);
// }) //this is using an arrow function

//object into array using forEach loop

const myCoding=[
    {
        name:"HTML",
        type:"Markup Language"
    },
    {
        name:"CSS",
        type:"Style Sheet Language"
    },
    {
        name:"JavaScript",
        type:"Programming Language"
    }
]
myCoding.forEach((item)=>{
    console.log(`Name : ${item.name} , Type : ${item.type}`);
})