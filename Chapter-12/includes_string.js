//Basic Usage
const mainString = "Hello World"
const prefix = "Hello"
console.log(mainString.includes(prefix))
console.log("\n")

//Case-Sensitivity check
const str = "Hello everyone, welcome to coding!"
const search = "hello"
console.log(str.includes(search));
console.log("\n")

//Checking for Substring
const string = "Are you still waiting here?";
const substring = "wait";
console.log(string.includes(substring))
console.log("\n")

//Using Conditional Statements
const words = "'You should go for now as this topic is done'";
const finder = "leave"
console.log(words);
if(words.includes(finder)) {
    console.log("The sentence contains the word 'leave'");
}
else {
    console.log("The sentence does not contain the word 'leave'");
}
console.log("\n");

//Checking for Multiple substrings
const sentence = "There are many programming languages that are being replaced by Python";
const languages = ['Python', 'programming', 'C', 'C++', 'JavaScript', 'being'];
languages.forEach( language => {
    console.log(`${language}: ${sentence.includes(language)}`);
});