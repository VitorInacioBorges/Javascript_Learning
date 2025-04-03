/* Variable: container of a value that
can be displayed in the screen or just
declared */

// 1. declaration Ex: let x;
// 2. assignment Ex: x = 100;

//displaying a variable
let x = 140;
let age = 25;
let price = 10.99;

// displaying a variable
console.log(x);
console.log(age);
console.log(price);

// displaying a variable with Its placeholder
console.log(`'x' value is ${x}`);
console.log(`I am ${age} years old`);
console.log(`The price is ${price} dollars`);

//displaying Its variable type
console.log(typeof price);
console.log(typeof age);
console.log(typeof x);

//STRING variables (characters)
let firstName = "Vitor";
let food = "Lasagna";
console.log(typeof firstName);
console.log(firstName);
console.log(`My name is ${firstName}`);
console.log(`My favorite meal is ${food}`);

//BOOLEANS variables (true or false)
let married = true;
let happy = false;

console.log(typeof married);
console.log(`My father is married: ${married}`);
console.log(`My father is happy: ${happy}`);

//Exercising:
let fullName = "Vitor Inacio Borges";
let height = 1.81;
let studying = true;

document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `My height is ${height} meters`;
document.getElementById("p3").textContent = `I am studying. This phrase is ${studying}`;