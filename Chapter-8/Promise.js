a = "\n"

//Basic Promise
function basic() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log(a);
            resolve("Operation Successful!");
            rejected("Operation Failed!");
        }, 3000);
    });
}
basic()
    .then ((message) => {
        console.log(message);
    })
    .catch ((error) => {
        console.log(error);
    });

//Chaining Promises
function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(a);
            console.log("Step one executed!");
            resolve("Step 1 Data");
            /* reject("Step 1 failed"); */
        }, 5000);
    })
}
function two(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step two executed!", data);
            resolve("Step 2 Result");
            reject("Step 2 failed");
        }, 2000);
    })
}
one()
    .then((data) => two(data))
    .then(result => {
        console.log("Final Result:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })

//Promise with setTimeout()
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(a);
            resolve(`Operation delayed for ${ms} milliseconds`);
        }, ms);
    })
}
delay(9000)
    .then(msg => {
        console.log(msg);
    })
    .catch(error => {
        console.log(error);
    })

//Conditional Resolving
function check(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(a);
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
        console.log(m);
    })
    .catch(error => {
        console.log(error);
    })

//Display multiple data together
function multiple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(a);
            const prom1 = ("Hi my name is Rahul Sharma!");
            const prom2 = ("I am 22 years old!");
            const prom3 = ("I am a React Developer!");
    
            resolve(`${prom1} ${prom2} ${prom3}`)
        }, 13000)
    })
}
multiple() 
    .then(mes => {
        console.log("Data from all promises is:\n", mes);
    })
    .catch(error => {
        console.log("Unable to fetch data!",error);
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
        console.log(msgs);
    })
    .catch(error => {
        console.log(error)
    })

function race() {
    const promise1 = delay(15000);
    const promise2 = delay(18000);
    const promise3 = delay(16500);
    return Promise.race([promise1, promise2, promise3]);
}
race()
    .then(result => {
        console.log("First promise to be executed is:\n",result);
    })
    .catch(error => {
        console.log(error);
    })