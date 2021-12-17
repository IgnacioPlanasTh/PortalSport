// Dictionnaire avec tous les exercices qu'on a dans notre site
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
"Mountain climbers":"images.gif",
"Burpee":"Burpee.gif",
"squats sautés":"squatsSautés.gif",
"Fentes sautées":"fentesSautées.gif",
"V-ups":"v-ups.gif",

};






// obtenir les parametres donnés dans l'url
let urlParams = new URLSearchParams(window.location.search);
let sport= urlParams.get("sport");
let goal= urlParams.get("goal");
let poids= urlParams.get("poids");

// Parse le valeur de l'objectif
let parsedGoal=null;
if(goal=="gagnerMuscle") parsedGoal="gagner muscle";
else if(goal="perdrePoids") parsedGoal="perdre poids";

// Parse le valeur du poids
let parsedPoids=null;
if(poids=="poids-1")parsedPoids="-45kg";
else if(poids=="poids-2")parsedPoids="45-70kg";
else if(poids=="poids-3")parsedPoids="+70kg";

// Recuperer le div #main
let DIV = document.getElementById("main");

// S'il y a eu un erreur ou la page web n'est pas acces depuis le formulaire pertinent, montrer un erreur
if(sport==null || parsedPoids == null || parsedGoal==null) DIV.innerHTML=`<h3>S'il vous plait, choisisez d'abord l'entrainement sohuaité <a class="text-white" href="creerEntrainement.html">ici</a></h3><br>`


// Sinon montrer les parametres donnés
else DIV.innerHTML= "<h3>Voici les resultats pour le sport '" + sport + "', le goal de " + parsedGoal + " pour le poids " + parsedPoids+"</h3><br>"; 



// =====================================================================================000
// Definition de les differents entrainements
// Un entrainement est une liste d'exercices, chaque exercice a: nom, numero de repetitions, pause entre sets
let entrainement1=[
    ["Battle rope","3x15","1min"],
    [ "Hip thrusts","5x5","1min"],
    ["Tractions","4x8","1min"], 
    ["Soulevées de terre","4x10","1min"]];

    let entrainement2=[
        ["Hip thrusts","4x15","1min"],
        ["Tractions","5x5","1min"],
        ["Tractions","4x8","1min"], 
        ["Bench press","4x10","1min"]];


showEntrainement(entrainement2);


// Montrer un entrainement selon les parametres donnés(poids, objectif, sport)
function showEntrainement(entrainement){
    let exercicesDIV=document.getElementById("exercices");
    // exercicesDIV.innerHTML="";
    let i = 1;
    for(let exercice of entrainement){
        let div0=parseHTML("<div>"+i+"</div>");
        let div1=parseHTML('<div><img class="img-responsive" src="images/entrainement/' + exercices[exercice[0]] + '"></div>');
        let div2=parseHTML("<div>" + exercice[0] + "</div>");
        let div3=parseHTML("<div>" + exercice[1] + "</div>");
        let div4=parseHTML("<div>" + exercice[2] + "</div>");
        exercicesDIV.appendChild(div0);
        exercicesDIV.appendChild(div1);
        exercicesDIV.appendChild(div2);
        exercicesDIV.appendChild(div3);
        exercicesDIV.appendChild(div4);
       i++;
    
    }
}

// fonction auxiliaire pour créer html
function parseHTML(str) {
    let tmp = document.implementation.createHTMLDocument();
    tmp.body.innerHTML = str;
    return tmp.body.children[0];
}
