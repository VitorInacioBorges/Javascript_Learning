/* Changing the type of a value in Javascript */
// String / Booleans / Numbers

let age = window.prompt("How old are you");
age = Number(age);
age+=1;
console.log(age);

// Word Test 

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// Number Test

let a = "0";
let b = "0";
let c = "0";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// Empty Quotes Test

let e = "";
let f = "";
let g = "";

e = Number(e);
f = String(f);
g = Boolean(g);

console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);