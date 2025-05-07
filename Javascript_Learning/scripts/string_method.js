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