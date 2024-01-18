a = "\n";

//Basic code for understanding
const person = {
    firstName: "Rahul",
    lastName: "Sharma",
    id: 27364,
    getThis: function(){
        return this;
    }
}
console.log("This is an object method", person.getThis());
console.log(a);

//To calculate the full name
const man = {
    fName: "Shreya",
    lName: "Jangid",
    getFullName: function(){
        return this.fName + ' ' + this.lName;
    }
}
console.log("The full name is:", man.getFullName());
console.log(a);

//Counter
const counter = {
    count: 0,
    increment: function() {
        this.count++;
        return this.count;
    }
}
console.log("Count:", counter.increment());
console.log("Count:", counter.increment());
console.log("Count:", counter.increment());
console.log("Count:", counter.increment());
console.log("Count:", counter.increment());
console.log(a);

//Toggle
const toggleButton = {
    isToggle: false,
    toggle: function() {
        this.isToggle = !this.isToggle;
        return this.isToggle;
    }
}
console.log("Is Toggled:", toggleButton.toggle());
console.log("Is Toggled:", toggleButton.toggle());
console.log("Is Toggled:", toggleButton.toggle());
console.log(a);