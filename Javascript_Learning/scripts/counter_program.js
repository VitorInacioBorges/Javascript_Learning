// Making a counterprogram with constants and functions:

const increase = document.getElementById("increase_button");
const reset = document.getElementById("reset_button");
const decrease = document.getElementById("decrease_button");
const counter_digit = document.getElementById("counter_digit");
let count = 0;

increase.onclick = function(){
    count++;
    counter_digit.textContent = count;
}

reset.onclick = function(){
    count = 0;
    counter_digit.textContent = count;
}

decrease.onclick = function(){
    count--;
    counter_digit.textContent = count;
}