//Array Spread
const array1 = [1,2,3];
const array2 = [...array1,4,5,6];
console.log(array2);
console.log("\n");

//Function Parameters (Rest Parameters)
function sum(...numbers) {
    return numbers.reduce((total, sum) => total + sum, 0);
}
console.log("The sum of numbers 1 through 6 is:",sum(1,2,3,4,5,6));
console.log("\n");

//Object Spread
const person = {name: "Rahul", age: 22};
const updatedPerson = {...person, age:23, city: "Ahmedabad"};
console.log(updatedPerson);
console.log("\n");

//Rest Elements in Array Destructuring
const [first, ...rest] = [1,2,3,4,5,6,7,8,9];;
console.log("The first element of the array is:",first);
console.log("The remaining elements of the array is:",rest);
console.log("\n");

//Concatenate Arrays
const arr1 = [1,2,3,4,5,6];
const arr2 = [7,8,9,10,11,12];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);
console.log("\n");

//Copying Array
const a = [1,2,3,4];
const b = [...a];
console.log(b);
console.log("\n");

//Convert String to Array
const str = "HELLO WORLD";
const arr = [...str];
console.log(arr);