// Défi

// L'exercice final de ce cours porte sur les entrées et sorties en JavaScript.

// Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

// Question

// Dans cet exercice, nous souhaitons demander à l'internaute de saisir son identifiant, puis de confirmer s'il souhaite accéder à son compte (en lui affichant un message différent en fonction de son choix), et enfin nous souhaitons afficher l'identifiant saisi dans la console afin de pouvoir vérifier si notre code fonctionne.

// Vous allez devoir, à partir du code source ci-après :

// 1. Créer une boîte de dialogue qui demande son identifiant à l'internaute, avant la demande de confirmation.

// 2. Afficher une alerte de type "Connexion de " + identifiant de l'utilisateur, si l'internaute valide le message d'accès au compte.

// 3. Sinon, afficher une alerte de type "Déconnexion de " + identifiant de l'utilisateur.

//  4. Enfin, après la partie concernant la demande de confirmation, afficher la variable contenant l'identifiant de l'internaute dans la console.

// Supprimez les lignes "// Write your code here instead of this comment" et écrivez votre code à la place.

// 1) Ask for the user name
let userName = prompt("tap your id :");

if (confirm("Accéder au compte")) {
  // 2) A login message is displayed
  alert("Connexion de " + userName + " !");
} else {
  // 3) A logout message is displayed
  alert("Déconnexion de " + userName + " !");
}

// 4) The user name is displayed in the console.
console.log(userName);
