// METHOD CHAINING: used to do consecutive actions using less lines and avoiding unecessary process, such as creation of variables.

let email = "vitorinacioborges@gmailcom";

// NO METHOD CHAINING

let firstLetter = email.charAt(0);
let emailUsername = email.slice(1, email.indexOf("@"));
firstLetter = firstLetter.toUpperCase();

let emailAdress = email.slice(email.indexOf("@"));
let substitute = emailAdress.replaceAll("@", "-");

email = firstLetter + emailUsername + emailAdress;
console.log(email);

// METHOD CHAINING

email = email.charAt(0).toUpperCase() + email.slice(1, email.indexOf("@")) + email.slice(email.indexOf("@")).replaceAll("@", "-");
console.log(email);

// Expected result: "Vitorinacioborges-gmail.com"