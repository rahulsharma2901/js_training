a = "\n";

//Global Scope
console.log("Global Scope")
var global = "WELCOME TO MY WORLD!"
function globalSc(){
    console.log("Accessible inside the function:",global);
}
globalSc();
console.log("Accessible outside the function:",global);
console.log(a);

//Local Scope
console.log("Local Scope")
function localSc(){
    var local = "WELCOME TO MY WORLD!";
    console.log("The local scope is accessible only in the function, like:",local);
}
localSc();
console.log(a);

//Nested Scope
console.log("Nested Scope")
function outerFunction(){
    var outer = "WELCOME TO MY WORLD!";
    function innerFunction(){
        var inner = "WELCOME TO MY WORLD!";
        console.log("The outer function displays:",outer);
        console.log("The inner function displays:",inner);
    }
    innerFunction();
}
outerFunction();
console.log(a);

//Block Scope
console.log("Block Scope")
function blocked(){
    let name = "UDAY";
    if (true){
        let message = "WELCOME TO THE WORLD!";
        console.log(message + " " + name);
    }
}
blocked();