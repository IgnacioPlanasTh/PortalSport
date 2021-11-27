"use strict"

let urlParams = new URLSearchParams(window.location.search);
let typeEntrainement= urlParams.get("entrainement");

let entrainementDIV = document.getElementById("entrainement")
let formData = new FormData();


if(typeEntrainement==="callisthenie"){
    showObjective();
    formData.append("sport","callisthenie");
}else if(typeEntrainement==="gym"){
    showObjective();
    formData.append("sport","fitness");
}else if(typeEntrainement==="running"){
    showObjective();
    formData.append("sport","running");
}else if(typeEntrainement==="crossfit"){
    showObjective();
    formData.append("sport","crossfit");
}else{
    montrerPossiblesSports();
}

for (let a of formData.entries()){
    console.log(a);
}

function montrerPossiblesSports(){
     let buttonCalliesthenie=parseHTML("<a class='button' id='callisthenie-button'>Callisthenie</a>");
     let buttonCrossfit=parseHTML("<a class='button' id='crossfit-button'>Crossfit</a>");
     let buttonRunning=parseHTML("<a class='button' id='running-button'>Running</a>");
     let buttonFitness=parseHTML("<a class='button' id='fitness-button'>Fitness</a>");
     buttonCalliesthenie.href="javascript:reloadPage('callisthenie')";
     buttonCrossfit.href="javascript:reloadPage('crossfit')";
     buttonRunning.href="javascript:reloadPage('running')";
     buttonFitness.href="javascript:reloadPage('gym')";
     entrainementDIV.appendChild(buttonCalliesthenie);
     entrainementDIV.appendChild(buttonCrossfit);
     entrainementDIV.appendChild(buttonRunning);
     entrainementDIV.appendChild(buttonFitness);
}

function reloadPage(sport){
    window.location.href=window.location.pathname + "?entrainement="+sport;
}

function parseHTML(str) {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children[0];
}


function showObjective(){
    let title= parseHTML('<div class="row"><div class="col-12 text-center"><h3>Quel est votre objectif?</h3></div></div>')
    entrainementDIV.append(title);
    let mainDIV=parseHTML('<div class="row"> \
                    <div class="col-6"><a class="button text-center" id="gagnerMuscle-button">Gagner Muscle</a></div> \
                    <div class="col-6"><a class="button text-center" id="perdrePoids-button">Perdre Poids</a></div> \
                    </div>');
    let gagnerMuscleButton=mainDIV.querySelector("#gagnerMuscle-button");
    let perdrePoidsButton=mainDIV.querySelector("#perdrePoids-button");
    gagnerMuscleButton.href="javascript:formDataSetGoal('gagnerMuscle')";
    perdrePoidsButton.href="javascript:formDataSetGoal('perdrePoids')";
entrainementDIV.appendChild(mainDIV);
}


let selectedGoal=false;
function formDataSetGoal(value){
    if(selectedGoal==false){
        console.log("selectedGoal==FALSE")
        selectedGoal=true;
        showPoids();
    };
    formData.set('goal',value);
    let gagnerMuscleButton=document.getElementById("gagnerMuscle-button")
    let perdrePoidsButton=document.getElementById("perdrePoids-button")
    gagnerMuscleButton.className = "button text-center"
    perdrePoidsButton.className = "button text-center"
    if(value==="gagnerMuscle")gagnerMuscleButton.className += " button-selected"
    else if (value==="perdrePoids")perdrePoidsButton.className += " button-selected"
    for (let a of formData.entries()){
        console.log(a);
    }
}


function showPoids(){
    
    let title= parseHTML('<div class="row"><div class="col-12 text-center"><h3>Combien pesez-vous ?</h3></div></div>')
    entrainementDIV.append(title);
    let mainDIV=parseHTML('<div class="row">\
                                <div class="col-4 mx-auto"><a class="button text-center" id="poids-1">-45KG</a></div>\
                                <div class="col-4 mx-auto"><a class="button text-center" id="poids-2">45KG-70KG</a></div>\
                                <div class="col-4 mx-auto"><a class="button text-center" id="poids-3">+70KG</a></div>\
      </div>');
      entrainementDIV.append(mainDIV);

      let button45KG= mainDIV.querySelector("#poids-1");
      let button45KG70KG= mainDIV.querySelector("#poids-2");
      let button70KG= mainDIV.querySelector("#poids-3");

      button45KG.href="javascript:formDataSetPoids('poids-1')";
      button45KG70KG.href="javascript:formDataSetPoids('poids-2')";
      button70KG.href="javascript:formDataSetPoids('poids-3')";
}

let selectedPoids=false;
function formDataSetPoids(value){
    formData.set('poids',value);
    if(selectedPoids==false){
        selectedPoids=true;
        showSumbit();
    }else{
        updateSubmitButton();
    }
    let button45KG= document.querySelector('#poids-1');
    let button45KG70KG= document.querySelector('#poids-2');
    let button70KG= document.querySelector('#poids-3');
    
    button45KG.className="button text-center";
    button45KG70KG.className="button text-center";
    button70KG.className="button text-center";

    if(value=="poids-1"){
        button45KG.className+=" button-selected";
    }else if(value=="poids-2"){
        button45KG70KG.className+=" button-selected";
    }else if(value=="poids-3"){
        button70KG.className+=" button-selected";
    }
    for (let a of formData.entries()){
        console.log(a);
    }
}

function showSumbit(){
    console.log("SHOW SUBMIT");
    let sumbitButtonDIV= parseHTML('<div class="row"><div class="col-12 text-center"><a class="submit-button text-center" id="submit">Voir entrainement</a></div></div>')
    let sumbitButton= sumbitButtonDIV.querySelector("#submit");
    let string='?sport={1}&goal={2}&poids={3}'.replace("{1}",formData.get("sport"))
                                              .replace("{2}",formData.get("goal"))
                                              .replace("{3}",formData.get("poids"))
    sumbitButton.href="entrainement.html"+string;
    entrainementDIV.append(sumbitButtonDIV);
}

function updateSubmitButton(){
    let sumbitButton= document.querySelector("#submit");
    let string='?sport={1}&goal={2}&poids={3}'.replace("{1}",formData.get("sport"))
                                              .replace("{2}",formData.get("goal"))
                                              .replace("{3}",formData.get("poids"))
    sumbitButton.href="entrainement.html"+string;
}