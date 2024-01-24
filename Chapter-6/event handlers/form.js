const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    displayOutput("Form Submitted!");
})

const input1 = document.getElementById('input1');
form.addEventListener('focus', function() {
    displayOutput("Input Focused!");
})

const input2 = document.getElementById('input2');
form.addEventListener('input', function() {
    displayOutput(`Input value changed: ${this.value}`);
})