// CONDITIONAL STRUCTURE (IF/ELSE): Used to execute a series of steps IF something is true.
/* The program below takes a number value from the text box 
and states if that number is divisible by 10, 5 or 2 */

let conditional_number;
const GET_NUMBER_BUTTON = document.getElementById("submit_number_button");
const GET_p5 = document.getElementById("p5");

GET_NUMBER_BUTTON.onclick = function(){
    conditional_number = document.getElementById("text_box3").value;
    conditional_number = Number(conditional_number);

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

    if(conditional_number == 1){
        GET_p5.textContent = ("This is the number 1");
    } else if (conditional_number == 0){
        GET_p5.textContent = ("This is the number 0")
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
    } 
    else if(GRADUATED.checked){
        GET_p6.textContent = ("Okay! You already graduated.");
    } 
    else if(PHD.checked){
        GET_p6.textContent = ("Okay! You have a PhD.");
    } 
    else {
        GET_p6.textContent = ("Okay! I can see you don't have any educational formation. Don't worry It's all right!");
    }

    if(STUDENT.checked){
        GET_p7.textContent = ("Okay! You're a student.");
    }
    else if(PROFESSOR.checked){
        GET_p7.textContent = ("Okay! You're a professor.");
    }
    else{
        GET_p7.textContent = ("Okay! Tou're not a student or a professor.");
    }
}


// Ternary Operator (basically the same thing as an if / else statetment, but It's more condensed and easier to read)

let time = 12;
let message = time <= 10 ? "Good Morning" : "Good Day";
console.log(message);

/* 
It would be exactly like: 

(...) = function {
    if (time <= 10){
        message = ("Good Morning");
    } else {
        message = ("Good Day");
    }
    console.log(message);
}

This kind of feature would mean less lines
*/


/* 
SWITCH/CASE: Not commonly used in any language due to It's specific use.
Also not every language has It which makes It dificcult to use in bigger projects.
It's largeness makes It unpopular and unusable, BUT It's a valid conditional structure.
Could easily be substituted by IF/ELSE operations.s
*/

let switch_case_number;
const GET_SWITCH_CASE_BOX = document.getElementById("switch_case_text_box");
const GET_SWITCH_CASE_BUTTON = document.getElementById("switch_case_submit");
const GET_p8 = document.getElementById("p8");

GET_SWITCH_CASE_BUTTON.onclick = function(){
    switch_case_number = GET_SWITCH_CASE_BOX.value;
    switch_case_number = Number(switch_case_number);
    switch(switch_case_number){
        case 1:
            GET_p8.textContent = ("Today is Sunday");
            break;
        case 2:
            GET_p8.textContent = ("Today is Monday");
            break;
        case 3:
            GET_p8.textContent = ("Today is Tuesday");
            break;
        case 4:
            GET_p8.textContent = ("Today is Wedsneday");
            break;
        case 5:
            GET_p8.textContent = ("Today is Thursday");
            break;
        case 6:
            GET_p8.textContent = ("Today is Friday");
            break;
        case 7:
            GET_p8.textContent = ("Today is Saturday");
            break;
        default:
            GET_p8.textContent = ("Not a valid operation. Please try again.");
    }
}
