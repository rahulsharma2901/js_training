x = "\n"

//instanceOf operator
let a = [1,2,3,4]
console.log(a);
console.log("Is the variable 'a' of the Array type?", a instanceof Array);
console.log("Is the variable 'a' of the Object type?", a instanceof Object);
console.log("Is the variable 'a' of the type String?", a instanceof String);
console.log(x);

//'in' operator
let p = {key : "value"}
console.log("Is the word key present in the variable 'p'?","key" in p);