/*
LOGICAL OPERATORS: exist in almost every language (probably all of em). Used in logical operations, number and variable manipulation.

Three types:
1. && (AND)
2. || (OR)
3. ! (NOT / DENIAL)

FOR EXAMPLE:
*/

let number = 3;
let message;

if ((number < 2) || (number > 2)){
    message = ("It's not 2!");
} else {
    message = ("It's 2!");
}
console.log(message);

if ((number < 5) && (number > 0)){
    message = ("It's between 0 and 5!");
} else {
    message = ("It's NOT between 0 and 5!");
}
console.log(message);

if (!((number % 2) == 0)) {
    message = ("It's NOT divisible by 2!");
} else {
    message = ("It's divisible by 2!");
}
console.log(message);