a = "\n";

//Factorial
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("The factorial result is:",factorial(5));
console.log(a);

//Fibonacci
function fibonacci(n){
    if (n === 0) return 0;
    if ( n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("The sum of the fibonacci series is:",fibonacci(8));
console.log(a);

//Array Elements Sum
function sumArray (arr, index = 0){
    if (index === arr.length){
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}
console.log("The sum of the array elements is:",sumArray([1,2,3,4,5,6]));
console.log(a);

//Countdown
function countdown(x){
    if(x > 10){
        return;
    }
    countdown(x + 1);
    console.log(x);
}
countdown(0);
console.log("LIFTOFF!")
console.log(a);

//Sum of Natural Numbers
function sumNatural(p){
    if (p === 1){
        return 1;
    }
    else{
        return p + sumNatural(p - 1);
    }
}
console.log("The sum of natural numbers till 8 is:",sumNatural(8));