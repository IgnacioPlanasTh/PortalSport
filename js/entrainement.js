"use strict"

let exercices=[
['pompes','pompes.gif'],
['tractions','tractions.gif'],
['squats','squats.gif']


]




let urlParams = new URLSearchParams(window.location.search);
let typeEntrainement= urlParams.get("entrainement");
console.log(typeEntrainement);
