a = "\n"

const weakMap = new WeakMap();
displayOutput(weakMap);
displayOutput(a);

let obj = {};
weakMap.set(obj, 'Rahul Sharma');
displayOutput(weakMap);
displayOutput(a);

displayOutput(weakMap.get(obj));
displayOutput(a);

displayOutput(weakMap.has(obj));
displayOutput(a);

displayOutput(weakMap.delete(obj));
displayOutput(weakMap);