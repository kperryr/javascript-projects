//TODO: Add Your Code Below
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        jsonPromise = response.json();
        jsonPromise.then( function(json) {
                let container = document.getElementById("container");
                let astronautList = '';
                let hoursArray = [];
        
        
                for (let i = 0; i < json.length; i++) {
                        hoursArray.push(json[i].hoursInSpace)
                }
        
                    hoursArray.sort((a,b) => b-a);
                    console.log(hoursArray);
        
                for (let i = 0; i < hoursArray.length; i++) {
                    for ( let j = 0; j < json.length; j++) {
                //console.log(json[j].hoursInSpace);

                        if (hoursArray[i] === json[j].hoursInSpace){
                            astronautList += `
                                     <div class="astronaut">
                                        <div class="bio">
                                         <h3>${json[j].firstName} ${json[j].lastName}</h3>
                                          <ul>
                                          <li>${json[j].hoursInSpace}</li>
                                            <li>Active: ${json[j].active}</li>
                                            <li>Skills: ${json[j].skills}</li>
                                            </ul>
                                        </div>
                                    <img class="avatar" src="${json[j].picture}">
                                    </div>`
                        }
                    }
                }
            container.innerHTML = astronautList;
        })
    })
})