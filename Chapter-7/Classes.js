a = "\n";

//Declaration
class Rectangle {
    //This is a constructor
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    //This is a method in a class
    calculateArea() {
        return this.height * this. width;
    }
}
const rect = new Rectangle(
    height = parseInt(prompt("The height is:")),
    width = parseInt(prompt("The width is:")),
);
console.log(`Area of the rectangle is: ${height} * ${width} =`, rect.calculateArea());
console.log(a);

//Expression with Anonymous Class
const rectangle = class {
    //This is a constructor
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }
    //This is a method in a class
    calcualtePer() {
        return 2 * (this.h + this.w);
    }
}
const rectAngle = new rectangle(
    h = parseInt(prompt("The height is:")),
    w = parseInt(prompt("The width is:")),
);
console.log(`Perimeter of the second rectangle is: 2 * (${h} + ${w}) =`, rectAngle.calcualtePer());
console.log(a);

//Expression with Class Name
const Rect = class Rectangle2 {
    //This is a constructor
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }
    //This is a method in a class
    calculateNewArea() {
        return this.length * this.breadth; 
    }
}
const newRect = new Rect(
    length = parseInt(prompt("The length is:")),
    breadth = parseInt(prompt("The breadth is:")),
)
console.log(`Area of the new rectangle is: ${length} * ${breadth} =`, newRect.calculateNewArea());
console.log(a);

//Regular Function Method
class Regular {
    constructor() {
        this.data = [1,2,3,4,5];
    }
    regularFunc() {
        console.log("Regular Function Method:", this.data);
    }
}
const regular = new Regular();
regular.regularFunc();
console.log(a);

//Generator Function Method
class Gen {
    constructor() {
        this.data = [1,2,3,4,5];
    }
    *gen() {
        for(const item of this.data){
            yield item;
        }
    }
}
const instance = new Gen();
const gen = instance.gen();
console.log("Generator Function Method:", Array.from(gen));
console.log(a);

//Static Fields and Methods
class Calculator {
    static version = "4.2";
    static add(x,y) {
        return x + y;
    }
    static multiply(x,y) {
        return x * y;
    }
}
console.log("Calculator Version is:", Calculator.version);
const sum = Calculator.add(5,3);
console.log("The sum of 5 and 3 is:", sum);
const product = Calculator.multiply(8,5);
console.log("The product of 8 and 5 is:", product);
console.log(a);

//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a certain noise!`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(`${this.name} barks!`);
    }
}
const dog = new Dog("Casper");
dog.speak();
const animal = new Animal("Frog")
animal.speak();
console.log(a)

//Async Function Method
class Async {
    constructor() {
        this.data = [1,2,3,4,5];
    }
    async Async() {
        console.log("Start the async function!");
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Async Function Method Completed!");
        console.log(a);
    }
}
(async() => {
    inst = new Async();
    await inst.Async();
})();


//Async Generator Function Method
class AsyncGen {
    constructor() {
        this.data = [1,2,3,4];
    }
    async *asyncGenerator() {
        for (const element of this.data) {
            await new Promise(solve => setTimeout(solve, 2000));
            yield element;
        }
    }
}
(async() => {
    const example = new AsyncGen();
    const asyncGen = example.asyncGenerator();
    for await (const element of asyncGen){
        
        console.log("Async Generator Function Method Completed!", element);
    }
})();