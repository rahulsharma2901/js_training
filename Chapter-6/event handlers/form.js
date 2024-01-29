const input1 = document.getElementById('input1');
form.addEventListener('focus', function() {
    displayOutput("Input Focused!");
})

function displayOutput(message) {
    var out = document.getElementById('input2');
    var para = document.createElement('p');
    para.textContent = message;
    out.appendChild(para);
}

const input2 = document.getElementById('input2');
form.addEventListener('input', function() {
    displayOutput(`Input value changed: ${this.value}`);
})