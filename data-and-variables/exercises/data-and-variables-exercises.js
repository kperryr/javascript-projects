// Declare and assign the variables below

let shuttle_name = "Determination";
let shuttle_speed = 17500;
let distance_to_mars = 225000000;
let distance_to_moon = 384400;
let mpk = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof shuttle_name);
console.log(typeof shuttle_speed);
console.log(typeof distance_to_mars);
console.log(typeof distance_to_moon);
console.log(typeof mpk);

// Calculate a space mission below
let mile_to_mars = distance_to_mars*mpk;
let hours_to_mars = mile_to_mars/shuttle_speed;
let days_to_mars = hours_to_mars/24;

// Print the results of the space mission calculations below
console.log(shuttle_name," will take ",days_to_mars," days to reach Mars.");

// Calculate a trip to the moon below
let mile_to_moon = distance_to_moon*mpk;
let hours_to_moon = mile_to_moon/shuttle_speed;
let days_to_moon = hours_to_moon/24;

// Print the results of the trip to the moon below
console.log(shuttle_name," will take ",days_to_moon," days to reach Moon.");