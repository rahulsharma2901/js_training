a = "\n";

//Simple Loop
function loop(x){
    if(x >= 10){
        return;
    }
    console.log(x);
    loop(x + 1);
}
loop(0);
console.log(a);

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
console.log(`The factorial value of ${n} is:`,result);
console.log(a);

//Function Stack
function foo(i){
    if(i < 0){
        return;
    }
    console.log(`Begin: ${i}`);
    foo(i - 1);
    console.log(`End: ${i}`);
}
foo(5);
console.log(a);

//Nested Function
function squares(p,q){
    function square(r){
        return r * r;
    }
    return square(p) + square(q);
}
console.log("The sum of the squares of 2 and 3 is:",squares(2,3));
console.log("The sum of the squares of 4 and 6 is:",squares(4,6));
console.log("The sum of the squares of 2 and 2 is:",squares(2,2));
console.log(a);

//Closure Example
function outside (m){
    function inside (n){
        return m * n;
    }
    return inside;
}
const fInside = outside(12);
console.log(fInside(6));
console.log(outside(12)(6));
console.log(a);

//Scope Chaining
function A(t){
    function B(u){
        function C(v){
            console.log(`The sum of ${t}, ${u}, ${v} is:`,t + u + v);
        }C(6);
    }B(5);
}A(8);
console.log(a);

//Name Conflicting
function outs(){
    const f = 6;
    function ins(f){
        return f * 2;
    }
    return ins;
}
console.log(`The product is:`,outs()(10));