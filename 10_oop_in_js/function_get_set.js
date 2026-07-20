// How to use getter setter with function constructor

function User(name,age){
    this._name=name;
    this._age=age;

    Object.defineProperty(this,'name',{
        get: function(){
            return this._name.toUpperCase();
        },
        set : function(value){
            this._name=value;
        }
    });
    Object.defineProperty(this,'age',{
        get: function(){
            return this._age;
        },
        set: function(value){
            this._age=value;
        }
    })
}
const GetUser = new User('Harsh',20);
console.log(GetUser.name);
console.log(GetUser.age);