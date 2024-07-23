//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
    constructor(name,mass,scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    } 

    addScore(new_score){
        this.scores.push(new_score);

    }

    average(){
        let sum = 0;
        for (let i in this.scores)
            sum += this.scores[i];

        
        
        let avg = Math.round(sum/ (this.scores.length)*10)/10;
        return avg;

    }

    status(){

        let avg = this.average();

        if (avg >= 90){
            return "Accepted";
        }else if(avg >= 80 && avg <90){
            return "Reserve";
            
        }else if( avg >=70 && avg <80){
            return "Probationary";
        }else{
            return "Rejected";
        }
    }

}



const bubba_bear = new CrewCandidate("Bubba Bear",135,[88,85,90]);
const merry_maltese = new CrewCandidate("Merry Maltese",1.5,[93,88,97]);
const glad_gator = new CrewCandidate("Glad Gator",225,[75,78,62]);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubba_bear.addScore(83);
console.log(bubba_bear.scores);

console.log(merry_maltese.average());

console.log(` ${bubba_bear.name} earned an average test score of ${bubba_bear.average()}% and has a status of ${bubba_bear.status()}.`);
console.log(` ${merry_maltese.name} earned an average test score of ${merry_maltese.average()}% and has a status of ${merry_maltese.status()}.`);
console.log(` ${glad_gator.name} earned an average test score of ${glad_gator.average()}% and has a status of ${glad_gator.status()}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let k = 0;
while(! (glad_gator.status() === "Reserve")){
    glad_gator.addScore(100);
    k++;

}
console.log(` ${glad_gator.name} earned an average test score of ${glad_gator.average()}% and has a status of ${glad_gator.status()}.`);
console.log(k);

k = 0;
while(! (glad_gator.status() === "Accepted")){
    glad_gator.addScore(100);
    k++;

}
console.log(` ${glad_gator.name} earned an average test score of ${glad_gator.average()}% and has a status of ${glad_gator.status()}.`);
console.log(k);

