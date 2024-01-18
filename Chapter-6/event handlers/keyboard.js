const input = document.getElementById('myInput');
input.addEventListener('keydown', function(event) {
    console.log(`Key down: ${event.key}`)
});

const input2 = document.getElementById('newInput');
input.addEventListener('keyup', function(event) {
    console.log(`Key released: ${event.key}`)
})