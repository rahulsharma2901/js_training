function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Simple Loop
function loop(x){
    if(x >= 10){
        return;
    }
    displayOutput(x);
    loop(x + 1);
}
loop(0);
displayOutput(a);

//Recursion function
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial (n - 1);
    }
}
let n = parseInt(prompt("The value of n is:"));
const result = factorial(n);
displayOutput(`The factorial value of ${n} is:` + result);
displayOutput(a);

//Function Stack
function foo(i){
    if(i < 0){
        return;
    }
    displayOutput(`Begin: ${i}`);
    foo(i - 1);
    displayOutput(`End: ${i}`);
}
foo(5);
displayOutput(a);

//Nested Function
function squares(p,q){
    function square(r){
        return r * r;
    }
    return square(p) + square(q);
}
displayOutput("The sum of the squares of 2 and 3 is:" + squares(2,3));
displayOutput("The sum of the squares of 4 and 6 is:" + squares(4,6));
displayOutput("The sum of the squares of 2 and 2 is:" + squares(2,2));
displayOutput(a);

//Closure Example
function outside (m){
    function inside (n){
        return m * n;
    }
    return inside;
}
const fInside = outside(12);
displayOutput(fInside(6));
displayOutput(outside(12)(6));
displayOutput(a);

//Scope Chaining
function A(t){
    function B(u){
        function C(v){
            displayOutput(`The sum of ${t}, ${u}, ${v} is:` + JSON.stringify(t + u + v));
        }C(6);
    }B(5);
}A(8);
displayOutput(a);

//Name Conflicting
function outs(){
    const f = 6;
    function ins(f){
        return f * 2;
    }
    return ins;
}
displayOutput(`The product is:` + outs()(10));