function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Callback
const main = (callback) => {
    setTimeout(() => {
        callback([2,3,4]);
    }, 2000);
}
const add = (array) => {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    displayOutput("The sum of array elements is:" + JSON.stringify(sum));
    displayOutput(a);
}
main(add);

//Callback Hell
getUser (function(user) {
    getProfile(user, function(profile) {
        getPosts(user, function(posts) {
            dsiplayData(user, profile, posts, function() {

            });
        });
    });
});
function getUser(callback) {
    setTimeout(function() {
        const user = { id: 123, name: "Rahul" };
        callback(user);
    }, 1000);
}
function getProfile(user, callback) {
    setTimeout(function() {
        const profile = { id: 123, bio: "React Developer"};
        callback(profile);
    }, 1000);
}
function getPosts(user, callback) {
    setTimeout(function() {
        const posts = ["Post 1", "Post 2", "Post 3"];
        callback(posts);
    }, 1000)
}
function dsiplayData(user, profile, posts, callback) {
    displayOutput("User:" + JSON.stringify(user));
    displayOutput("Profile:" + JSON.stringify(profile));
    displayOutput("Posts:" + JSON.stringify(posts));
    callback();
    displayOutput(a);
}