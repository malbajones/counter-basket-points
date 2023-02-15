let button = document.getElementById('btn1');
let button1 = document.getElementById('btn2');
let button2 = document.getElementById('btn3');
let button3 = document.getElementById('btn4');
let button4 = document.getElementById('btn5');
let button5 = document.getElementById('btn6');

var display = document.getElementById('scoreMaster1');
var display1 = document.getElementById('scoreMaster2');

var count = 0;
var count1= 0;

button.addEventListener('click', function() {
  count = count + 1;
  display.innerHTML = count; 
});

button1.addEventListener('click', function() {
  count += 2;
  display.innerHTML = count; 
});

button2.addEventListener('click', function() {
  count += 3;
  display.innerHTML = count; 
});

button3.addEventListener('click', function() {
  count1 = count1 + 1;
  display1.innerHTML = count1; 
});

button4.addEventListener('click', function() {
  count1 += 2;
  display1.innerHTML = count1; 
});

button5.addEventListener('click', function() {
  count1 += 3;
  display1.innerHTML = count1; 
});

function reset() {
       count = 0;
       count1 = 0;
       display.innerHTML = count;
       display1.innerHTML = count1;
   }