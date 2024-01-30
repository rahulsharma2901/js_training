function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a= "\n";

let person = {
    "name": "Rahul Sharma",
    "age": "22",
    "city": "Jaipur"
}
displayOutput(JSON.stringify(person));
displayOutput(a);

displayOutput(person.name)
displayOutput(a);

person.age = 24;
displayOutput("age: " + person.age);
displayOutput(a);

let employee = {
    "name": "Rahul Sharma",
    "job":{
        "title": "React developer",
        "department": "Engineering"
    }
}
displayOutput(JSON.stringify(employee));
displayOutput(a);

let employees = [
    {"name": "Rahul", "age": 22, "position": "CTO"},
    {"name": "Uday", "age": 21, "position": "CMO"},
    {"name": "Shreya", "age": 22, "position": "CDO"},
    {"name": "Neha", "age": 22, "position": "CEO"}
]
displayOutput(JSON.stringify(employees));
displayOutput(a);

let jsonString = '{"name": "Priyal", "age": "22", "position": "COO"}'
let parsedString =  JSON.parse(jsonString);
displayOutput(JSON.stringify(employees) + JSON.stringify(parsedString));
displayOutput(a);

let car = {name: "Ford", model: "Mustang"};
let carString = JSON.stringify(car);
displayOutput(carString);
displayOutput(a);

for(let key in person){
    displayOutput(`${key}: ${person[key]}`)
};

let propertyName = "name";
displayOutput(employee[propertyName])
displayOutput(a);

try {
    let invalidJSON = '{"name": "Mark Ronson", "age": 25}';
    let parsedInvalid = JSON.parse(invalidJSON);
    if (parsedInvalid.age === undefined){
        throw new Error('Missing the value for "age" property');
    }
    displayOutput("Successfully parsed JSON: " + JSON.stringify(parsedInvalid));
}
catch (error) {
    console.error("Error occuring still while parsing JSON:" + error.message);
}