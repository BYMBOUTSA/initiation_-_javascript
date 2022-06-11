/*let date = dayjs('10-09-2021 10:30:04');

console.log(date.format());
console.log(date.format('dddd D MMMM YYYY')); // Saturday 9 October 2021
console.log(date.year()); // 2021
console.log(date.month()); // 9
console.log(date.day()); // 6
console.log(date.hour()); // 10
console.log(date.minute()); // 30
console.log(date.second()); // 4

console.log(date.add(7, 'day').format('le DD/MM/YYYY à hh:mm:ss')); // le 16/10/2021 à 10:30:04
console.log(date.subtract(7, 'year').format('le DD/MM/YYYY à hh:mm:ss')); // le 09/10/2014 à 10:30:04

console.log(date.startOf('year').format('le DD/MM/YYYY')); // le 01/01/2021
console.log(date.endOf('month').format('le DD/MM/YYYY')); // le 31/10/2021 */

/* Exercice */
// Question

// Nous souhaitons écrire un script capable de comparer la date d'une commande en ligne avec une période de promotion pour savoir si la commande bénéficie de la remise.

// . La commande a été passée le 22 décembre 2019 à 10:45.
const orderedAt = moment("2019-12-22 10:45");

// . La promotion a débuté le 18 décembre 2019 à 18:00 et dure 10 jours.
const specialOfferStartedAt = moment("2019-12-18 18:00");
const specialOfferEndedAt = specialOfferStartedAt.clone().add(10, days);
const hasReducedPrice = orderedAt.isBetween(
  specialOfferStartedAt,
  specialOfferEndedAt
);

if (hasReducedPrice) {
  console.log("La commande a bénéficié du tarif réduit ! !");
} else {
  console.log(
    "La commande a été effectuée en dehors de la période promotionnelle."
  );
}
