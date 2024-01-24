function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n"

//Math functions
let absolute = Math.abs(-13);
displayOutput("The absolute value of -13 is: " + JSON.stringify(absolute));

let ceil = Math.ceil(293.234);
displayOutput("The ceil value of 293.234 is: " + JSON.stringify(ceil));

let floor = Math.floor(182.263);
displayOutput("The floor value of 182.263 is: " + JSON.stringify(floor));

let round = Math.round(23.283645);
displayOutput("The rounded value of 23.283645 is: " + JSON.stringify(round));
displayOutput(x);

//String Functions
let str = "kwjesfdhbcksnjd"
let length = str.length;
displayOutput("The length of the string is: " + JSON.stringify(length));

let upperCase = str.toUpperCase();
displayOutput("The string in uppercase would look like: " + JSON.stringify(upperCase));

let lowerCase = upperCase.toLowerCase();
displayOutput("The string in lowercase would look like:" + JSON.stringify(lowerCase));

let index = str.indexOf("kwjesfdh");
displayOutput("The index of the string is:" + JSON.stringify(index));
displayOutput(x);

//Array Functions
let arr = [1,2,3,4,5,6];
let len = arr.length;
displayOutput("The length of the array is:" + JSON.stringify(len));

let push = arr.push(8);
displayOutput("The length of the new array now becomes:" + JSON.stringify(push));

let pop = arr.pop();
displayOutput("The popped element of the array is:" + JSON.stringify(pop));

let newArr = ["Oranges", "Apples", "Bananas", "Guavas", "Mangoes"];
let join = newArr.join(", ");
displayOutput(join);
displayOutput(x);

//Date Functions
let date = new Date();
displayOutput("It is currently: " + JSON.stringify(date));

let currentTime = Date.now();
displayOutput("The current time in milliseconds is: " + JSON.stringify(currentTime));
displayOutput(x);

//Type Conversion Functions
let strNum = "278345273.64";
let intNum = parseInt(strNum);
displayOutput("The integer value of '27834527364' is: " + JSON.stringify(intNum));

let floatNum = parseFloat(strNum);
displayOutput("The float value of '27834527364' is: " + JSON.stringify(floatNum));

let newNum = 2634527634;
let stringNum = String(newNum);
displayOutput("The string value of the number 2634527634 is: " + JSON.stringify(stringNum));
displayOutput(x);

//Global Functions
function delayedFunction() {
    displayOutput("Delayed function has been executed!");

}
setTimeout(delayedFunction, 1000);
displayOutput("Waiting for delayed function to be executed...");

function repeatedFunction(){
    displayOutput("Repeated function has been executed!");
}
let interval = setInterval(repeatedFunction, 2000);
displayOutput("Waiting for function execute...");