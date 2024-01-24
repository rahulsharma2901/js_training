x = "\n"

//instanceOf operator
let a = [1,2,3,4]
displayOutput(a);
displayOutput("Is the variable 'a' of the Array type?", a instanceof Array);
displayOutput("Is the variable 'a' of the Object type?", a instanceof Object);
displayOutput("Is the variable 'a' of the type String?", a instanceof String);
displayOutput(x);

//'in' operator
let p = {key : "value"}
displayOutput("Is the word key present in the variable 'p'?","key" in p);