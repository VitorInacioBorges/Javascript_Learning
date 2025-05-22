/*
VARIABLE SCOPE: where a variable is recognized and legit.
a variable can be in a LOCAL or GLOBAL scope. 2 variables with the same name 
can't be in the same scope.
*/

// Global Scope Ex1:
let x = 1;

// Local Scope Ex2:
function function1(){
    x = 2;
    return x;
}

/* 
If we have 2 variables with the same name, but in different scopes
we'll use the local variables first.
*/

// Ex3:
let y = 3;

function f1(){
    let y = 1;
    console.log(y);
}
f1();