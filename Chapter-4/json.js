a= "\n";

let person = {
    "name": "Rahul Sharma",
    "age": "22",
    "city": "Jaipur"
}
displayOutput(person);
displayOutput(a);

displayOutput(person.name)
displayOutput(a);

person.age = 24;
displayOutput("age: "+person.age);
displayOutput(a);

let employee = {
    "name": "Rahul Sharma",
    "job":{
        "title": "React developer",
        "department": "Engineering"
    }
}
displayOutput(employee);
displayOutput(a);

let employees = [
    {"name": "Rahul", "age": 22, "position": "CTO"},
    {"name": "Uday", "age": 21, "position": "CMO"},
    {"name": "Shreya", "age": 22, "position": "CDO"},
    {"name": "Neha", "age": 22, "position": "CEO"}
]
displayOutput(employees);
displayOutput(a);

let jsonString = '{"name": "Priyal", "age": "22", "position": "COO"}'
let parsedString =  JSON.parse(jsonString);
displayOutput(employees, parsedString);
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
    let invalidJSON = '{"name": "Mark Ronson", "age":}';
    let parsedInvalid = JSON.parse(invalidJSON);
    if (parsedInvalid.age === undefined){
        throw new Error('Missing the value for "age" property');
    }
    displayOutput("Successfully parsed JSON:", parsedInvalid);
}
catch (error) {
    console.error("Error occuring still while parsing JSON:", error.message);
}