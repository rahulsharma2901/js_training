function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n";

let a = 12;
let b = 13;
let c = 15;
displayOutput(a < b && b < c);
displayOutput(x);

let p = 17;
let q = 12;
let r = 13;
displayOutput( + p > q || q > r);
displayOutput(x);

let l = true;
displayOutput(!l);