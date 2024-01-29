function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n"

//instanceOf operator
let a = [1,2,3,4]
displayOutput(a);
displayOutput("Is the variable 'a' of the Array type? " + JSON.stringify(a instanceof Array));
displayOutput("Is the variable 'a' of the Object type? " + JSON.stringify(a instanceof Object));
displayOutput("Is the variable 'a' of the type String? " + JSON.stringify(a instanceof String));
displayOutput(x);

//'in' operator
let p = {key : "value"}
displayOutput("Is the word key present in the variable 'p'? " + JSON.stringify("key" in p));