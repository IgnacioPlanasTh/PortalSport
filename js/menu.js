/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Marquer comme "active" la page web dans laquelle on est

// Obtenir le nom de la page
let path = window.location.pathname;
let page = path.split("/").pop();

// Recuperer les links
let A_accueil=document.getElementById("Accueil-link");
let A_callisthenie=document.getElementById("Callisthenie-link");
let A_gym=document.getElementById("Fitness-link");
let A_running=document.getElementById("Running-link");
let A_crossfit=document.getElementById("Crossfit-link");
let A_aPropos=document.getElementById("contact-link");
let A_creerEntrainement=document.getElementById("creerEntrainement-link");
let A_inscription=document.getElementById("inscription-link");

// Marquer comme "active" la page
if(page==="Accueil.html"){
    A_accueil.className+=" active";
}else if(page==="Callisthenie.html"){
    A_callisthenie.className+=" active";
}else if(page==="Fitness.html"){
    A_gym.className+=" active";
}else if(page==="Crossfit.html"){
    A_crossfit.className+=" active";
}else if(page==="Running.html"){
    A_running.className+=" active";
}else if(page==="creerEntrainement.html"){
    A_creerEntrainement.className+=" active";
}else if(page==="contact.html"){
    A_aPropos.className+=" active";
}else if(page==="Inscription.html"){
    A_inscription.className+=" active";
}else{
    console.log("Mauvaise site web");
}