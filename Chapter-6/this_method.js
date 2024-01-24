function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

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
displayOutput("This is an object method: " + JSON.stringify(person.getThis()));
displayOutput(a);

//To calculate the full name
const man = {
    fName: "Rahul",
    lName: "Sharma",
    getFullName: function(){
        return this.fName + ' ' + this.lName;
    }
}
displayOutput("The full name is: " + JSON.stringify(man.getFullName()));
displayOutput(a);

//Counter
const counter = {
    count: 0,
    increment: function() {
        this.count++;
        return this.count;
    }
}
displayOutput("Count: " + counter.increment());
displayOutput("Count: " + counter.increment());
displayOutput("Count: " + counter.increment());
displayOutput("Count: " + counter.increment());
displayOutput("Count: " + counter.increment());
displayOutput(a);

//Toggle
const toggleButton = {
    isToggle: false,
    toggle: function() {
        this.isToggle = !this.isToggle;
        return this.isToggle;
    }
}
displayOutput("Is Toggled: " + toggleButton.toggle());
displayOutput("Is Toggled: " + toggleButton.toggle());
displayOutput("Is Toggled: " + toggleButton.toggle());
displayOutput(a);