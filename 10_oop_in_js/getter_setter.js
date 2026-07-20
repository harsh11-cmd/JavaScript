class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this._name.toUpperCase();
    }
    set name(value){
        this._name = value; // underscore is used to avoid infinite loop
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value;
    }
}
const GetUser =new User('Harsh',20);
console.log(GetUser.name);
console.log(GetUser.age);