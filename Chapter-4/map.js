a = "\n";

const map1 = new Map();
displayOutput(map1);
displayOutput(a);

map1.set('employee1', {name: "Jack", age: 26});
map1.set('employee2', {name: "Jonas", age: 25});
map1.set('employee3', {name: "Jonah", age: 32});
map1.set('employee4', {name: "Jon", age: 24});
displayOutput(map1);
displayOutput(a);

displayOutput(map1.get('employee1'));
displayOutput(a);

displayOutput(map1.has("employee3"));
displayOutput(a);

displayOutput(map1.size);
displayOutput(a);

displayOutput(map1);
displayOutput("Is there a object called address?");
displayOutput(map1.delete('address'));
displayOutput(map1.delete('employee4'));
displayOutput(map1);
displayOutput(a);

map1.clear();
displayOutput(map1);
displayOutput(a);

let map2 = new Map();
map2.set('name', 'Jack');
map2.set('age', '28');
for(let [key,value] of map2){
    displayOutput(key, ": ", value);
}
displayOutput(a);

map2.forEach(function(value, key){
    displayOutput(key + ": " + value);
})
displayOutput(a);

for(let key of map2.keys()){
    displayOutput(key);
}
displayOutput(a);

for (let values of map2.values()) {
    displayOutput(values);
}
displayOutput(a);

for(let elem of map2.entries()){
    displayOutput(`${elem[0]}: ${elem[1]}`)
}
displayOutput(a);