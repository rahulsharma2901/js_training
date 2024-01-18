a = "\n";

//Global Context
function global(){
    console.log(this);
}
global();
console.log(a);

//Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
    console.log(this);
}
const person = new Person("Sameer", 22);
console.log(a);

//Alone Using of 'this'
console.log('This alone:', this);