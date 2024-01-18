const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Form Submitted!");
})

const input1 = document.getElementById('input1');
form.addEventListener('focus', function() {
    console.log("Input Focused!");
})

const input2 = document.getElementById('input2');
form.addEventListener('input', function() {
    console.log(`Input value changed: ${this.value}`);
})
