a = "\n"

//Implicit binding
const man = {
    firstName: "Ritesh",
    years: 22,
    greet: function(){
        return `Hello, I am ${this.firstName} and I am ${this.years} years old`;
    }
}
console.log(man.greet());
console.log(a);

//Call binding
const person1 = {
    name: "Rahul",
    introduce: function(age) {
        console.log(`Hi, I'm ${this.name} and I'm ${age} years old.`);
    }
}
const person2 = {
    name: "Priyal",
}
person1.introduce.call(person2, 21);
console.log(a);

//Apply binding
function displayInfo(greeting, farewell) {
    console.log(`${greeting}, ${this.naming}!`);
    console.log(`${farewell}, ${this.naming}!`);
}
const person = {
    naming: "Sneha",
}
const greetings = ["Welcome", "Goodbye"];
displayInfo.apply(person, greetings)
console.log(a);

//Bind binding
function calculateTotal(price, tax) {
    const total = price + (price * tax);
    console.log((`Total cost of the laptop in ${this.currency} is: ${total}`));
}
const  product = {
    tech: "Laptop",
    price: 50000,
    currency: "Rupees",
}
const calculateTotalForProduct = calculateTotal.bind(product);
calculateTotalForProduct(product.price, 0.3);