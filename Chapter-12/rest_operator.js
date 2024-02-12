//Collecting Remaining Operators
function sum(...numbers)  {
    return numbers.reduce((total, sum) => total + sum, 0);
}
console.log("The sum of numbers 1,2,3,4 is:",sum(1,2,3,4))
console.log("\n")

//Rest Parameters with Regular Parameters
function displayInfo(name,age,...hobbies) {
    console.log(`Name: ${name}, age: ${age}`)
    console.log("Hobbies:", hobbies)
}
displayInfo("Ramona", 23, "Reading", "Dancing", "Video Games", "Cooking");
console.log("\n")

//Rest Parameters in Destructuring
const [first, second, ...rest] = [1,2,3,4,5,6,7]
console.log("The first element of the array is:", first)
console.log("The second element is:", second);
console.log("Rest elements are:", rest)
console.log("\n")

//Rest Parameter in Object Destructuring
const person = {names: "Uday", age: 21,  hobbies: ["Reading", "Singing", "Painting", "Gaming"]}
const {names, ...info} = person
console.log("Name:",names);
console.log("Other information:",info);
console.log("\n")