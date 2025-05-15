/* 
--- LOOP STRUCTURES ---


WHILE: 
Used to make infinite loops or repetition structures.
- Structure:

while (condition){
    action1;
    action2;
    ...
    action(x);
}

While the condition is true the actions are executed in order from
up to bottom. If suddenly the condition turn out to be false, the code,
below the while structure, is going to be read.
*/
/*
// Example 1:

let username = "";

while (username === ""){
    username = window.prompt(`Enter your username`);
}

console.log(`Hello ${username}`);

// Example 2:

let logged = false;
let username3, password3;

while (!logged){
    username3 = window.prompt(`Enter your username`);
    password3 = window.prompt(`Enter your password`);

    if ((username3 === "name") && (password3 === "password")){
        console.log(`${username3}, you're logged in!`);
        logged = true;
    } else {
        console.log(`Invalid!! Try again.`);
    }
}

/* 
DO WHILE:
Variation of a while. Not usually used in bigger scales but very useful. 
- Structure:

do {
    action1;
    action2;
    action3;
} while (condition);

First, the actions are executed at least once. After the first execution the 
program checks if the condition whithin the while is true, if It is, then 
It repeats, if not, then actions below the while will be executed.
*/
/*
let username2 = "";

do {
    username = window.prompt('Enter your username');
} while (username2 === "" || username2 === null);

console.log(`Hello ${username2}`);

/*
FOR:

It is loop that is most used and common in programming, due to Its conveniency
- Structure:

for (<starting_assigment>; <condition>; <increment/decrement>){
    action1;
    action2;
    ...
    action(x);
}

The starting assignment is usually used to make a starting counter on a variable.
The variable can be declarated whithin the loop and is executed only once. The condition
is the main standard. It sets a stop condition that is checked after every execution.
Last but not least, the increment and decrement is the standard that makes our program
non-infinite and helps the for stay limited.

P.S.: All of those three can be used without each other. That means that I can create
a loop without the first iteration, condition or increment/drecement at all.
*/

// Example 1:

for (let i = 0; i <= 10; i++){
    console.log(i);
}
console.log(`End of program`);

/* 
P.S.: All of these three loop kinds are able to hold a unique set of order:
- continue; 
- break;

continue; - Used to skip an iteration.
break; - Used to break the loop.
*/

// Example 1:

for (let i = 1; i <= 10; i++){
    if(i == 4){ // 4 is considered the devil's number in japanese culture
        continue;
    }
    console.log(i);
}

// Exmaple 2:

for (let i = 1; ; i++){
    console.log(i);
    if (i == 100){
        break;
    }
}