x = "\n";

//Basic
const add = (a, b) => {
    console.log(`Adding the numbers ${a} and ${b}`);
    return a + b;
};
const result = add(3,5);
console.log("Result of the addition is:", result);
console.log(x);

//No Parameters
const greet = () => {
    console.log("Hello and Welcome!");
}
greet();
console.log(x);

//Single parameter
const square = x => {
    console.log(`The number to be squared is ${x}:`);
    return x * x;
}
const res = square(7);
console.log("Result of the squaring of the numbers is:", res);
console.log(x);

//Multiple Statements
const operateArrow = (a,b) => {
    let sum = a + b;
    let prod = a * b;
    console.log("Sum:", sum);
    console.log("Product:", prod);
    return `Sum = ${sum} AND Product = ${prod}`;
}
const resultArrow = operateArrow(8,5);
console.log("The Final Result is:", resultArrow);
console.log(x);

//Implicit Return(Single Expression)
const doubleArrow = x => {
    console.log("Doubling:", x);
    return x * 2;
}
const resultAr = doubleArrow(5);
console.log("Arrow Function Result is:",resultAr);
console.log(x);

//Using with Array Functions
const num = [1,2,3,4,5];
const sqauredArrow = num.map(n =>{
    console.log("Squaring:", n);
    return n * n;
});
console.log("Result of this method is:",sqauredArrow);