function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n";

//Function Context
const obj = {a: "Custom"};
var a = "Global";
function whatsThis(){
    return this.a;
}
displayOutput(whatsThis());
obj.whatsThis = whatsThis;
displayOutput(obj.whatsThis());
displayOutput(x)

//Global Context
let b = this;
this.msg = "Welcome to my world, Raman";
displayOutput(window.msg);
displayOutput(x);

//Class Context
class C {
    instanceField = this;
    static staticField = this;
}
const c = new C();
displayOutput(c.instanceField === c);
displayOutput(C.staticField === C);
displayOutput(x);

//Inside Constructor Function
function Person(){
    this.name = "Shreya";
    displayOutput(this);
}
let person1 = new Person();
displayOutput(person1.name);
displayOutput(x);

//Inside Object Method
const person = {
    name: "Priyanshi",
    age: 22,
    greet(){
            displayOutput(JSON.stringify(this));
            displayOutput("Hello and Welcome" + ", " + this.name);
    }
}
person.greet();


//Inside Inner Function
const person2 = {
    name1: "Uday",
    age: 21,

    meet(){
        displayOutput(JSON.stringify(this));
        displayOutput("Uday's age is: " + this.age);

        function innerFunc(){
            displayOutput(this);
            displayOutput(JSON.stringify(this.name1));
        }
        innerFunc();
    }
}
person2.meet();
displayOutput(x);

//Inside Arrow Function
const dude = {
    name: "Neha",
    age: 22,
    sayHi() {
        let hi = () => displayOutput(this.name + " (" + this.age + ")");
        hi();
    }
}
dude.sayHi();   //This proves that this refers to parent scope object in the Arrow Function
displayOutput(x);

//Strict Mode
'use Strict';
this.man = "Jayesh";
function message() {
    displayOutput("The name of the person is: " + this.man);
}
message.call(this);