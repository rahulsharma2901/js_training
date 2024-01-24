function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Global Context
function global(){
    displayOutput(this);
}
global();
displayOutput(a);

//Constructor Function
function Person(name, age){
    this.name = name;
    this.age = age;
    displayOutput(JSON.stringify(this));
}
const person = new Person("Sameer", 22);
displayOutput(a);

//Alone Using of 'this'
displayOutput('This alone: ' + this);