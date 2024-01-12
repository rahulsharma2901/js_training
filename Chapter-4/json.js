a= "\n";

let person = {
    "name": "Rahul Sharma",
    "age": "22",
    "city": "Jaipur"
}
console.log(person);
console.log(a);

console.log(person.name)
console.log(a);

person.age = 24;
console.log("age: "+person.age);
console.log(a);

let employee = {
    "name": "Rahul Sharma",
    "job":{
        "title": "React developer",
        "department": "Engineering"
    }
}
console.log(employee);
console.log(a);

let employees = [
    {"name": "Rahul", "age": 22, "position": "CTO"},
    {"name": "Uday", "age": 21, "position": "CMO"},
    {"name": "Shreya", "age": 22, "position": "CDO"},
    {"name": "Neha", "age": 22, "position": "CEO"}
]
console.log(employees);
console.log(a);

let jsonString = '{"name": "Priyal", "age": "22", "position": "COO"}'
let parsedString =  JSON.parse(jsonString);
console.log(employees, parsedString);
console.log(a);

let car = {name: "Ford", model: "Mustang"};
let carString = JSON.stringify(car);
console.log(carString);
console.log(a);

for(let key in person){
    console.log(`${key}: ${person[key]}`)
};

let propertyName = "name";
console.log(employee[propertyName])
console.log(a);

try {
    let invalidJSON = '{"name": "Mark Ronson", "age":}';
    let parsedInvalid = JSON.parse(invalidJSON);
    if (parsedInvalid.age === undefined){
        throw new Error('Missing the value for "age" property');
    }
    console.log("Successfully parsed JSON:", parsedInvalid);
}
catch (error) {
    console.error("Error occuring still while parsing JSON:", error.message);
}