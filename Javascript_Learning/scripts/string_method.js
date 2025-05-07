// STRING METHOD: used to manipulate and work with texts (strings)

let myname = "VitorInacio";
let result = myname.startsWith(" ");
let includes = myname.includes(" ");

console.log(myname.charAt(0));
console.log(myname.indexOf("i"));
console.log(myname.lastIndexOf("i"));
console.log(myname.length);
console.log(result);

if(result){
    console.log("Your name can't begin with ' '.");
} else if(includes){
    console.log("Your name can't include ' '.");
} else{
    console.log(myname);
}

let blank = "/   ";
blank = blank.trim();

console.log(blank);

// STRING SLICING: creation of a string from a pre-existing string

// NON DYNAMIC METHOD:

let prename = myname.slice(0, 5);
let posname = myname.slice(5, 11);
let firstChar = myname.slice(0, 1);
let lastChar = myname.slice(-1);

console.log(prename);
console.log(posname);
console.log(firstChar);
console.log(lastChar);

// DYNAMIC METHOD:

let myName2 = "Joseph Joestar";
let firstName2 = myName2.slice(0, myName2.indexOf(" "));
let lastName2 = myName2.slice(myName2.indexOf(" "));

console.log(firstName2);
console.log(lastName2);