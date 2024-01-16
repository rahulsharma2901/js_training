x = "\n";

//Function Parameters
function num(var1,var2,var3){
    if (var1 > var2){
        if(var1 > var3){
            return var1;
        }
        else {
            return var3;
        }
    }
    else {
        if(var2 > var3){
            return var2;
        }
        else{
            return var3;
        }
    }
}
console.log("The largest number among the variables is:",num(23,31,27));
console.log(x);

//Default Parameters
function n (num1, num2 = 3){
    return num1 * num2;
}
console.log("The product of the numbers is:",n(5))
console.log(x);

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
console.log("The largest number in the counting is:",counting(10,23,34,453,500,1089,3,89,0));
console.log(x);

//Arguments Pass by Value
function changing(n1,n2){
    console.log("Inside the changing function:");

    n1 = 100;
    n2 = 200;
    
    console.log("Old number1 = " + n1 + " and Old number2 = "+ n2);
}
n1 = 20;
n2 = 10;

console.log("Before calling the function:");
console.log("New number1 = " + n1 + " and New number2 = " + n2);

changing(n1, n2);

console.log("After calling the function:");
console.log("New number1 = " + n1 + " and New number2 = " + n2);
console.log(x);

//Objects Passed by Reference
function reference(varObj){
    console.log("Inside the reference function:");

    varObj.a = 100;
    console.log(varObj.a);
}

varObj = {a: 1};

console.log("Before calling the function:");
console.log(varObj);

reference(varObj);

console.log("After calling the function:");
console.log(varObj);