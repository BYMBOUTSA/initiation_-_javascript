/* . Soit de construire une date (en définissant ses secondes, minutes, etc): les setters
. Soit de récupérer ses données (jour du mois, de la semaine, etc): les getters */

/* setters */

// Display in the console : Thu Dec 31 2020 14:31:23 GMT+0100 (heure normale d’Europe centrale)
/*const date = new Date();
date.setFullYear(2020);
date.setMonth(11);
date.setDate(31);
console.log(date); */

// Display in the console : Sat Feb 29 2020 22:30:45 GMT+0100 (heure normale d’Europe centrale)
/*const date = new Date(2020, 1, 29);
date.setHours(22);
date.setMinutes(30);
date.setSeconds(45);
date.setMilliseconds(500);
console.log(date);*/

// Display in the console : Tue Oct 29 2019 00:00:00 GMT+0100 (heure normale d’Europe centrale)
/*const date = new Date()
date.setTime(1572303600000);
console.log(date);*/

/* getters */

/*const date = new Date(2020, 1, 29);
console.log(date.getFullYear()); // 2020
console.log(date.getMonth()); // 1
console.log(date.getDate()); // 29 */

/*const date = new Date(2020, 1, 29, 22, 30, 45, 500);
console.log(date.getHours()); // 22
console.log(date.getMinutes()); // 30
console.log(date.getSeconds()); // 45
console.log(date.getMilliseconds()); // 500 */

// getDay()
// Renvoie le jour de la semaine de la date donnée.
// Retourne un entier de 0 à 6 avec 0 pour dimanche, 1 pour lundi, et jusqu'à 6 pour samedi
//const date = new Date(2020, 1, 29);
//console.log(date.getDay()); // 6 pour samedi

// getTime()
// Renvoie le timestamp de la date donnée.
// Cette méthode peut être utilisée pour affecter une nouvelle date à une date existante (avec setTime()).
/*const date = new Date(2020, 1, 29);
console.log(date.getTime()); // 1582930800000 */

// Date.now()
// Renvoie le timestamp actuel
//const date = Date.now();
//console.log(date); // 1653398141313

/* Exercice */
// Question

// À partir de la date du 25 décembre 2020, nous voulons :

// 1. Afficher son timestamp dans la console
const date = new Date(2020, 11, 25);
console.log(date.getTime()); // 1608850800000

// 2. Afficher le mois dans la console
console.log(date.getMonth()); // 11

// 3. Lui affecter l'heure 20 h 30 et afficher la date dans la console
date.setHours(20);
date.setMinutes(30);
console.log(date); // Fri Dec 25 2020 20:30:00 GMT+0100 (heure normale d’Europe centrale)
