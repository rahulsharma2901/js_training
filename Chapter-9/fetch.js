function displayOutput(output) {
    var out = document.getElementById('output');
    var para = document.createElement('p');
    para.textContent = output;
    out.appendChild(para);
}

a = "\n";

//Basic Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => displayOutput(JSON.stringify(data)))
    .catch(error => displayOutput("Error!" + JSON.stringify(error)));

//Uploading JSON Data Using POST
async function postJSON(data) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();
        displayOutput(a)
        displayOutput("Operation completed successfully" + JSON.stringify(result));
    }
    catch (error) {
        displayOutput("Operation Failed!" + JSON.stringify(error));
    }
}
const data = { username: "ra_shar" }
postJSON(data);

//Updating a File using PUT
async function upload(form) {
    try {
        const responses = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT",
            body: form,
        });
        const result = await responses.json();
        displayOutput("Operation Successful!" + JSON.stringify(result));
    }
    catch (error) {
        displayOutput("Operation Failed" + JSON.stringify(error));
    }
}
function uploadFormData() {
    const form = new FormData();
    const file = document.getElementById('fileInput');
    form.append("rashar","summa123");
    form.append("avatar", file.files[100]);
    upload(form);
    displayOutput(a)
}


//Uploading Multiple Files using POST
async function multiple(formData) {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: formData,
        });
        const res = await resp.json();
        displayOutput("Success!" + JSON.stringify(res));
    }
    catch(error) {
        displayOutput("Failed!" + JSON.stringify(error));
    }
}
function uploadMulFiles(){
    const photos = document.getElementById('mulFileInput');
    const formData = new FormData();
    formData.append("title", "Goa trip");
    for (const [i, photo] of Array.from(photos.files).entries()) {
        formData.append(`photos_${i}`, photo);
    }
    multiple(formData);
    displayOutput(a)
}

//Fetching Data from API using GET
async function getData() {
    try {
        const respon = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!respon.ok) {
            throw new Error(`HTTP error! Status: ${respon.status}`);
        }
        const data = await respon.json();
        displayOutput(a)
        displayOutput("Data is:\n" + JSON.stringify(data));
    }
    catch (error) {
        displayOutput("Error, error!" + JSON.stringify(error));
    }
    
}

//Updating A File Using PATCH
async function updateData() {
    try {
        const updated = {
            title: "Updated Title",
            body: "Updated Body",
        } 
        const respn = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PATCH",
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(updated),
        })
        if(!respn.ok) {
            throw new Error(`HTTP ERROR! Status ${respn.status}`);
        }
        const data = await respn.json();
        displayOutput(a)
        displayOutput("Updated Data is:\n" + JSON.stringify(data));
    }
    catch (error) {
        displayOutput("Error:" + JSON.stringify(error));
    }
}

//Deleting using DELETE
async function deleteData() {
    try {
        const answer = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "DELETE",
        })
        if(!answer.ok) {
            throw new Error(`HTTP Error found! ${answer.status}`);
        }
        displayOutput(a)
        displayOutput("Data Successfully Deleted!");
    }
    catch(error) {
        displayOutput("Error found!" + JSON.stringify(error));
    }
}