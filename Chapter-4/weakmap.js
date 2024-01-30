function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

const weakMap = new WeakMap();
displayOutput("WeakMap without any entries is: " + JSON.stringify(weakMap));
displayOutput(a);

let obj = {};
weakMap.set(obj, 'Rahul Sharma');
displayOutput("Obj: " + weakMap.get(obj))
displayOutput(a);

displayOutput(weakMap.get(obj));
displayOutput(a);

displayOutput(weakMap.has(obj));
displayOutput(a);

displayOutput(weakMap.delete(obj));
displayOutput(JSON.stringify(weakMap));