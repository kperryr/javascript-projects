const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let substring = str.slice(0,3);
let newstr = str.replace("Lau","") + substring;
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`OG string: ${str}  New string: ${newstr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Please enter the number of letters that will be relocated");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(Number(userInput) > newstr.length){
    let movingChar = 3;
    console.log(`Your input ${userInput} exceeded the length of the string ${newstr.length}. Character num is now ${movingChar}.`);
    
}else{
    movingChar = Number(userInput);
}