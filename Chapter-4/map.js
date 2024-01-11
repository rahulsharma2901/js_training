a = "\n";

const map1 = new Map();
console.log(map1);
console.log(a);

map1.set('employee1', {name: "Jack", age: 26});
map1.set('employee2', {name: "Jonas", age: 25});
map1.set('employee3', {name: "Jonah", age: 32});
map1.set('employee4', {name: "Jon", age: 24});
console.log(map1);
console.log(a);

console.log(map1.get('employee1'));
console.log(a);

console.log(map1.has("employee3"));
console.log(a);

console.log(map1.size);
console.log(a);

console.log(map1);
console.log("Is there a object called address?");
console.log(map1.delete('address'));
console.log(map1.delete('employee4'));
console.log(map1);
console.log(a);

map1.clear();
console.log(map1);