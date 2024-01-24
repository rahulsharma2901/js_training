function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Factorial
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}
displayOutput("The factorial result is: " + JSON.stringify(factorial(5)));
displayOutput(a);

//Fibonacci
function fibonacci(n){
    if (n === 0) return 0;
    if ( n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
displayOutput("The sum of the fibonacci series is: " + JSON.stringify(fibonacci(8)));
displayOutput(a);

//Array Elements Sum
function sumArray (arr, index = 0){
    if (index === arr.length){
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}
displayOutput("The sum of the array elements is: " + JSON.stringify(sumArray([1,2,3,4,5,6])));
displayOutput(a);

//Countdown
function countdown(x){
    if(x > 10){
        return;
    }
    countdown(x + 1);
    displayOutput(x);
}
countdown(0);
displayOutput("LIFTOFF!")
displayOutput(a);

//Sum of Natural Numbers
function sumNatural(p){
    if (p === 1){
        return 1;
    }
    else{
        return p + sumNatural(p - 1);
    }
}
displayOutput("The sum of natural numbers till 8 is: " + JSON.stringify(sumNatural(8)));