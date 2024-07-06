let superChimpOne = {
   name: "Chad",
   astronautID : 1,
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let salamander = {
   name: "Lacey",
   astronautID: 2,
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let superChimpTwo = {
   name: "Brad",
   astronautID: 3,
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let dog = {
   name: "Leroy",
   astronautID: 4,
   species: "Beagle",
   mass: 14,
   age: 5,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let immortalAnimal = {
   name: "Almina",
   astronautID: 5,
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move: function(){
      return Math.floor(Math.random()*11)
   }
};

let crew = [superChimpOne,salamander,superChimpTwo,dog, immortalAnimal];


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} 
      years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`);

}

// Start an animal race!

function fitnessTest(arr){
   let min_val = 0;
   let i = 0;
   let steps = [];
   let turns = [];

   while(min_val < 20){

      for (i = 0; i< arr.length; i++){
         
         if(steps[i]<20 ) {
            steps[i] += arr[i].move();
            console.log(steps[i]);
            turns[i] += 1;
         }
         if (typeof steps[i] == "undefined" ){
            steps[i] = arr[i].move();
            turns[i] = 1;
         }
      }
      min_val = Math.min(...steps);

   
   }
   return turns;
}

let race_results = fitnessTest(crew);

for (let i = 0; i<crew.length; i++){
   console.log(`${crew[i].name} took ${race_results[i]} turns to take 20 steps.`);
}