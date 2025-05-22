/* 
FUNCTIONS: section of reusable code. It is declared once and can 
be referenced whenever pleased. 
*/

// Adding Function
function add(a, b){
    let result = a + b;
    return result;
}
let answer = add(2, 3);
console.log(answer);

// or...

function add(x, y){
    return x + y;
}
console.log(add(2, 3));

// Even or Odd Function

function even_odd(n){
    if(n % 2 == 0) n = "even";
    else n = "odd";
    return n;
} 
console.log(even_odd(3));

// Valid Phone Number

function isValidPhone(phone){
    if(phone.includes("-") || phone.includes(" ") || phone.includes("+") || phone.includes("(") || phone.includes(")")) return true;
    else return false;
}
console.log(isValidPhone("+55(42)99828-4565"));