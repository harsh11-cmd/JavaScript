// Static Properties are the properties that are defined on the class itself, not on the instances of the class. 
// They are shared among all instances of the class and can be accessed using the class name.
class student{
    constructor(name, age, rollno){
        this.name=name;
        this.age=age;
        this.rollno=rollno;
    }
    static displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}`);
    }
}
class teacher extends student{
    constructor(name, age, rollno, subject){
        super(name, age, rollno);
        this.subject=subject;
    }
    displaydetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}, Subject: ${this.subject}`);
    }   
}   
const teacherDetails=new teacher("Harsh",20,10,"Maths");
teacherDetails.displaydetails();
const studentDetails=new student("Harsh",20,10);
studentDetails.displayDetails(); // this will give an error because displayDetails is a static method and can be accessed 
// using the class name. 

// how to use static function in js
// student.displayDetails(); // this is the correct way to call a static method