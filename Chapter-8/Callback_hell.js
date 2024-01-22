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
    console.log("The sum of array elements is:", sum);
    console.log(a);
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
    console.log("User:", user);
    console.log("Profile:", profile);
    console.log("Posts:", posts);
    callback();
    console.log(a);
}