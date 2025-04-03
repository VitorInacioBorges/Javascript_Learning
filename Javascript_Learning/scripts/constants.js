/* Consntans: variables that can't be changed. */

/* Building a program that calculates 
the circumference of a circle given the
radius of IT */

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("radiusButton").onclick = function(){
    radius = document.getElementById("textBox2").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("p4").textContent = `Okay! The circumference of this circle with this radius is ${circumference} cm!`;
}

/* We use constants to make It impossible to change that variable
in the program content. To prevent someone from changing the purpose
of our program */