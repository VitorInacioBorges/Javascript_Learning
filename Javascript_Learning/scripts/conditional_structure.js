// CONDITIONAL STRUCTURE (IF/ELSE): Used to execute a series of steps IF something is true.
/* The program below takes a number value from the text box 
and states if that number is divisible by 10, 5 or 2 */

let conditional_number;
const GET_NUMBER_BUTTON = document.getElementById("submit_number_button");
const GET_p5 = document.getElementById("p5");

GET_NUMBER_BUTTON.onclick = function(){
    conditional_number = document.getElementById("text_box3").value;
    conditional_number = Number(conditional_number);

    if(conditional_number == 1){
        GET_p5.textContent = ("This is the number 1");
    }
    if((conditional_number % 10) == 0){
        GET_p5.textContent = ("This number is divisible by 10");
        if((conditional_number % 5) == 0){
            GET_p5.textContent = ("This number is divisible by 10 and 5");
            if((conditional_number % 2) == 0){
                GET_p5.textContent = ("This number is divisible by 10, 5 and 2");
            }
        }
    } else if((conditional_number % 5) == 0){
        GET_p5.textContent = ("This number is divisible by 5");
        if((conditional_number % 2) == 0){
            GET_p5.textContent = ("This number is divisible by 5 and 2");
        }
    } else if((conditional_number % 2) == 0){
        GET_p5.textContent = ("This number is divisible by 2");
    } else {
        GET_p5.textContent = ("This number is NOT divisible by 10, 5 or 2");
    }
}

// ".checked" checks if a checkbox or radio button was checked. For example:

const GET_p6 = document.getElementById("p6");
const GET_p7 = document.getElementById("p7");
const EDUCATIONAL_BUTTON = document.getElementById("educational_state_button");
const HIGH_SCHOOL = document.getElementById("high_school");
const GRADUATED = document.getElementById("graduated");
const PHD = document.getElementById("PhD");
const STUDENT = document.getElementById("student_check_box");
const PROFESSOR = document.getElementById("professor_check_box");

EDUCATIONAL_BUTTON.onclick = function(){
    if(HIGH_SCHOOL.checked){
        GET_p6.textContent = ("Okay! You finished High School.");
        if(GRADUATED.checked){
            GET_p6.textContent = ("Okay! You already graduated.");
            if(PHD.checked){
                GET_p6.textContent = ("Okay! You have a PhD.");
            }
        }
    } else if(GRADUATED.checked){
        GET_p6.textContent = ("Okay! You already graduated.");
        if(PHD.checked){
            GET_p6.textContent = ("Okay! You have a PhD.");
        }
    } else if(PHD.checked){
        GET_p6.textContent = ("Okay! You have a PhD.");
    } else {
        GET_p6.textContent = ("Okay! I can see you don't have any educational formation. Don't worry It's all right!");
    }
}

