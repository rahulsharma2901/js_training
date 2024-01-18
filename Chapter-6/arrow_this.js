a = "\n";

const obj1 = {
    name: 'Ravikant',
    printName: () => {
        console.log(this.name);
    }
};
obj1.printName();
console.log(a);

const obj2 = {
    theName: 'Ravikant',
    printTheName() {
        console.log(this.theName);
    },
    printNameWithArrow: () => {
        console.log(this.name);
    }
}
obj2.printTheName();
obj2.printNameWithArrow();