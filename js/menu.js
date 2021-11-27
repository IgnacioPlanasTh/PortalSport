/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


let path = window.location.pathname;
let page = path.split("/").pop();



console.log(page)
let A_accueil=document.getElementById("acueil-link");
let A_callisthenie=document.getElementById("calisthenics-link");
let A_gym=document.getElementById("gym-link");
let A_running=document.getElementById("running-link");
let A_crossfit=document.getElementById("crossfit-link");
let A_aPropos=document.getElementById("contact-link");
let A_creerEntrainement=document.getElementById("creerEntrainement-link");

if(page==="acueil.html"){
    A_accueil.className+=" active";
}else if(page==="calisthenics.html"){
    A_callisthenie.className+=" active";
}else if(page==="gym.html"){
    A_gym.className+=" active";
}else if(page==="crossfit.html"){
    A_crossfit.className+=" active";
}else if(page==="running.html"){
    A_running.className+=" active";
}else if(page==="creerEntrainement.html"){
    A_creerEntrainement.className+=" active";
}

console.log(A_aPropos,A_accueil,A_callisthenie,A_creerEntrainement,A_gym,A_running,A_crossfit);

