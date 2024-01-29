function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n"

let a = 4
let b = 6
sum = a + b;
displayOutput("Sum of 4 and 6 is: " + JSON.stringify(sum));
displayOutput(x);

let c = 7
let d = 9
diff = d - c
displayOutput("Difference of 9 and 7 is: " + JSON.stringify(diff));
displayOutput(x);

let e = 12
let f = 12
prod = e * f
displayOutput("Product of 12 and 12 is: " + JSON.stringify(prod));
displayOutput(x);

let g = 16
let h = 4
div = g / h
displayOutput("Quotient of 16 divided by 4 is: " + JSON.stringify(div));
displayOutput(x);

let i = 17
let j = 4
rem = i % j
displayOutput("Remainder of 17 divided by 4 is: " + JSON.stringify(rem));
displayOutput(x);

let k = 5
let l = 3
exp = k ** l
displayOutput("The rest of 5 raised to the power of 3 is:" + JSON.stringify(exp))
displayOutput(x)

let m = 13
let n = 15
inc = ++m
dec = --n
displayOutput("Incremented value of 13 is: " + JSON.stringify(m))
displayOutput("Decremented value of 15 is: " + JSON.stringify(n))
displayOutput(x)

let o = 16
neg = -o
displayOutput("Negated value of 16 is: " + JSON.stringify(neg))
displayOutput(x)

let p = -273
plus = +p
displayOutput("Positive value of -273 is: " + JSON.stringify(p))
displayOutput(x)