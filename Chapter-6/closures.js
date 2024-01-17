a = "\n";

//Basic Closure
function outerFn(){
    let out = "You are reading closure codes";
    function innerFn(){
        console.log(out);
    }
    return innerFn();
}
const closure = outerFn();
console.log(a);

//With Parameters
function greeting(message){
    return function (name){
        console.log(message + ", " + name);
    }
}
const greet = greeting("You are reading closure codes");
greet("Rahul!");
console.log(a);

//With Counter
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}
const c = counter();
c();c();c();
c();c();
console.log(a);

//In a Loop
function createFn(){
    const result = [];
    for (i = 0; i < 5; i++){
        result.push(function() {
            console.log(i);
        })
    }
    return result;
}
const functions = createFn();
functions.forEach(fn => fn());      //gives the final value for 'i' after looping 'i' amount of times