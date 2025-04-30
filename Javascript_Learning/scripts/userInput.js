/* User Input: 2 ways */

// 1. Window Prompt
// 2. HTML Textbox

// First Way (UNREALISTIC)

/*
let username1;

username = window.prompt("What's your username");
console.log(username);
*/

// Second Way (KIND OF REALISTIC)

let username2;

document.getElementById("h1").textContent = "Welcome to your fisrt user input:";
document.getElementById("p1").textContent = "Today you'll begin to put your username";

document.getElementById("submitButton").onclick = function(){
    username = document.getElementById("textBox").value;
    document.getElementById("p3").textContent = `Okay your username is ${username2}!`;
}