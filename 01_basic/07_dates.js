let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let newdate=new Date(2006,2,11); // In This month is start from 0, so 2 means March
let newdate1=new Date(2006,2,11, 5 ,30); // 5:30 AM 
let newdate2=new Date("2026-03-22"); // YYYY-MM-DD
let newdate3=new Date("01-14-2026"); // MM-DD-YYYY
console.log(newdate.toDateString());
console.log(newdate1.toLocaleString()); // 11/3/2006
console.log(newdate2.toDateString()); // 3/22/2026
console.log(newdate3.toLocaleDateString()); // 1/14/2026



let Timestamp=Date.now();
console.log(Timestamp); 

console.log(newdate1.getTime()); 
console.log(Math.floor(newdate1.getTime()/1000));

let newdate4=new Date(); // Current Date
console.log(newdate4.toLocaleString('default',{
    'Weekday': 'long'
})); // Monday, January 1, 2024