function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

x = "\n";

//Function Parameters
function num(var1,var2,var3){
    if (var1 > var2 && var1 > var3){
        return var1;
    } else if(var2 > var1 && var2 > var3){
        return var2;
    } else {
        return var3
    }
}
displayOutput("The largest number among the variables is: " + num(23,31,27));
displayOutput(x);

//Default Parameters
function n (num1, num2 = 3){
    return num1 * num2;
}
displayOutput("The product of the numbers is: " + n(5))
displayOutput(x);

//Argument Object
function counting(){
    let i;
    let maxnum = -Infinity;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > maxnum){
            maxnum = arguments[i];
        }
    }
    return maxnum;
}
displayOutput("The largest number in the counting is: " + counting(10,23,34,453,500,1089,3,89,0));
displayOutput(x);

//Arguments Pass by Value
function changing(n1,n2){
    displayOutput("Inside the changing function:");

    n1 = 100;
    n2 = 200;
    
    displayOutput("Old number1 = " + n1 + " and Old number2 = "+ n2);
}
n1 = 20;
n2 = 10;

displayOutput("Before calling the function:");
displayOutput("New number1 = " + n1 + " and New number2 = " + n2);

changing(n1, n2);

displayOutput("After calling the function:");
displayOutput("New number1 = " + n1 + " and New number2 = " + n2);
displayOutput(x);

//Objects Passed by Reference
function reference(varObj){
    displayOutput("Inside the reference function:");

    varObj.a = 100;
    displayOutput(JSON.stringify(varObj.a));
}

varObj = {a: 1};

displayOutput("Before calling the function:");
displayOutput(JSON.stringify(varObj));

reference(varObj);

displayOutput("After calling the function:");
displayOutput(JSON.stringify(varObj));