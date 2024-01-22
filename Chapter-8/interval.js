a = "\n"

//Basic Interval
console.log("Start");
const interval = setInterval(() => {
    console.log("Set the output interval for every 1 second",);
}, 1000);
setTimeout(() => clearInterval(interval), 5000);

//Updating Live Clock
function update() {
    const now = new Date();
    console.log(`Current time: ${now.toLocaleDateString()}`);
}
setTimeout(() => {
    console.log(a);
    console.log("Start");
    const clock = setInterval(update, 2000);
    setTimeout(() => clearInterval(clock), 10000)
}, 5500);

//Counting Seconds
setTimeout(() => {
    let seconds = 0;
    console.log(a);
    console.log("Start")
    const seconded = setInterval(() => {
        seconds++;
        console.log(`Time elapsed: ${seconds}`);
    }, 1000);
    setTimeout(() => clearInterval(seconded), 5000)
}, 16500)

//Display Different Messages at Different Intervals
setTimeout(() => {
    const msg = ["Hello", "Welcome", "How are you today?", "Goodbye"];
    let current = 0;
    console.log(a);
    console.log("Start");
    const message = setInterval(() => {
        console.log(msg[current]);
        current++;
        if (current === msg.length) {
            current = 0;
        }
    }, 1000)
    setTimeout(() => clearInterval(message), 6000)
}, 22500);