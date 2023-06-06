var counter = 0;
  
var counterValue = document.getElementById('counter-value');
var incrementBtn = document.getElementById('increment-btn');
var decrementBtn = document.getElementById('decrement-btn');
var resetBtn = document.querySelector('#reset');

function incriment(){
    counter++
    counterValue.innerHTML = counter;
    }

function deccriment(){
    counter--;
    counterValue.innerHTML = counter;
    }

function clickit(){

    counter = 0;
    counterValue.innerHTML = counter;
}
