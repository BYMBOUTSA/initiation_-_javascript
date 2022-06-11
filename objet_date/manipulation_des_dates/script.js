// Ici nous souhaitons créer une date (date2) ayant 1 an, 6 mois et 15 jours de plus que notre date d'origine du 29 février 2020 (date)
// Display in the console :
/*const date = new Date(2020, 1, 29); // création de notre variable date et affectation de l'objet Date avec la date du 29 février 2020 
const date2 = new Date(); // création de notre variable date et affectation de l'objet Date

date2.setFullYear(date.getFullYear() + 1); // Affectation dans date2 l'année recupérer dans date en y ajoutant 1 an
date2.setMonth(date.getMonth() + 6); // Affectation dans date2 le mois recupérer dans date en y ajoutant 6 mois
date2.setDate(date.getDate() + 15); // Affectation dans date2 la date du jour recupérer dans date en y ajoutant 15 jours
console.log(date2); // Mon Sep 13 2021 15:58:00 GMT+0200 (heure d’été d’Europe centrale) */

// À partir de la date du 29 février à 21h 30m 55s, nous souhaitons créer une nouvelle date avec 4 heures, 30minutes et 30secondes de plus
// Nous créons donc date2 avec la même année, le même mois et le meême jour que la date initiale (date).
/*const date = new Date(2020, 1, 29, 21, 30, 55);
const date2 = new Date();

/* Affectation de l'année, le mois et le jour de date dans date2 */
/*date2.setFullYear(date.getFullYear());
date2.setMonth(date.getMonth());
date2.setDate(date.getDate());

date2.setHours(date.getHours() + 4); // Ajout de 4h de plus sur la valeur de notre date pour obtenir l'heure de date2
date2.setMinutes(date.getMinutes() + 30); // Ajout de 30m de plus
date2.setSeconds(date.getSeconds() + 30); // Ajout de 30s de plus
console.log(date2); // Sun Mar 01 2020 02:01:25 GMT+0100 (heure normale d’Europe centrale) */

// Example 1
/*const date = new Date(2020, 1, 29, 20, 30, 45);
const date2 = new Date();

date2.setFullYear(
  date.getFullYear() + 1,
  date.getMonth() + 6,
  date.getDate() + 15
)

date2.setHours(
  date.getHours() + 4,
  date.getMinutes() + 30,
  date.getSeconds() + 30
)

console.log(date2); // Tue Sep 14 2021 01:01:15 GMT+0200 (heure d’été d’Europe centrale) */

// Example 2
/*const date = new Date(2020, 1, 29, 20, 30, 45);

const date2 = new Date(
  date.getFullYear() + 1,
  date.getMonth() + 6,
  date.getDate() + 15,
  date.getHours() + 4,
  date.getMinutes() + 30,
  date.getSeconds() + 30
)

console.log(date2); // Tue Sep 14 2021 01:01:15 GMT+0200 (heure d’été d’Europe centrale) */

// Manipulation avec timestamp
/*const date = new Date(2020, 1, 29);
const date2 = new Date(2020, 7, 15, 21, 45);
const date3 = new Date(2020, 7, 15, 22);

console.log(date.getTime()); // 1582930800000
console.log(date2.getTime()); // 1597520700000
console.log(date3.getTime()); // 1597521600000 */

// Test pour voir si la date2 est plus recente que la date3
//console.log(date2.getTime() > date3.getTime())

/* Exercice */
// Question

// À partir de la date du 25 décembre 2020 à 20 h 30, nous voulons calculer une nouvelle date qui sera dans 5 ans, 6 mois et 12 heures de plus (vous devez effectuer des calculs en JavaScript) et l'afficher dans la console.
const date = new Date(2020, 11, 25, 20, 30);
const date1 = new Date(
  date.getFullYear() + 5,
  date.getMonth() + 6,
  date.getDate(),
  date.getHours() + 12,
  date.getMinutes()
);
console.log(date1); // Fri Jun 26 2026 08:30:00 GMT+0200 (heure d’été d’Europe centrale)

// Plus
console.log(date.getTime()); // 1608924600000

console.log(date2.getTime()); // 1782943200000

// Petit test
if (dateTimestamp < date1Timestamp) {
  console.log("date" + " Vient avant " + "date1");
} else {
  console.log(date + " Vient après " + date1);
}

// Autre Manière de résoudre l'exercice
const date2 = date;
date2.setFullYear(date.getFullYear() + 5, date.getMonth() + 6);

date2.setHours(date.getHours() + 12);
console.log(date1); // Fri Jun 26 2026 08:30:00 GMT+0200 (heure d’été d’Europe centrale)
