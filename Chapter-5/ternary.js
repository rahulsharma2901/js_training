x = "\n";

//Basic use
let age = 20;
let msg = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"
displayOutput(msg);
displayOutput(x);

//Nested use
let score = parseInt(prompt("The score achieved by a student is:"))
let result = 
    score >= 90
    ? "Grade A"
    : score >= 80
    ? "Grade B"
    : score >= 70
    ? "Grade C"
    : score >= 60
    ? "Grade D"
    : score >= 50
    ? "Grade E"
    : "Grade F"
displayOutput(result);
displayOutput(x);

//With Function
function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
displayOutput("The number is",isEven(32));
displayOutput(x);

//With Assignment
let a = 32
let b = 31
let max = a > b ? a : b;
displayOutput("The greater number among the two is", max);
displayOutput(x)

//For nullish coalescing
let userInput = null
let defaultValue = "Default Value"
let value = userInput !== null && userInput !== undefined ? userInput : defaultValue
displayOutput(value)
displayOutput(x)

//For Boolean logic
let loggedIn = true;
let stat = loggedIn ? "User is currently logged in" : "User is currently logged out"
displayOutput(stat);
displayOutput(x);

//For string concatenation
let isAdmin = true
let message = "Welcome! " + (isAdmin ? "Admin" : "User");
displayOutput(message);