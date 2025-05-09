// METHOD CHAINING: used to do consecutive actions using less lines and avoiding unecessary process, such as creation of variables.

let email = "vitorinacioborges@gmailcom";

// NO METHOD CHAINING

let emailUsername = email.slice(0, email.indexOf("@"));
let firstLetter = emailUsername.charAt(0);
firstLetter = firstLetter.toUpperCase();

let emailAdress = email.slice(email.indexOf("@"));
let substitute = emailAdress.replaceAll("@", "-");

email = emailUsername + emailAdress;
console.log(email);

// METHOD CHAINING

email = email.slice(0, email.indexOf("@")).charAt(0).toUpperCase() + email.slice(email.indexOf("@")).replaceAll("@", "-");
console.log(email);