const increaseB = document.getElementById("increase_button");
const resetB = document.getElementById("reset_button");
const decreaseB = document.getElementById("decrease_button");
const counter_digit = document.getElementById("counter_digit");
let count = 0;

increaseB.onclick = function() {
    count++;
    counter_digit.textContent = count;
}

resetB.onclick = function() {
    count = 0;
    counter_digit.textContent = count;
}

decreaseB.onclick = function() {
    count--;
    counter_digit.textContent = count;
}