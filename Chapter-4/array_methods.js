a = "\n";

let prime = [2,3,5,7];
let even = [2,4,6,8];
let joined = prime.concat(even);
console.log(joined);
console.log(a);

let animals = ["Deer", "Rabbit", "Lion", "Bear"];
animals.copyWithin(2,0);
console.log(animals);
console.log(a);

const alphabets = ["A","B","C"];
let iterator = alphabets.entries();
for(let entry of iterator){
    console.log(entry);
}
console.log(a);

function checkAdult(age) {
    return age >= 18;
}
const ageArray = [32,34,43,31,12,16,24]
let check = ageArray.every(checkAdult);
console.log(check);
console.log(a);

let fruits = ["Apple", "Mango", "Pineapple"];
console.log(fruits);
fruits.fill("Grapes");
console.log(fruits);
console.log(a);

let array = [1,2,3,4,5,6,7,8];
console.log(array);
function checkEven(number){
    if(number % 2 == 0)
        return true;
    else
        return false;
}
let evened = array.filter(checkEven);
console.log(evened);
console.log(a);

let num = [1,3,4,5,6,7,8];
function isEven(element){
    return element % 2 == 0;
}
let evenNum = num.find(isEven);
console.log(evenNum);
console.log(a);

let ar = [2,4,6,8];
function isOdd(element){
    return element % 2 !== 0
}
let odd = ar.findIndex(isOdd);
console.log(odd);
console.log(a);

let nums = [1,2,[3,4,[5,6,[7,8]]]]
let flatten = nums.flat(2);
console.log(flatten);
console.log(a);

let n = [1,2,3,4,5];
let res = n.flatMap((x) => [x ** 2]);
console.log(res);
console.log(a);

let numb = [1,2,3,4,5];
function square(element) {
    console.log(element * element);
}
numb.forEach(square);
console.log(a);

let newArray = Array.from("abcdef");
console.log(newArray);
console.log(a);

let carBrand = ["Lambo", "Mercedes", "Audi", "Koenigsegg", "RollsRoyce"]
let carCheck = carBrand.includes("Audi");
console.log(carCheck);
console.log(a);