// Dans l'exemple ci-dessous, nous avons créer une variable date en lui assignat un nouvel objet Date (new Date())
//const date = new Date();
//console.log(date);

// Dans l'exemple ci-dessous, on a passé en paramètre une date au format chaîne de caractères.
//const date = new Date('May 24, 2022 13:21:59');
//console.log(date);

// Si une chaîne passée n'est pas correcte, comme par exemple const date = new Date('Test'), alors le constructeur va renvoyer "Invalid Date"

// Aprivilégié par rapport à la méthode juste au dessus ou on passe une chaîne de caractère en paramètre
//const date = new Date(2022, 4, 24);
//console.log(date);

// Si le mois paramètre obligatoire n'est pas renseigné on aura toujours la date qui se trouve en commentaire de notre console.log
//const date = new Date(2022);
//console.log(date); // Thu Jan 01 1970 01:00:02 GMT+0100 (heure normale d’Europe centrale)

/* Exercice */
// Question

// Dans cet exercice, il nous faut créer deux dates différentes (date et date2) et les afficher dans la console avec (console.log()) :

// La date courante
const date = new Date();
console.log(date);

// La date du 25 décembre 2020
const date2 = new Date(2020, 11, 25);
console.log(date2);
