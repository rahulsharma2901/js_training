a = "\n"

//Basic Async/Await
async function basicAsync() {
    const res = await new Promise(resolve => {
        setTimeout(() => {
            resolve("Operation Completed Successfully!");
        }, 2000);
    })
    console.log(a);
    console.log(res);
}
basicAsync();

//With Promise Chaining
function one() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(a);
            console.log("Step 1 has been completed!");
            resolve("Step 1 data");
        }, 4000);
    })
}
function two(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 has been completed!", data);
            resolve("Step 2 result")
        }, 1000);
    })
}
async function perform() {
    try {
        const data = await one();
        const result = await two(data);
        console.log("Final Result:", result);
    }
    catch (error) {
        console.log("Error:",error);
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
        console.log("Data from different elements:\n", data1, data2, data3);
    }
    catch (error) {
        console.log("Error!",error)
    }
}
together();