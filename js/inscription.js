let ajouterbutton = document.getElementById("ajouter-button");
let annulerbutton = document.getElementById("vider-button");
ajouterbutton.href = "javascript:ajouter()";
annulerbutton.href = "javascript:vider()";
let table = document.getElementById("table");

function ajouter() {

    // Creation de formData et obtention des valeurs
    let form = document.getElementById("formulaire");
    let formData = new FormData(form);
    let nom = formData.get("nom");
    let prenom = formData.get("prenom");
    let telephone = formData.get("telephone");
    let email = formData.get("email");
    let password = formData.get("password");
    let payment = formData.get("payment");
    let sport = formData.get("sport");



    // verifier que il n'y a pas des inputs vides
    let erreurs = [];
    let valide = true;
    if (nom === "") {
        valide = false;
        erreurs.push("Le nom ne peut pas être vide");
    }
    if (nom.length > 20) {
        valide = false;
        erreurs.push("Le nom c'est trop long");
    }

    if (prenom === "") {
        valide = false;
        erreurs.push("Le prenom ne peut pas être vide");
    }
    if (prenom.length > 25) {
        valide = false;
        erreurs.push("Le prenom c'est trop long");
    }

    if (telephone === "") {
        valide = false;
        erreurs.push("Le telephone ne peut pas être vide");
    }
    if (telephone.length > 15) {
        valide = false;
        erreurs.push("Le telephone c'est trop long");
    }

    if (email === "") {
        valide = false;
        erreurs.push("Le email ne peut pas être vide");
    }
    if (email.length > 45) {
        valide = false;
        erreurs.push("Le email c'est trop long");
    }


    if (password === "") {
        valide = false;
        erreurs.push("le password ne peut pas être vide");
    }
    // S'il y a des erreurs les montrer
    if (erreurs.length > 0) {
        for (error of erreurs) {
            alert(error);
        }
    }


    // S'il n'y a pas d'erreurs, créer les divs et les ajouter au tableau
    if (valide == true) {

        let nomDIV = document.createElement("div");
        nomDIV.innerHTML = nom;
        nomDIV.className = "value";

        let prenomDIV = document.createElement("div");
        prenomDIV.innerHTML = prenom;
        prenomDIV.className = "value";

        let telephoneDIV = document.createElement("div");
        telephoneDIV.innerHTML = telephone;
        telephoneDIV.className = "value";

        let emailDIV = document.createElement("div");
        emailDIV.innerHTML = email;
        emailDIV.className = "value";

        let paymentDIV = document.createElement("div");
        paymentDIV.innerHTML = payment;
        paymentDIV.className = "value";

        let sportDIV = document.createElement("div");
        sportDIV.innerHTML = sport;
        sportDIV.className = "value";

        table.appendChild(nomDIV);
        table.appendChild(prenomDIV);
        table.appendChild(telephoneDIV);
        table.appendChild(emailDIV);
        table.appendChild(paymentDIV);
        table.appendChild(sportDIV);

        // Mettre en blanc les inputs pour pouvoir réecrire
        document.getElementById("nom").value = "";
        document.getElementById("prenom").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telephone").value = "";
        document.getElementById("password").value = "";
        document.getElementById("callisthenie-option").selected = true;
        document.getElementById("payment-option").selected = true;
    }
}

function vider() {
    let confirmation = confirm("voulezz vous vraiment vider le tableau?");

    if (confirmation) {
        let items = document.querySelectorAll(".value");
        for (let item of items) {
            item.remove();
        }
    }

}