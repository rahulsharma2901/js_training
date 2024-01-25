function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

import axios from "axios";

//Axios API using GET method
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        displayOutput("GET:" + JSON.stringify(response.data));
    })
    .catch(error => {
        displayOutput("ERROR!" + JSON.stringify(error))
    })

//Axios API using POST
axios.post('https://jsonplaceholder.typicode.com/users', {
    id: "101",
    name: "Rahul Sharma",
    username: "therahul",
})
    .then((responsed) => displayOutput("POST:",JSON.stringify(responsed)))
    .catch((err) => displayOutput(JSON.stringify(err)));

//Axios API using PUT
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    id: 1,
    title: "Not real",
    body: "Yep this has changed",
})
    .then((res) => displayOutput("PUT:" + JSON.stringify(res)))
    .catch((error) => displayOutput(JSON.stringify(error)));

//Axios API using PATCH
const data = {
    title: "Not Real"
};
axios.patch('https://jsonplaceholder.typicode.com/posts/1', data)
    .then(response => {
        displayOutput("PATCH:" + JSON.stringify(response.data))
})
    .catch(error => {
        displayOutput("Contagious error found!" + JSON.stringify(error))
})

//Axios API using Custom Headers
const headers = {
    'Content-Type' : 'application/json',
    'Authorization' : 'auth-token bearer'
}
axios.get('https://jsonplaceholder.typicode.com/posts/4', {headers})
    .then((response) => displayOutput("CUSTOM HEADERS:" + JSON.stringify(response.data)))
    .catch((error) => displayOutput("ERROR!" + JSON.stringify(error)));

//Axios API using HEAD
axios.head('https://jsonplaceholder.typicode.com/posts/2')
    .then(respo => {
        const content = respo.headers['content-type'];
        if ('custom-header' in respo.headers) {
            const customHeader = respo.headers['custom-header'];
            displayOutput('Custom-Header-Value:' + JSON.stringify(customHeader));
        }
        displayOutput('HEAD: Content-Type' + JSON.stringify(content));
    })
    .catch(error => {
        displayOutput('Error! Error!' + JSON.stringify(error));
    })

//Axios API using OPTIONS
axios.options('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        const newHeader = response.headers;
        displayOutput("OPTIONS" + JSON.stringify(newHeader));
        const content = newHeader['content-type'];
        const allow = newHeader['allow'];
        displayOutput("Content-Type:" + JSON.stringify(content));
        displayOutput("Allow Methods:" + JSON.stringify(allow));
    })
    .catch(error => {
        displayOutput("Error detected!" + JSON.stringify(error));
    });

//Axios API using DELETE
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        displayOutput("DELETE!" + JSON.stringify(response.data));
    })
    .catch(error => {
        displayOutput("ERROR found here!" + JSON.stringify(error))
    })