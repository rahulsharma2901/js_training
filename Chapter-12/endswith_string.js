//Basic Usage
const phrase = "Hello World!"
const suffix = "!"
console.log(phrase.endsWith(suffix));
console.log("\n");

//Case-Sensitivity Check
const line = "Hello my name is Rahul Sharma";
const word = "SHARMA";
console.log(line.endsWith(word));
console.log("\n");

//Checking for Substring
const sentence = "Hello, my name is Rahul Sharma";
const suf = "arma";
console.log(sentence.endsWith(suf));
console.log("\n");

//Template Literals
const names = "Rahul Sharma";
const sent = `Hello, my name is ${names}`;
console.log(sent.endsWith('Sharma'));
console.log("\n");

//Checking for Multiple Suffixes
const code = "The favorite language of most is Python, Java and JavaScript";
const languages = ["Python", "JavaScript", "Java"];
languages.forEach(language => {
    console.log(`${language}: ${code.endsWith(language)}`);
})
console.log("\n");