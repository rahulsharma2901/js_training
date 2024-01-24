x = "\n";

let a = 5;
let b = "5";
displayOutput(`${a} and "${b}" gives:`, a==b)
displayOutput(x);

let c = 4;
let d = 5;
displayOutput(`${c} and ${d} gives:`, c!=d)
displayOutput(x);

let e = 3;
let f = "3";
displayOutput(`${e} and "${f}" gives:`, e === f)
displayOutput(x);

let g = 12;
let h = 13;
displayOutput(`${g} and ${h} gives:`, g>h);
displayOutput(x);

let i = 13;
let k = 15;
displayOutput(`${k} and ${i} gives:`, k>=i);
displayOutput(x);

let l = 14;
let m = 15;
displayOutput(`${l} and ${m} gives:`, l<m);
displayOutput(x);

let n = 12;
let o = 16;
displayOutput(`${n} and ${o} gives:`, n<=o);
displayOutput(x);

let p = 17;
let q = "17";
displayOutput(`${p} and "${q}" gives:`, p!==q);