function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Global Scope
displayOutput("Global Scope")
var global = "WELCOME TO MY WORLD!"
function globalSc(){
    displayOutput("Accessible inside the function:",global);
}
globalSc();
displayOutput("Accessible outside the function:",global);
displayOutput(a);

//Local Scope
displayOutput("Local Scope")
function localSc(){
    var local = "WELCOME TO MY WORLD!";
    displayOutput("The local scope is accessible only in the function, like:",local);
}
localSc();
displayOutput(a);

//Nested Scope
displayOutput("Nested Scope")
function outerFunction(){
    var outer = "WELCOME TO MY WORLD!";
    function innerFunction(){
        var inner = "WELCOME TO MY WORLD!";
        displayOutput("The outer function displays:",outer);
        displayOutput("The inner function displays:",inner);
    }
    innerFunction();
}
outerFunction();
displayOutput(a);

//Block Scope
displayOutput("Block Scope")
function blocked(){
    let name = "UDAY";
    if (true){
        let message = "WELCOME TO THE WORLD!";
        displayOutput(message + " " + name);
    }
}
blocked();