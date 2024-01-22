a = "\n";

//Basic GET Request
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))
        console.log(a)
    }
}
xhr.send();

//Basic POST Request
var xml = new XMLHttpRequest();
xml.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xml.setRequestHeader("Content-type","application/json");
xml.onreadystatechange = function() {
    if(xml.readyState === 4 && xml.status === 201) {
        console.log(JSON.parse(xml.responseText));
    }
};
var postData = {
    title: 'foo',
    body: 'bar',
    userID: 1
};
xml.send(JSON.stringify(postData));