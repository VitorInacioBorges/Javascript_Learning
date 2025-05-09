/*
LOGICAL OPERATORS: exist in almost every language (probably all of em). Used in logical operations, number and variable manipulation.

Three types:
1. && (AND)
2. || (OR)
3. ! (NOT / DENIAL)

FOR EXAMPLE:
*/

let number = 2;
let message;
if ((number < 2) || (number > 2)){
    message = ("It's not 2!");
} else {
    message = ("It's 2!");
}
console.log(message);