function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Borrowing a method from one object to another in a constructor function
function Person(name){
    this.name = name;
}
Person.prototype.greet = function (){
    return `Hello, my name is ${this.name}`;
}
const person1 = new Person("Rahul!");
const person2 = new Person("Shreya!");
const greeting1 = person1.greet.call(person2);
const greeting2 = person2.greet.call(person1);
displayOutput(greeting1 + "   " + greeting2);
displayOutput(a);

//Borrowing a method from a prototype in an inheritance scenario
function Animal(species) {
    this.species = species;
}
Animal.prototype.getSpecies = function() {
    if (this.species === "Dog"){
        return `This animal is a ${this.breed}`;
    }
    else {
        return `This animal is a ${this.species}`;
    }
};
function Dog(breed){
    Animal.call(this, "Dog")
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
const myDog = new Dog("Labrador");
const dogSpecies = myDog.getSpecies();
displayOutput(dogSpecies);
displayOutput(a);

//Borrowing an object to manipulate the other
const calculator1 = {
    value: 5,
    add: function(x){
        this.value += x;
    }
};
const calculator2 = {
    value: 10,
};
calculator1.add.call(calculator2, 4);
displayOutput("The sum of 10 and 4 is:",calculator2.value);
displayOutput(a);

//Borrowing a method to use with different data structures
const arr = {
    items: [],
    push: function(item) {
        this.items.push(item);
    },
    pop: function() {
        return this.items.pop();
    }
}
const queue = {
    items: [],
    enqueue: function(item) {
        this.items.push(item)
    },
    dequeue: function() {
        return this.items.shift()
    },
}
arr.push.call(queue, 1);
arr.push.call(queue, 2);
displayOutput("The first element should be:",queue.dequeue());
displayOutput("The second element should be:",queue.dequeue());
displayOutput(a);

//Borrowing a method to apply to multiple similar objects
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.displayInfo = function() {
    return `Product name is: ${this.name} and the Price is: ${this.price}`;
}
const laptop = new Product("'Laptop'", 45000);
const phone = new Product("'Smartphone'", 20000);

const phoneInfo = laptop.displayInfo.call(phone);
const laptopInfo = phone.displayInfo.call(laptop);
displayOutput(phoneInfo);
displayOutput(laptopInfo);