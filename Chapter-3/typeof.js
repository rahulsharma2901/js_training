a = "\n"

let x = 302;
let y = 3.14;
console.log("Value of x = " + x);
console.log("Value of y = " + y);
console.log(typeof(x));
console.log(typeof(y));
console.log(a)

let str = "Hello all";
let str1 = "Welcome to my world";
console.log("Value of str = " + str);
console.log("Value of str1 = " + str1);
console.log(typeof("Value of str = " + str));
console.log(typeof("Value of str1 = " + str1));
console.log(a)


console.log("Value of bool = " + Boolean(x));
console.log(typeof(Boolean(x)));
console.log(a)

let p = null;
console.log("Value of p = " + p);
console.log(typeof(p));
console.log(a)

let bigNum = 2837462349762384752n;
console.log("Value of bigNum = " + bigNum);
console.log(typeof(bigNum));
console.log(a)

let person = {
    name: "Jack"
};
let id = Symbol("id");
person[id] = 12;
console.log(person[id])
console.log(typeof(id))
let person1 = {
    name: "Jack"
};
person[id] = 14;
console.log(person[id])
console.log(typeof(id))
console.log(a)

let net;
console.log("Value of net = " + net);
console.log(typeof(net));

let man = { firstName: "Rahul", lastName: "Sharma", age: '22', place: "Ahmedabad" }
console.log(man);
console.log(typeof(man));