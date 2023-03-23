"use strict";

function domRemoveParticipant(event) {
    // TODO
   //
   //let id = event.target.parentNode.rowIndex;
  /* let ime = document.querySelector("#participant-table").rows[event.target.parentNode.rowIndex].cells[0].innerHTML;
  
    confirm(ime +"?",     event.target.parentElement.remove()
    )*/
  /* confirm( "Naj zbrisem???",  
   document.querySelector("#participant-table").deleteRow(event.target.parentElement))*/
  // document.querySelector("#participant-table").deleteRow(event.target.parentElement)
 // confirm( document.querySelector("#participant-table").remove(id))

 let brisanje = document.getElementById("participant-table").innerHTML
 console.log(brisanje)
 

 this.remove();



}

function domAddParticipant(participant) {
    var table = document.querySelector("#participant-table");
    //console.log(table)
    const tr = document.createElement("tr")
    table.appendChild(tr)  //vrstico na tabelo
    tr.ondblclick = domRemoveParticipant

    for(const attr in participant){
        const td = document.createElement("td")
        td.innerText = participant[attr]
        tr.appendChild(td) //data na vrstico
    }

 
}

function addParticipant(event) {
    // TODO: Get values


    const first = document.querySelector("#first").value; //queary selector isce z # po id 
    const last = document.querySelector("#last").value;
    const role = document.querySelector("#role").value;
    
    // TODO: Set input fields to empty values
    // ...
    document.querySelector("#first").value = "";
    document.querySelector("#last").value = "";
    
    // Create participant object
    const participant = {
        first: first,
        last: last,
        role: role
    };
    //console.log(participant);

    // Add participant to the HTML
    domAddParticipant(participant);

    // Move cursor to the first name input field
    document.getElementById("first").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here
    // inicializacijska koda 
    document.getElementById("addButton").onclick = addParticipant;
})


// The jQuery way of doing it
$(document).ready(() => {
    // Alternatively, you can use jQuery to achieve the same result
});
