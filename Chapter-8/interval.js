function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n"

//Basic Interval
displayOutput("Start");
const interval = setInterval(() => {
    displayOutput("Set the output interval for every 1 second",);
}, 1000);
setTimeout(() => clearInterval(interval), 5000);

//Updating Live Clock
function update() {
    const now = new Date();
    displayOutput(`Current time: ${now.toLocaleDateString()}`);
}
setTimeout(() => {
    displayOutput(a);
    displayOutput("Start");
    const clock = setInterval(update, 2000);
    setTimeout(() => clearInterval(clock), 10000)
}, 5500);

//Counting Seconds
setTimeout(() => {
    let seconds = 0;
    displayOutput(a);
    displayOutput("Start")
    const seconded = setInterval(() => {
        seconds++;
        displayOutput(`Time elapsed: ${seconds}`);
    }, 1000);
    setTimeout(() => clearInterval(seconded), 5000)
}, 16500)

//Display Different Messages at Different Intervals
setTimeout(() => {
    const msg = ["Hello", "Welcome", "How are you today?", "Goodbye"];
    let current = 0;
    displayOutput(a);
    displayOutput("Start");
    const message = setInterval(() => {
        displayOutput(JSON.stringify(msg[current]));
        current++;
        if (current === msg.length) {
            current = 0;
        }
    }, 1000)
    setTimeout(() => clearInterval(message), 6000)
}, 22500);