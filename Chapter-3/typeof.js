a = "\n"

let x = 302;
let y = 3.14;
displayOutput("Value of x = " + x);
displayOutput("Value of y = " + y);
displayOutput(typeof(x));
displayOutput(typeof(y));
displayOutput(a)

let str = "Hello all";
let str1 = "Welcome to my world";
displayOutput("Value of str = " + str);
displayOutput("Value of str1 = " + str1);
displayOutput(typeof("Value of str = " + str));
displayOutput(typeof("Value of str1 = " + str1));
displayOutput(a)


displayOutput("Value of bool = " + Boolean(x));
displayOutput(typeof(Boolean(x)));
displayOutput(a)

let p = null;
displayOutput("Value of p = " + p);
displayOutput(typeof(p));
displayOutput(a)

let bigNum = 2837462349762384752n;
displayOutput("Value of bigNum = " + bigNum);
displayOutput(typeof(bigNum));
displayOutput(a)

let person = {
    name: "Jack"
};
let id = Symbol("id");
person[id] = 12;
displayOutput(person[id])
displayOutput(typeof(id))
let person1 = {
    name: "Jack"
};
person[id] = 14;
displayOutput(person[id])
displayOutput(typeof(id))
displayOutput(a)

let net;
displayOutput("Value of net = " + net);
displayOutput(typeof(net));

let man = { firstName: "Rahul", lastName: "Sharma", age: '22', place: "Ahmedabad" }
displayOutput(man);
displayOutput(typeof(man));