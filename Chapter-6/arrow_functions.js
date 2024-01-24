function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n";

//Basic
const add = (a, b) => {
    displayOutput(`Adding the numbers ${a} and ${b}`);
    return a + b;
};
const result = add(3,5);
displayOutput("Result of the addition is:" + JSON.stringify(result));
displayOutput();

//No Parameters
const greet = () => {
    displayOutput("Hello and Welcome!");
}
greet();
displayOutput(x);

//Single parameter
const square = x => {
    displayOutput(`The number to be squared is ${x}:`);
    return x * x;
}
const res = square(7);
displayOutput("Result of the squaring of the numbers is:" + JSON.stringify(res));
displayOutput(x);

//Multiple Statements
const operateArrow = (a,b) => {
    let sum = a + b;
    let prod = a * b;
    displayOutput("Sum:" + JSON.stringify(sum));
    displayOutput("Product:" + JSON.stringify(prod));
    return `Sum = ${sum} AND Product = ${prod}`;
}
const resultArrow = operateArrow(8,5);
displayOutput("The Final Result is:" + JSON.stringify(resultArrow));
displayOutput(x);

//Implicit Return(Single Expression)
const doubleArrow = x => {
    displayOutput("Doubling:" + JSON.stringify(x));
    return x * 2;
}
const resultAr = doubleArrow(5);
displayOutput("Arrow Function Result is:" + JSON.stringify(resultAr));
displayOutput(x);

//Using with Array Functions
const num = [1,2,3,4,5];
const sqauredArrow = num.map(n =>{
    displayOutput("Squaring:" + JSON.stringify(n));
    return n * n;
});
displayOutput("Result of this method is:" + JSON.stringify(sqauredArrow));