class student{
    constructor(name, age, rollno){
        this.name=name;
        this.age=age;
        this.rollno=rollno;
    }
    displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}`);
    }
}
class teacher extends student{
    constructor(name, age, rollno, subject){
        super(name, age, rollno);
        this.subject=subject;
    }
    displayDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollno}, Subject: ${this.subject}`);
    }
}
const details=new teacher("Harsh",20,10,"Maths");
details.displayDetails();
const details2=new student("Harsh",20,10);
details2.displayDetails();