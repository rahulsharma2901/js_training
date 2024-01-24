function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

//Basic setTimeout()
displayOutput("Start");
setTimeout(() => {
    displayOutput("Printed the word after 4...3...2...1...Yay!");
    displayOutput();
}, 8000);
/* displayOutput("End"); */

//Cancel Timeout
function delayed() {
    displayOutput("Delayed log after 3 seconds");
}
/* displayOutput("Start"); */
const timeoutID = setTimeout(delayed, 11000);
/* clearTimeout(timeoutID);
displayOutput("End"); */

//Passing Arguments
function greet(name) {
    displayOutput(`Hello, ${name}!`);
}
const person = "Shubhanshu";
/* displayOutput("Start"); */
setTimeout(greet, 15000, person);
/* displayOutput("End"); */

//Inside a Loop
for(let i = 0; i <= 5; i++){
    setTimeout(() => {
        displayOutput(`${i}`);
    }, i * 1000);
}