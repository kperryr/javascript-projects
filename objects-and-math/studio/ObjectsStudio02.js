// Code your orbitCircumference function here:

let orbitCircumference = function(r){
  let c = round(Math.PI * 2* r);
  return c;
};


// Code your missionDuration function here:

let missionDuration = function(numOrbits, orbSpeed = 28000, ordRadius = 2000){

  let distance = orbitCircumference(ordRadius);
  let time = (numOrbits*distance)/orbSpeed;
  let timeRounded = round(time*100)/100;

  console.log(`The mission will travel ${distance} km around the planet, and it will take ${timeRounded} hours to complete.`);
  return time;

};

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

// Code your oxygenExpended function here:

let oxygenExpended = function(obj){
  let spaceWalkTime = missionDuration(3);
  let o2 = obj.o2Used(spaceWalkTime);
  return `${obj.name}will perform the spacewalk, which will last ${spaceWalkTime} hours and require ${o2} kg of oxygen.`



};


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 