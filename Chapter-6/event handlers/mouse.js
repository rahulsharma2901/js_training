//click
const button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "Red";
});

//mouseover
const button2 =document.getElementById('button2');
button2.addEventListener('mouseover', function() {
    this.style.backgroundColor = "rgb(0,150,255)";
});

//mouseout
const button3 = document.getElementById('button3');
button3.addEventListener('mouseout', function() {
    this.style.backgroundColor = "Yellow";
})

//mousedown
const button4 = document.getElementById('button4');
button4.addEventListener('mouseup', function() {
    this.style.backgroundColor = "Pink";
});

//mouseup
const button5 = document.getElementById('button5');
button5.addEventListener('mousedown', function() {
    this.style.backgroundColor = "Green";
});

//mousemove
const button6 = document.getElementById('button6');
button6.addEventListener('mousemove', function() {
    this.style.color = "Purple";
});