//Basic setTimeout()
console.log("Start");
setTimeout(() => {
    console.log("Printed the word after 4...3...2...1...Yay!");
    console.log();
}, 6000);
/* console.log("End"); */

//Cancel Timeout
function delayed() {
    console.log("Delayed log after 3 seconds");
}
/* console.log("Start"); */
const timeoutID = setTimeout(delayed, 9000);
/* clearTimeout(timeoutID);
console.log("End"); */

//Passing Arguments
function greet(name) {
    console.log(`Hello, ${name}!`);
}
const person = "Shubhanshu";
/* console.log("Start"); */
setTimeout(greet, 1000, person);
/* console.log("End"); */

//Inside a Loop
for(let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(`${i} End`);
    }, i * 1000);
}