/*
DIFFERENT TYPES OF EQUALITY AND INEQUALITY:

- Assingment Operator ( = ): 
It assigns a value to a function, variable, and others.

- Equality Operator ( == ):
It compares a value to another and check if they're equal.

- Strict Equality Operator ( === ):
It compares not only values but datatypes as well. It checks if they're NOT equal.

- Inequality Operator ( != ):
It compares a value to another and check if they're NOT equal.

- Strict Inequalty Operator ( !== ):
It compares not only values but datatypes as well. It checks if they're NOT equal.

*/

// 1. Assignment Operator
let value = 0, numberString = "0", statement = true;
let phrase = "Oh my God!", phrase2 = "Oh my Cow!", phrase3 = "Oh my Chicken!";
let combo = phrase + phrase2 + phrase3;

// 2. Equality Operator
if (statement == true){
    phrase = "statement is true";
} else {
    phrase = "statement is false";
}
console.log(phrase);

if (value == numberString){
    phrase = "value and numberString are equal";
} else {
    phrase = "value and numberstring are NOT equal";
}
console.log(phrase);

// 3. Strict Equality Operator
if (value === numberString){
    phrase = "Equal values and datatypes!";
} else {
    phrase = "Inequal values or datatypes!";
}
console.log(phrase);

// 4. Inequality Operator
if (value != 1){
    phrase = "value is NOT 1";
} else {
    phrase = "value is 1";
}
console.log(phrase);

// 5. Strict Inequality Operator
if (value !== numberString){
    phrase = "Unequal values or datatypes";
} else {
    phrase = "Equal values and datatypes";
}
console.log(phrase);