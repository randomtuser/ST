"use strict";

function domRemoveParticipant(event) {
    // TODO
    let id = event.target.parentNode.rowIndex;
    if(id<1)
        return;

    let ime = document.getElementById("participant-table").rows[id].cells[0].innerHTML;
    let p = confirm("Are you sure you want to delete "+ ime +"?");

    if(p)
    {
        document.getElementById("participant-table").deleteRow(id);
        saveToLocalStorage();
    }
}

function domAddParticipant(participant) {
    // TODO
    var table = document.getElementById("participant-table");
    var row = table.insertRow();    
    row.insertCell().innerHTML = participant.first;
    row.insertCell().innerHTML = participant.last;
    row.insertCell().innerHTML = participant.role;

    /*
    ALI nekaj takega
    const tr = document.createElement();
    table.appendChild(tr);

    const td1 = document.createElement();
    td1.innerText=participant.first;

    tr.appendChild(td1);
    
    */
}

function addParticipant(event) {
    // TODO: Get values
    const first = document.getElementById("first").value;
    const last = document.getElementById("last").value;
    const role = document.getElementById("role").value;

    if(first.length == 0 || last.length == 0 || role.length == 0)
        return;
    
    // TODO: Set input fields to empty values
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("role").value = "";
    
    
    // Create participant object
    const participant = {
        first: first,
        last: last,
        role: role
    };

    // Add participant to the HTML
    domAddParticipant(participant);

    // Move cursor to the first name input field
    document.getElementById("first").focus();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    let arr=new Array();
    
    let i = 0;
    let table = document.getElementById("participant-table").rows;
    for (let index = 1; index < table.length; index++) {
        const element = table[index];
        const participant = {
            id : i++,
            first: element.cells[0].innerHTML,
            last: element.cells[1].innerHTML,
            role: element.cells[2].innerHTML
        };
        arr.push(participant);        
    }


    
    localStorage.setItem("users", JSON.stringify(arr));
}

document.addEventListener("DOMContentLoaded", () => {
    // This function is run after the page contents have been loaded
    // Put your initialization code here
    document.getElementById("addButton").onclick = addParticipant;
    document.getElementById("participant-table").ondblclick  = domRemoveParticipant;
});

let users = localStorage.getItem("users");
if(users != null)
{
    JSON.parse(users).forEach(element => {
        domAddParticipant(element);
    });
}


// The jQuery way of doing it
$(document).ready(() => {
    // Alternatively, you can use jQuery to achieve the same result
});
