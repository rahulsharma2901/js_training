a = "\n";

//Basic Fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error!", error));

//Adding Headers
const headers = new Headers();
headers.append('Authorization', 'Bearer the-access-token');
fetch('http://api.example.com/something/resource/protected', {
    method: "GET",
    headers: headers
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => ("Error! Error!", error))

//Aborting a Fetch
const controller = new AbortController();
const signal = controller.signal;
const url = "video.mp4";
const download = document.querySelector("#download");
const abort = document.querySelector("#abort");
download.addEventListener("click", async() => {
    try {
        const response = await fetch(url, {signal});
        console.log("DOWNLOAD COMPLETE!", response);
    }
    catch (error) {
        console.error(`DOWNLOAD ERROR!, ${error.message}`);
    }
});
abort.addEventListener("click", () => {
    controller.abort();
    console.log("DOWNLOAD ABORTED!"); 
})

//Uploading JSON Data
async function postJSON(data) {
    try{
        const response = await fetch("https://example.com/profile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        const result = await response.json();
        console.log("Operation completed successfully", result);
    }
    catch (error) {
        console.log("Operation Failed!", error);
    }
}
const data = { username: "ra_shar" }
postJSON(data);

//Uploading a File
async function upload(form) {
    try {
        const responses = await fetch("https://example.com/profile/avatar", {
            method: "PUT",
            body: form,
        });
        const result = await responses.json();
        console.log("Operation Successful!", result);
    }
    catch (error) {
        console.log("Operation Failed", error);
    }
}
const form = new FormData();
const file = document.querySelector('input[type="file"]');
form.append("rashar","summa123");
form.append("avatar", file.files[0]);
upload(form);

//Uploading Multiple Files
async function multiple(formData) {
    try {
        const resp = await fetch("https://example.com/posts", {
            method: "POST",
            body: formData,
        });
        const res = await resp.json();
        console.log("Success!", res);
    }
    catch(error) {
        console.log("Failed!", error);
    }
}
const photos = document.querySelector('input[type="file][multiple]');
const formData = new FormData();
form.append("title", "Goa trip");
for (const [i, photos] of Array.from(photos.files).entries()) {
    formData.append(`photos_${i}`, photo);
}
multiple(formData);