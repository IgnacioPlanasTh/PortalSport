"use strict"

let exercices=



{"Pompes":"pompes.gif",
'Tractions':'tractions.gif',
'Squats':'squats.gif',
"Fentes":"fentes.gif",
"Hip thrusts":"hipThrusts.gif",
"Soulevées de terre":"souleveDeTerre.gif",
"Bench press":"benchPress.gif",
"Elevations frontales":"elevationsFrontales.gif",
"Battle rope":"battleRope.gif",
"Rameur":"rameur.gif",
"air-squat":"airSquatCAL.gif;",
"Mountain climbers":"images.gif"
"Burpee":"Burpee.gif",
"squats sautés":"squatsSautés.gif",
"Fentes sautées":"fentesSautées.gif",
"V-ups":"v-ups.gif",

};







let urlParams = new URLSearchParams(window.location.search);
let sport= urlParams.get("sport");
let goal= urlParams.get("goal");
let poids= urlParams.get("poids");

let parsedGoal=null;
if(goal=="gagnerMuscle") parsedGoal="gagner muscle";
else if(goal="perdrePoids") parsedGoal="perdre poids";

let parsedPoids=null;
if(poids=="poids-1")parsedPoids="-45kg";
else if(poids=="poids-2")parsedPoids="45-70kg";
else if(poids=="poids-3")parsedPoids="+70kg";

let DIV = document.getElementById("main");
if(sport==null || parsedPoids == null || parsedGoal==null) DIV.innerHTML=`<h3>S'il vous plait, choisisez d'abord l'entrainement sohuaité <a class="text-white" href="creerEntrainement.html">ici</a></h3><br>`
else DIV.innerHTML= "<h3>Voici les resultats pour le sport '" + sport + "', le goal de " + parsedGoal + " pour le poids " + parsedPoids+"</h3><br>"; 

let entrainement1=[
    ["Battle rope","3x15"],
    [ "Hip thrusts","5x5"],
    ["Tractions","4x8"], 
    ["Soulevées de terre","4x10"]];

    let entrainement2=[
        ["Hip thrusts","4x15"],
        ["Tractions","5x5"],
        ["Tractions","4x8"], 
        ["Bench press","4x10"]];


showEntrainement(entrainement2);

function showEntrainement(entrainement){
    let exercicesDIV=document.getElementById("exercices");
    // exercicesDIV.innerHTML="";
    let i = 1;
    for(let exercice of entrainement){
        let div0=parseHTML("<div>"+i+"</div>");
        let div1=parseHTML('<div><img class="img-responsive" src="images/entrainement/' + exercices[exercice[0]] + '"></div>');
        let div2=parseHTML("<div>" + exercice[0] + "</div>");
        let div3=parseHTML("<div>" + exercice[1] + "</div>");
        let div4=parseHTML("<div>1min</div>");
        exercicesDIV.appendChild(div0);
        exercicesDIV.appendChild(div1);
        exercicesDIV.appendChild(div2);
        exercicesDIV.appendChild(div3);
        exercicesDIV.appendChild(div4);
       i++;
    
    }
}

function parseHTML(str) {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children[0];
}
