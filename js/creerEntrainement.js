"use strict"

let urlParams = new URLSearchParams(window.location.search);
let typeEntrainement= urlParams.get("entrainement");

let entrainementDIV = document.getElementById("entrainement")
if(typeEntrainement==="callisthenie"){
    entrainementDIV.innerText="Vous avez choisi la callisthenie"
}else if(typeEntrainement==="gym"){
    entrainementDIV.innerText="Vous avez choisi le gym"
}else if(typeEntrainement==="running"){
    entrainementDIV.innerText="Vous avez choisi running"
}else if(typeEntrainement==="crossfit"){
    entrainementDIV.innerText="Vous avez choisi crossfit"
}else{
    entrainementDIV.innerText="Erreur"
}