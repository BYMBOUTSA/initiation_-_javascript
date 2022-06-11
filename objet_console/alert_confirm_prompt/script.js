// Afficher un message avec alert()
// La méthode alert() permet d'afficher à l'internaute, au sein d'une boîte de dialogue, le message qui a été passé en paramètre.
//alert('Bonjour !')

// Demander une confirmation avec confirm()
// Affiche un message, passé en paramètre, dans une boîte de dialogue, en proposant deux actions possibles à l'internaute: 'OK' ou 'Annuler'

/* if (confirm('Vous entrez sur notre site')) {
  alert('Bonjour !');
} else {
  alert('À bientôt !');
} */

// Faire saisir une valeur à l'internaute avec prompt()
// Affiche une boîte de dialogue avec un champ permettant à l'internaute de saisir un texte.

//let firstName = prompt('Saisissez votre prénom');

//alert('Bonjour ' + firstName + ' !');

/* Exercice */
// Question

// Dans cet exercice, vous allez devoir :

// 1. Demander à l'internaute de renseigner son âge.
let age = prompt("tap your age ?");

// 2. Afficher son âge dans une boîte de dialogue.
alert("You age is " + age + " old !");

// 3. Lui demander de confirmer en affichant le message : "Est-ce correct ?", et si c'est le cas afficher un message "Merci !", sinon "Recommencez svp".
if (confirm("Est-ce correct ?")) {
  alert("Merci !");
} else {
  alert("Recommencez svp !");
}
