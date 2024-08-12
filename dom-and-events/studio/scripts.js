// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {

const takeoff = document.getElementById("takeoff");
const status = document.getElementById("flightStatus");
const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
const shuttleBack = document.getElementById("shuttleBackground");
const landing = document.getElementById("landing");
const missionAbort = document.getElementById("missionAbort");
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
const rocket = document.getElementById("rocket");




takeoff.addEventListener('click', event => {
    const qA = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if ( qA === true){
        status.innerHTML = "Shuttle in flight.";
        shuttleBack.style.background = "blue";
        spaceShuttleHeight.innerHTML = 10000;
        //rocket.style.bottom = "10px";
    }
});

landing.addEventListener('click',event =>{
    window.alert("The shuttle is landing. Landing gear engaged.");
    status.innerHTML = "The shuttle has landed.";
    shuttleBack.style.background = "green";
    spaceShuttleHeight.innerHTML = 0;
    //rocket.style.bottom = "0px";
} );

missionAbort.addEventListener('click',event =>{
    const qA = window.confirm("Confirm that you want to abort the mission.");
    if ( qA === true){
        status.innerHTML = "Mission aborted.";
        shuttleBack.style.background = "green";
        spaceShuttleHeight.innerHTML = 0;
        //rocket.style.bottom = "0px";
    }     
} );

up.addEventListener('click', event =>{
    let miles = spaceShuttleHeight.innerHTML;
    miles = Number(miles) + 10000;
    spaceShuttleHeight.innerHTML = String(miles);
/* 
    if(rocket.style.bottom =="") {
        rocket.style.bottom = "0px";
     } */
    let h = parseInt(rocket.style.bottom) + 10 +"px";
    console.log(h);
    //h = parseInt(h)+ 10;
    rocket.style.bottom = h + "px";


});

down.addEventListener('click', event =>{
    let miles = spaceShuttleHeight.innerHTML;
    if (Number(miles) > 0){
        miles = Number(miles) - 10000;
        spaceShuttleHeight.innerHTML = String(miles);
    }

    if(rocket.style.bottom =="") {
        rocket.style.bottom = "0px";
     }

     if(parseInt(rocket.style.bottom) > 0){
        let h = rocket.style.bottom;
        h = parseInt(h)- 10;
        rocket.style.bottom = h + "px";
     }
});

left.addEventListener('click', event =>{
   

    if(rocket.style.left =="") {
        rocket.style.left = "275px";
     }

    
        let l = rocket.style.left;
        l = parseInt(l)- 10;
        rocket.style.left = l + "px";
     
});

right.addEventListener('click', event =>{
   

    if(rocket.style.left =="") {
        rocket.style.left = "275px";
     }

    
        let l = rocket.style.left;
        l = parseInt(l) + 10;
        rocket.style.left = l + "px";
     
     
});


}

window.addEventListener("load", init);
