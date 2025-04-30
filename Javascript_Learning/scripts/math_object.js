/* Math Objects: used in math commonly */

console.log(Math.PI);
console.log(Math.E);

let n = -3, x = 2, y = 3, z = 1, a = 3.98, b = 4.4, c;

// Rounds the number
c = Math.round(b); // 4
// Rounds the number DOWN
c = Math.floor(a); // 3
// Rounds the number UP
c = Math.ceil(b); // 5
// Eliminate the decimal part of a number
c = Math.trunc(a); // 3
// Powers the number
c = Math.pow(x, y); // 8
// Gives u the square root of a number
c = Math.sqrt(81); // 9
// Gives you the natural logarithm of a number
c = Math.log(10); 
// Gives you the sinus/cosinus/tangent of a number
c = Math.sin(x);
c = Math.cos(x);
c = Math.tan(x);
// Gives you the absolute value of a number
c = Math.abs(n); // 3
// States what is the maximum or the minimum value within a parenthesis
let max = Math.max(x, y, z); // 3(y)
let min = Math.max(x, y, z); // 1(z)