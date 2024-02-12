//Basic Use
const sentence = "Hi, my name is Rahul Sharma";
const prefix = "Hi";
console.log(sentence);
console.log(sentence.startsWith(prefix));
console.log("\n");

//Case-Sensitivity Check
const phrase = "Hi, my name is Rahul Sharma";
const first = "hi";
console.log(phrase);
console.log(phrase.startsWith(first));
console.log("\n");

//Checking for Substring
const sen = "JavaScript is what I am currently studying";
const sub = "Java"
console.log(sen);
console.log(sen.startsWith(sub));
console.log("\n");

//Using template literals
const sent = "My name is Rahul Sharma"
const begin = `Hi! ${sent}`
console.log(begin);
console.log(begin.startsWith("Hi"));
console.log("\n");

//Checking for Multiple Prefixes
const senten = "Hi, my name is Rahul Sharma";
const prefixes = ["Hi", "my", "Rahul"];
prefixes.forEach(phr =>{
    console.log(`${phr}: ${senten.startsWith(phr)}`);
})