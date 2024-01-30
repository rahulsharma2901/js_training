function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

const map1 = new Map();

displayOutput(JSON.stringify("The empty map is: " + map1));

map1.set('employee1', {name: "Jack", age: 26});
map1.set('employee2', {name: "Jonas", age: 25});
map1.set('employee3', {name: "Jonah", age: 32});
map1.set('employee4', {name: "Jon", age: 24});
displayOutput("Map entries:");
map1.forEach((value, key) => {
    displayOutput(`${key}: ${JSON.stringify(value)}`);
});

displayOutput(JSON.stringify(map1.get('employee1')));
displayOutput(a);

displayOutput(JSON.stringify("Does map2 have key named as employee3? " + map1.has("employee3")));
displayOutput(a);

displayOutput("The size of the map is: " + map1.size);
displayOutput(a);

displayOutput("Is there an object called address?");
displayOutput(map1.delete('address'));
displayOutput("Is there an object called empoyee4?")
displayOutput(map1.delete('employee4'));
map1.forEach((value, key) => {    
    displayOutput(`${key}: ${JSON.stringify(value)}`);
    displayOutput(a);
})

map1.clear();
displayOutput(map1);
displayOutput(a);

let map3 = new Map();
map3.set('name', 'Jack');
map3.set('age', '28');
for(let [key,value] of map3){
    displayOutput(key + ": " + value);
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