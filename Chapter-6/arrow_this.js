function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

const obj1 = {
    name: 'Ravikant',
    printName: () => {
        displayOutput(JSON.stringify(this.name));
    }
};
obj1.printName();
displayOutput(a);

const obj2 = {
    theName: 'Ravikant',
    printTheName() {
        displayOutput(JSON.stringify(this.theName));
    },
    printNameWithArrow: () => {
        displayOutput(JSON.stringify(this.name));
    }
}
obj2.printTheName();
obj2.printNameWithArrow();