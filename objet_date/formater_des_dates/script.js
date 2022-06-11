// toLocaleString()
// Elle retourne une chaîne de caractères, qui correspond à une date donnée selon une locale.

/* const date = new Date(2020, 1, 29, 21, 30, 45)

const dateDisplayed = date.toLocaleString('fr-FR'); 

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}
const dateDisplayedLong = date.toLocaleString('fr-FR', options);

console.log(dateDisplayed); // 29/02/2020, 21:30:45
console.log(dateDisplayedLong); // samedi 29 février 2020, 21:30 */

// toLocateDateString()
// Cette méthode est similaire à la première, sauf qu'elle retourne la date (jour, mois, année) sans heure, mais on peut les ajoutées dans les options.

/*const date = new Date(2020, 1, 29, 21, 30, 45)

const dateDisplayed = date.toLocaleDateString('fr-FR'); 

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
const dateDisplayedLong = date.toLocaleDateString('fr-FR', options);

console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // samedi 29 février 2020 */

// toLocaleTimeString()
// Cette méthode est similaire à la première, sauf qu'elle retourne directement l'heure de la date. Toutefois, les paramètres dans l'objet options permettent quand même de tout afficher si on le souhaite.

/*const date = new Date(2020, 1, 29, 21, 30, 45);

const dateDisplayed = date.toLocaleTimeString('fr-FR');

console.log(dateDisplayed); // 21:30:45 */

// Intl.DateTimeFormat
// Il s'agit d'une autre façon de formater les dates, qu'il est préférable d'utiliser pour des raisons de performance si nous devons en formater un grand nombre.

/*const date = new Date(2020, 1, 29, 21, 30, 45);

const dateDisplayed = new Intl.DateTimeFormat('fr-FR').format(date);

const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
const dateDisplayedLong = new Intl.DateTimeFormat('fr-FR', options).format(date);

console.log(dateDisplayed); // 29/02/2020
console.log(dateDisplayedLong); // samedi 29 février 2020, 21:30 */

/* Exercice */
// Question

// À partir de la date du 25 décembre 2020, nous voulons :

// 1. Afficher la date dans la console au format jj/mm/aaaa (ex : 01/11/2019)
const date = new Date(2020, 11, 25);
const dateDisplayed = date.toLocaleDateString("fr-FR");

console.log(dateDisplayed); // 25/12/2020

// 2. Afficher la date dans la console dans un format plus long (ex : samedi 29 février 2020)
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateDisplayedLong = date.toLocaleDateString("fr-FR", options);

console.log(dateDisplayedLong); // vendredi 25 décembre 2020

// Avec Intl
const dateDisplay = new Intl.DateTimeFormat("fr-FR").format(date);

const dateDisplayLong = new Intl.DateTimeFormat("fr-FR", options).format(date);

console.log(dateDisplay);
console.log(dateDisplayLong); // vendredi 25 décembre 2020
