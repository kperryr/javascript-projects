let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",").sort();
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(food,equipment,pets,sleepAids);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let info = input.question("Select a cabinet number (0-3)");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
info = Number(info);
if (info >= 0 && info <= 3) {
    console.log(`The contents of cabinet ${info} are ${cargoHold[info]}.`)
} else {
    console.log('Error: number is out of bounds.')
    }
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
info = input.question("Select a cabinet number (0-3) ");
let info2 = input.question("Select an item you are looking for ");
info = Number(info);
if (info >= 0 && info <= 3) {
    let check = cargoHold[info].includes(info2);
    if(check){
        console.log(`Cabinet ${info} DOES contain ${info2}.`);
    } else {
        console.log(`Cabinet ${info} DOES NOT contain ${info2}.`);
    }
} else {
    console.log('Error: number is out of bounds.');
    }
