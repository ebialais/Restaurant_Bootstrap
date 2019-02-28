let nom = prompt('Bonjour, quel est votre nom ? ', ' ');


if ( (nom == ' ') || (nom == null) ) {
    nom = "Bob";
    }

//document.write("<H2>Bonjour " + nom + " ! Bienvenu(e) au Bistro du coin. </H2>");

window.onload = function () {
    let user = document.getElementById("utilisateur");
    user.innerHTML = nom;
}


