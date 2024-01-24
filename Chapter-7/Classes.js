function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

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
displayOutput(`Area of the rectangle is: ${height} * ${width} =` + JSON.stringify(rect.calculateArea()));
displayOutput(a);

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
displayOutput(`Perimeter of the second rectangle is: 2 * (${h} + ${w}) =` + JSON.stringify(rectAngle.calcualtePer()));
displayOutput(a);

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
displayOutput(`Area of the new rectangle is: ${length} * ${breadth} =` + JSON.stringify(newRect.calculateNewArea()));
displayOutput(a);

//Regular Function Method
class Regular {
    constructor() {
        this.data = [1,2,3,4,5];
    }
    regularFunc() {
        displayOutput("Regular Function Method:" + JSON.stringify(this.data));
    }
}
const regular = new Regular();
regular.regularFunc();
displayOutput(a);

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
displayOutput("Generator Function Method:" + JSON.stringify(Array.from(gen)));
displayOutput(a);

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
displayOutput("Calculator Version is:" + JSON.stringify(Calculator.version));
const sum = Calculator.add(5,3);
displayOutput("The sum of 5 and 3 is:" + JSON.stringify(sum));
const product = Calculator.multiply(8,5);
displayOutput("The product of 8 and 5 is:" + JSON.stringify(product));
displayOutput(a);

//Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        displayOutput(JSON.stringify(`${this.name} makes a certain noise!`));
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        displayOutput(JSON.stringify(`${this.name} barks!`));
    }
}
const dog = new Dog("Casper");
dog.speak();
const animal = new Animal("Frog")
animal.speak();
displayOutput(a)

//Private Class
class Counter {
    constructor() {
        let count = 0;
        //Private variable
        const increment = () => {
            count++;
        }
        //Public method to get count
        this.getCount = () => {
            return count;
        }
        //Public method to increment count
        this.increment = () => {
            increment();
        }
    }
}
const counter = new Counter();
displayOutput(JSON.stringify(counter.getCount()));
counter.increment();
displayOutput(JSON.stringify(counter.getCount()));
counter.increment();
displayOutput(JSON.stringify(counter.getCount()));
displayOutput(a);

//Async Function Method
class Async {
    constructor() {
        this.data = [1,2,3,4,5];
    }
    async Async() {
        displayOutput("Start the async function!");
        await new Promise(resolve => setTimeout(resolve, 2000));
        displayOutput("Async Function Method Completed!");
        displayOutput(a);
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
        
        displayOutput("Async Generator Function Method Completed!", element);
    }
})();
