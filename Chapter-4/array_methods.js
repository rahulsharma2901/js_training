a = "\n";

let prime = [2,3,5,7];
let even = [2,4,6,8];
console.log(prime);
console.log(even);
let joined = prime.concat(even);
console.log(joined);
console.log(a);

let animals = ["Deer", "Cat", "Dog", "Rabbit", "Lion", "Bear"];
console.log(animals);
animals.copyWithin(3, 0);
console.log(animals);
console.log(a);

const alphabets = ["A","B","C"];
console.log(alphabets);
let iterator = alphabets.entries();
for(let entry of iterator){
    console.log(entry);
}
console.log(a);

function checkAdult(age) {
    return age >= 18;
}
const ageArray = [32,34,43,31,12,16,24];
console.log(ageArray);
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
console.log(num);
function isEven(element){
    return element % 2 == 0;
}
let evenNum = num.find(isEven);
console.log(evenNum);
console.log(a);

let ar = [2,4,5,6,8];
console.log(ar);
function isOdd(element){
    return element % 2 !== 0;
}
let odd = ar.findIndex(isOdd);
let odded = ar.entries();
for(let entry of odded){
    console.log(entry);
}
console.log(odd);
console.log(a);

let nums = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
console.log(nums);
let flatten = nums.flat(2);
console.log(flatten);
console.log(a);

let n = [1,2,3,4,5];
console.log(n);
let res = n.flatMap((x) => [x ** 2]);
console.log(res);
console.log(a);

let numb = [1,2,3,4,5];
console.log(numb);
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

let u = [1,2,3,4,5];
console.log(u);
let index = u.indexOf(3);
console.log("The index of 3 is:",index);
console.log(a);

let c = [1,2,3,4,5];
console.log(c);
console.log(Array.isArray(c));
//Same code now but for a string
let text = "Rahul Sharma";
console.log(text);
console.log(Array.isArray(text));
console.log(a);

let msg = ["My", "Name", "Is", "Rahul", "Sharma"];
console.log(msg);
let newMsg = msg.join(" ");
console.log(newMsg);
console.log(a);

let v = [1,2,3,4,5]
console.log(v);
let newV = v.keys();
for(let key of newV){
    console.log(key);
}
console.log(a);

let list = [32,42,53,67,80,91,32,54,45,12,43];
console.log(list);
let newList = list.lastIndexOf(32);
console.log("The last index of the element is:",newList);
console.log(a);

let cities = ["Sydney", "California", "Sacramento", "NYC", "Mexico City"];
console.log(cities);
let len = cities.length;
console.log("The length of the array stated above is:",len);
console.log(a);

let roots = [1,2,3,4,5];
console.log(roots);
function sq(number){
    return number ** 2;
}
let squared = roots.map(sq);
console.log(squared);
console.log(a);

let capitals = Array.of("Delhi", "Jaipur", "Mumbai", "Gandhinagar", "Thiruvananthapuram");
console.log(capitals);
console.log(a);

let teams = ["Liverpool","Man City","Barcelona","Newcastle","Juventus","Chelsea","Arsenal"];
console.log(teams);
let fake = teams.pop();
console.log(fake);
console.log(a);

let players = ["Lukaku", "Haaland", "Salah", "Zlatan", "Under", "Gomez", "Guardiol"];
console.log(players);
players.push("MESSI!");
console.log(players);
console.log(a);

let values = [1,2,3,4,5,6];
console.log(values);
function difference(accumulator, currentValue){
    return accumulator - currentValue;
}
let minus = values.reduce(difference);
console.log("The difference of all the array elements is:",minus);
console.log(a);

let val = [1,2,3,4,5,6];
console.log(val);
function subtraction(final, _notFinal){
    return final - _notFinal;
}
let subt = values.reduceRight(subtraction);
console.log("The difference of the array elements is:", subt);
console.log(a);

let set = [1,2,3,4,5,6];
console.log(set);
let reversedSet = set.reverse();
console.log(reversedSet);
console.log(a);

let legends = ["Arsenal", "Man City", "Liverpool", "Juventus", "Newcastle"];
console.log(legends);
let fakeLegend = legends.shift();
console.log("The fake legend team is:",fakeLegend);
console.log(a);

let counting = [1,2,3,4,5,6];
console.log(counting);
let sliced = counting.slice(1,6);
console.log(sliced);
console.log(a);

function evens(_ele){
    return _ele % 2 === 0;
}
let items = [1,2,3,4,5,6,7,8];
console.log(items);
console.log(items.some(evens));
console.log(a);

let places = ["Brazil", "USA", "UK", "Argentina", "Australia"];
console.log(places);
let sortedPlaces = places.sort();
console.log(sortedPlaces);
console.log(a);

let prime_numbers = [2,3,5,7,11,13,17,19,23,29];
console.log(prime_numbers);
let removedElements = prime_numbers.splice(2,4);
console.log(removedElements);
console.log(prime_numbers);
console.log(a);

let arr = ["January ", new Date];
console.log(arr);
let stringArr = arr.toLocaleString();
console.log(stringArr);
console.log(a);

let arr1 = ["January", " February", " March", " April", " May"];
console.log(arr1);
let stringArr1 = arr1.toString();
console.log(stringArr1);
console.log(a);

let countries = ["India", "USA", "UK", "Japan", "South Korea", "Australia"];
console.log(countries);
countries.unshift("Phillipines", "Argentina", "Cuba", "Brazil")
console.log(countries);
console.log(a);

let languages = ["Spanish", "English", "Hindi", "Japanese", "Korean", "Taiwanese", "Mandarin"];
console.log(languages);
let differentLines = languages.values();
for(let value of differentLines){
    console.log(value);
}