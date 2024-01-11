const a = parseInt(prompt("Value of a is: "));
const b = parseInt(prompt("Value of b is: "));

let calculator = {
    add: function (a,b) {
        return a + b;
    },
    multiplication: function (a,b) {
        return a * b;
    },
    subtraction: function (a,b) {
        return a - b;
    },
    division: function (a,b) {
        return a / b;
    }
};

let resultAddition = calculator.add(a,b);
console.log(`Sum is: ${a} + ${b} =`, resultAddition);

let resultMultiplication = calculator.multiplication(a,b);
console.log(`Product is: ${a} * ${b} =`, resultMultiplication);

let resultSubtraction = calculator.subtraction(a,b);
console.log(`Difference is: ${a} - ${b} =`, resultSubtraction);

let resultDivision = calculator.division(a,b);
console.log(`Solution is: ${a} / ${b} =`, resultDivision);