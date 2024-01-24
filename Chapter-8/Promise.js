function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n"

//Basic Promise
function basic() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            displayOutput(a);
            resolve("Operation Successful!");
            rejected("Operation Failed!");
        }, 3000);
    });
}
basic()
    .then ((message) => {
        displayOutput(JSON.stringify(message));
    })
    .catch ((error) => {
        displayOutput(JSON.stringify(error));
    });

//Chaining Promises
function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            displayOutput(a);
            displayOutput("Step one executed!");
            resolve("Step 1 Data");
            /* reject("Step 1 failed"); */
        }, 5000);
    })
}
function two(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            displayOutput("Step two executed!" + JSON.stringify(data));
            resolve("Step 2 Result");
            reject("Step 2 failed");
        }, 2000);
    })
}
one()
    .then((data) => two(data))
    .then(result => {
        displayOutput("Final Result:" + JSON.stringify(result));
    })
    .catch(error => {
        displayOutput("Error:" + JSON.stringify(error));
    })

//Promise with setTimeout()
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            displayOutput(a);
            resolve(`Operation delayed for ${ms} milliseconds`);
        }, ms);
    })
}
delay(9000)
    .then(msg => {
        displayOutput(JSON.stringify(msg));
    })
    .catch(error => {
        displayOutput(JSON.stringify(error));
    })

//Conditional Resolving
function check(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            displayOutput(a);
            if(typeof number === 'number') {
                resolve(`${number} is a valid number!`);
            }
            else {
                reject(`${number} is not a valid number!`);
            }
        }, 11000);
        });
}
check("Rahul")
    .then(m => {
        displayOutput(JSON.stringify(m));
    })
    .catch(error => {
        displayOutput(JSON.stringify(error));
    })

//Display multiple data together
function multiple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            displayOutput(a);
            const prom1 = ("Hi my name is Rahul Sharma!");
            const prom2 = ("I am 22 years old!");
            const prom3 = ("I am a React Developer!");
    
            resolve(`${prom1} ${prom2} ${prom3}`)
        }, 13000)
    })
}
multiple() 
    .then(mes => {
        displayOutput("Data from all promises is:\n" + JSON.stringify(mes));
    })
    .catch(error => {
        displayOutput("Unable to fetch data!" + JSON.stringify(error));
    })

//Promise.all
function all() {
    const guns = ("Desert Eagle");
    const cars = ("Mustang GT");
    const bikes = ("Kawasaki Ninja");
    return Promise.all([guns, cars, bikes]);
}
all()
    .then(msgs => {
        displayOutput(JSON.stringify(msgs));
    })
    .catch(error => {
        displayOutput(JSON.stringify(error))
    })

function race() {
    const promise1 = delay(15000);
    const promise2 = delay(18000);
    const promise3 = delay(16500);
    return Promise.race([promise1, promise2, promise3]);
}
race()
    .then(result => {
        displayOutput("First promise to be executed is:\n" + JSON.stringify(result));
    })
    .catch(error => {
        displayOutput(JSON.stringify(error));
    })