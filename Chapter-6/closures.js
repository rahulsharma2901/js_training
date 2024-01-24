function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Basic Closure
function outerFn(){
    let out = "You are reading closure codes";
    function innerFn(){
        displayOutput(out);
    }
    return innerFn();
}
const closure = outerFn();
displayOutput(a);

//With Parameters
function greeting(message){
    return function (name){
        displayOutput(message + ", " + name);
    }
}
const greet = greeting("You are reading closure codes");
greet("Rahul!");
displayOutput(a);

//With Counter
function counter(){
    let count = 0;
    return function(){
        count++;
        displayOutput(count);
    }
}
const c = counter();
c();c();c();
c();c();
displayOutput(a);

//In a Loop
function createFn(){
    const result = [];
    for (i = 0; i < 5; i++){
        result.push(function() {
            displayOutput(i);
        })
    }
    return result;
}
const functions = createFn();
functions.forEach(fn => fn());      //gives the final value for 'i' after looping 'i' amount of times