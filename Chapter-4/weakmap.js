a = "\n"

const weakMap = new WeakMap();
console.log(weakMap);
console.log(a);

let obj = {};
weakMap.set(obj, 'Rahul Sharma');
console.log(weakMap);
console.log(a);

console.log(weakMap.get(obj));
console.log(a);

console.log(weakMap.has(obj));
console.log(a);

console.log(weakMap.delete(obj));
console.log(weakMap);