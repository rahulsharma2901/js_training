function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n"

//Basic Async/Await
async function basicAsync() {
    const res = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Operation Completed Successfully!");
        }, 2000);
    })
    displayOutput(a);
    displayOutput(JSON.stringify(res));
}
basicAsync();

//With Promise Chaining
function one() {
    return new Promise(resolve => {
        setTimeout(() => {
            displayOutput(a);
            displayOutput("Step 1 has been completed!");
            resolve("Let's see what the output becomes");
        }, 4000);
    })
}
function two(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            displayOutput("Step 2 has been completed!" + JSON.stringify(data));
            resolve("And again let's check the output");
        }, 1000);
    })
}
async function perform() {
    try {
        const data = await one();
        const result = await two(data);
        displayOutput("Final Result:" + JSON.stringify(result));
    }
    catch (error) {
        displayOutput("Error:" + JSON.stringify(error));
    }
}
perform();

//With Promise.all
async function together() {
    try {
        const [data1, data2, data3] = await Promise.all([
            "Hello, everyone!",
            "My name is Rahul Sharma!",
            "I am a React Developer"
        ]);
        displayOutput("Data from different elements:\n" + JSON.stringify(data1 + data2 + data3));
    }
    catch (error) {
        displayOutput("Error!" + JSON.stringify(error))
    }
}
together();