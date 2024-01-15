x = "\n"

//Math functions
let absolute = Math.abs(-13);
console.log("The absolute value of -13 is:",absolute);

let ceil = Math.ceil(293.234);
console.log("The ceil value of 293.234 is:", ceil);

let floor = Math.floor(182.263);
console.log("The floor value of 182.263 is:", floor);

let round = Math.round(23.283645);
console.log("The rounded value of 23.283645 is:", round);
console.log(x);

//String Functions
let str = "kwjesfdhbcksnjd"
let length = str.length;
console.log("The length of the string is:",length);

let upperCase = str.toUpperCase();
console.log("THe string in uppercase would look like:", upperCase);

let lowerCase = upperCase.toLowerCase();
console.log("The string in lowercase would look like:", lowerCase);

let index = str.indexOf("kwjesfdh");
console.log("The index of the string is:", index);
console.log(x);

//Array Functions
let arr = [1,2,3,4,5,6];
let len = arr.length;
console.log("The length of the array is:",len);

let push = arr.push(8);
console.log("The length of the new array now becomes:",push);

let pop = arr.pop();
console.log("The popped element of the array is:", pop);

let newArr = ["Oranges", "Apples", "Bananas", "Guavas", "Mangoes"];
let join = newArr.join(", ");
console.log(join);
console.log(x);

//Date Functions
let date = new Date();
console.log("It is currently:",date);

let currentTime = Date.now();
console.log("The current time in milliseconds is:",currentTime);
console.log(x);

//Type Conversion Functions
let strNum = "278345273.64";
let intNum = parseInt(strNum);
console.log("The integer value of '27834527364' is:", intNum);

let floatNum = parseFloat(strNum);
console.log("The float value of '27834527364' is:", floatNum);

let newNum = 2634527634;
let stringNum = String(newNum);
console.log("The string value of the number 2634527634 is:", stringNum);
console.log(x);

//Global Functions
function delayedFunction() {
    console.log("Delayed function has been executed!");

}
setTimeout(delayedFunction, 1000);
console.log("Waiting for delayed function to be executed...");

function repeatedFunction(){
    console.log("Repeated function has been executed!");
}
let interval = setInterval(repeatedFunction, 2000);
console.log("Waiting for function execute...");