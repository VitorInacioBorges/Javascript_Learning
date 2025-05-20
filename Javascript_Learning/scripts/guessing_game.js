const MIN = 1, MAX = 100;
let guess;
let answer = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

for(let attempts = 0; ; attempts++){
    guess = window.prompt(`Please guess a number between ${MIN} and ${MAX}:`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    } else if (guess < MIN || guess > MAX){
        window.alert("Please enter a valid number");
    } else {
        if(guess < answer){
            window.alert("HIGHER!!!");
        } else if(guess > answer){
            window.alert("LOWER!!!");
        } else {
            window.alert(`CORRECT! It took you ${attempts} attempts.`);
            break;
        }
    }
}