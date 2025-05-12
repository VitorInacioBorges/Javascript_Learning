/*
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

let username = "";
while (username == ""){
    username = window.prompt(`Enter your username`);
}
console.log(`Hello ${username}`);