function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

let x = 10;
displayOutput(JSON.stringify(x));
displayOutput(a);

let y = 7;
y += 4;
displayOutput(JSON.stringify(y));
displayOutput(a);

let z = 20;
z -= 4;
displayOutput(JSON.stringify(z));
displayOutput(a);

let b = 10;
b *= 2;
displayOutput(JSON.stringify(b));
displayOutput(a);

let c = 30;
c /= 3;
displayOutput(JSON.stringify(c));
displayOutput(a);

let d = 20;
d %= 3;
displayOutput(JSON.stringify(d));
displayOutput(a);

let e = 3;
e **= 3;
displayOutput(JSON.stringify(e));
displayOutput(a);

let f = 6;
f <<= 1; //gives the binary answer shifted to the left
displayOutput(JSON.stringify(f));
displayOutput(a);

let g = 5;
g >>= 2;        //gives the binary answer shifted to the right
displayOutput(JSON.stringify(g))
displayOutput(a)

let h = 8;
h >>>= 1;       //gives the binary answer shifted to the right while removing the sign of the operand
displayOutput(JSON.stringify(h));
displayOutput(a);

let i = 8;
i &= 3;
displayOutput(JSON.stringify(i));
displayOutput(a);

let j = 12;
j ^= 3;
displayOutput(JSON.stringify(j));
displayOutput(a);

let k = 10;
k |= 3;
displayOutput(JSON.stringify(k));
displayOutput(a);