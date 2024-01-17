x = "\n";

//Function Context
const obj = {a: "Custom"};
var a = "Global";
function whatsThis(){
    return this.a;
}
console.log(whatsThis());
obj.whatsThis = whatsThis;
console.log(obj.whatsThis());
console.log(x)

//Global Context
let b = this;
this.msg = "Welcome to my world, Raman";
console.log(window.msg);
console.log(x);

//Class Context
class C {
    instanceField = this;
    static staticField = this;
}
const c = new C();
console.log(c.instanceField === c);
console.log(C.staticField === C);
console.log(x);

//Inside Constructor Function
function Person(){
    this.name = "Shreya";
    console.log(this);
}
let person1 = new Person();
console.log(person1.name);
console.log(x);

//Inside Object Method
const person = {
    name: "Priyanshi",
    age: 22,
    greet(){
            console.log(this);
            console.log("Hello and Welcome" + ", " + this.name);
    }
}
person.greet();
console.log(x);

//Inside Inner Function
const person2 = {
    name1: "Uday",
    age: 21,

    meet(){
        console.log(this);
        console.log(this.age);

        function innerFunc(){
            console.log(this);
            console.log(this.name1);
        }
        innerFunc();
    }
}
person2.meet();
console.log(x);

//Inside Arrow Function
const dude = {
    name: "Neha",
    age: 22,
    sayHi() {
        let hi = () => console.log(this.name + " (" + this.age + ")");
        hi();
    }
}
dude.sayHi();   //This proves that this refers to parent scope object in the Arrow Function
console.log(x);

//Strict Mode
'use Strict';
this.man = "Jayesh";
function message() {
    console.log(this.man);
}
message.call(this);