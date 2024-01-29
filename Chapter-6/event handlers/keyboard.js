function displayOutput(myInput1) {
    var out = document.getElementById('myInput1');
    var para = document.createElement('p');
    para.textContent = myInput1;
    out.appendChild(para);
}

const input1 = document.getElementById('myInput1');
input1.addEventListener('keydown', function(event) {
    displayOutput(`Key down: ${event.key}`)
});

function displayOutput(myInput2) {
    var out = document.getElementById('myInput2');
    var para = document.createElement('p');
    para.textContent = myInput2;
    out.appendChild(para);
}
const input2 = document.getElementById('myInput2');
input2.addEventListener('keyup', function(event) {
    displayOutput(`Key released: ${event.key}`)
})