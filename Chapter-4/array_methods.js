function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

let prime = [2,3,5,7];
let even = [2,4,6,8];
displayOutput(prime);
displayOutput(even);
let joined = prime.concat(even);
displayOutput(joined);
displayOutput(a);

let animals = ["Deer", "Cat", "Dog", "Rabbit", "Lion", "Bear"];
displayOutput(animals);
animals.copyWithin(3, 0);
displayOutput(animals);
displayOutput(a);

const alphabets = ["A","B","C"];
displayOutput(alphabets);
let iterator = alphabets.entries();
for(let entry of iterator){
    displayOutput(entry);
}
displayOutput(a);

function checkAdult(age) {
    return age >= 18;
}
const ageArray = [32,34,43,31,12,16,24];
displayOutput(ageArray);
let check = ageArray.every(checkAdult);
displayOutput(check);
displayOutput(a);

let fruits = ["Apple", "Mango", "Pineapple"];
displayOutput(fruits);
fruits.fill("Grapes");
displayOutput(fruits);
displayOutput(a);

let array = [1,2,3,4,5,6,7,8];
displayOutput(array);
function checkEven(number){
    if(number % 2 == 0)
        return true;
    else
        return false;
}
let evened = array.filter(checkEven);
displayOutput(evened);
displayOutput(a);

let num = [1,3,4,5,6,7,8];
displayOutput(num);
function isEven(element){
    return element % 2 == 0;
}
let evenNum = num.find(isEven);
displayOutput(evenNum);
displayOutput(a);

let ar = [2,4,5,6,8];
displayOutput(ar);
function isOdd(element){
    return element % 2 !== 0;
}
let odd = ar.findIndex(isOdd);
let odded = ar.entries();
for(let entry of odded){
    displayOutput(entry);
}
displayOutput(odd);
displayOutput(a);

let nums = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
displayOutput(nums);
let flatten = nums.flat(2);
displayOutput(flatten);
displayOutput(a);

let n = [1,2,3,4,5];
displayOutput(n);
let res = n.flatMap((x) => [x ** 2]);
displayOutput(res);
displayOutput(a);

let numb = [1,2,3,4,5];
displayOutput(numb);
function square(element) {
    displayOutput(element * element);
}
numb.forEach(square);
displayOutput(a);

let newArray = Array.from("abcdef");
displayOutput(newArray);
displayOutput(a);

let carBrand = ["Lambo", "Mercedes", "Audi", "Koenigsegg", "RollsRoyce"]
let carCheck = carBrand.includes("Audi");
displayOutput(carCheck);
displayOutput(a);

let u = [1,2,3,4,5];
displayOutput(u);
let index = u.indexOf(3);
displayOutput("The index of 3 is:",index);
displayOutput(a);

let c = [1,2,3,4,5];
displayOutput(c);
displayOutput(Array.isArray(c));
//Same code now but for a string
let text = "Rahul Sharma";
displayOutput(text);
displayOutput(Array.isArray(text));
displayOutput(a);

let msg = ["My", "Name", "Is", "Rahul", "Sharma"];
displayOutput(msg);
let newMsg = msg.join(" ");
displayOutput(newMsg);
displayOutput(a);

let v = [1,2,3,4,5]
displayOutput(v);
let newV = v.keys();
for(let key of newV){
    displayOutput(key);
}
displayOutput(a);

let list = [32,42,53,67,80,91,32,54,45,12,43];
displayOutput(list);
let newList = list.lastIndexOf(32);
displayOutput("The last index of the element is:",newList);
displayOutput(a);

let cities = ["Sydney", "California", "Sacramento", "NYC", "Mexico City"];
displayOutput(cities);
let len = cities.length;
displayOutput("The length of the array stated above is:",len);
displayOutput(a);

let roots = [1,2,3,4,5];
displayOutput(roots);
function sq(number){
    return number ** 2;
}
let squared = roots.map(sq);
displayOutput(squared);
displayOutput(a);

let capitals = Array.of("Delhi", "Jaipur", "Mumbai", "Gandhinagar", "Thiruvananthapuram");
displayOutput(capitals);
displayOutput(a);

let teams = ["Liverpool","Man City","Barcelona","Newcastle","Juventus","Chelsea","Arsenal"];
displayOutput(teams);
let fake = teams.pop();
displayOutput(fake);
displayOutput(a);

let players = ["Lukaku", "Haaland", "Salah", "Zlatan", "Under", "Gomez", "Guardiol"];
displayOutput(players);
players.push("MESSI!");
displayOutput(players);
displayOutput(a);

let values = [1,2,3,4,5,6];
displayOutput(values);
function difference(accumulator, currentValue){
    return accumulator - currentValue;
}
let minus = values.reduce(difference);
displayOutput("The difference of all the array elements is:",minus);
displayOutput(a);

let val = [1,2,3,4,5,6];
displayOutput(val);
function subtraction(final, _notFinal){
    return final - _notFinal;
}
let subt = values.reduceRight(subtraction);
displayOutput("The difference of the array elements is:", subt);
displayOutput(a);

let set = [1,2,3,4,5,6];
displayOutput(set);
let reversedSet = set.reverse();
displayOutput(reversedSet);
displayOutput(a);

let legends = ["Arsenal", "Man City", "Liverpool", "Juventus", "Newcastle"];
displayOutput(legends);
let fakeLegend = legends.shift();
displayOutput("The fake legend team is:",fakeLegend);
displayOutput(a);

let counting = [1,2,3,4,5,6];
displayOutput(counting);
let sliced = counting.slice(1,6);
displayOutput(sliced);
displayOutput(a);

function evens(_ele){
    return _ele % 2 === 0;
}
let items = [1,2,3,4,5,6,7,8];
displayOutput(items);
displayOutput(items.some(evens));
displayOutput(a);

let places = ["Brazil", "USA", "UK", "Argentina", "Australia"];
displayOutput(places);
let sortedPlaces = places.sort();
displayOutput(sortedPlaces);
displayOutput(a);

let prime_numbers = [2,3,5,7,11,13,17,19,23,29];
displayOutput(prime_numbers);
let removedElements = prime_numbers.splice(2,4);
displayOutput(removedElements);
displayOutput(prime_numbers);
displayOutput(a);

let arr = ["January ", new Date];
displayOutput(arr);
let stringArr = arr.toLocaleString();
displayOutput(stringArr);
displayOutput(a);

let arr1 = ["January", " February", " March", " April", " May"];
displayOutput(arr1);
let stringArr1 = arr1.toString();
displayOutput(stringArr1);
displayOutput(a);

let countries = ["India", "USA", "UK", "Japan", "South Korea", "Australia"];
displayOutput(countries);
countries.unshift("Phillipines", "Argentina", "Cuba", "Brazil")
displayOutput(countries);
displayOutput(a);

let languages = ["Spanish", "English", "Hindi", "Japanese", "Korean", "Taiwanese", "Mandarin"];
displayOutput(languages);
let differentLines = languages.values();
for(let value of differentLines){
    displayOutput(value);
}