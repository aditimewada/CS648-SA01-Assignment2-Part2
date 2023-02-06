window.addEventListener("load",()=>{
    "use strict";   
    window.document.getElementById("form").addEventListener("submit", (e)=> {
        e.preventDefault();
        window.console.log("Id: " + window.document.getElementById("id").value);
        window.console.log("Name: " + window.document.getElementById("full-name").value);
        window.console.log("Extension: " + window.document.getElementById("extension").value);
        window.console.log("Email: " + window.document.getElementById("email").value);
        window.console.log("Department: " + window.document.getElementById("department").value);      
    });
});