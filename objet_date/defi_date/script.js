// Défi

// Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

// Question

// Dans cet exercice, nous voulons gérer les dates des Jeux Olympiques d'été de 2028 à Los Angeles, qui commenceront le 21 juillet 2028 et qui dureront 16 jours. Nous voulons donc afficher toutes les informations utiles concernant cet événement, comme la date de la cérémonie d'ouverture (date de début ), la date de la cérémonie de clôture (date de fin), ainsi que le nombre de jours restants entre la date actuelle et la date de début de l'événement.

// Il nous faut donc :

// 1. Créer la date initiale (dateStart).
const dateStart = new Date(2028, 6, 21);

// 2. Calculer et créer la date de fin (dateEnd).
const dateEnd = new Date(
  dateStart.getFullYear(),
  dateStart.getMonth(),
  dateStart.getDate() + 16
);

// 3. Afficher dateStart et dateEnd au format long (ex : samedi 29 février 2020) dans la console.
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(dateStart.toLocaleDateString("fr-FR", options)); // vendredi 21 juillet 2028
console.log(dateEnd.toLocaleDateString("fr-FR", options)); // dimanche 6 août 2028

// 4. Créer la date courante currentDate et calculer la différence (result) avec la date de début, puis convertir cette différence en nombre de jours.
const currentDate = new Date();
const currentDateTimestamp = currentDate.getTime();
const dateStartTimestamp = dateStart.getTime();

const result = dateStartTimestamp - currentDateTimestamp;

// conversion en millisecondes
const days = result / 1000 / 60 / 60 / 24;

// 5. Afficher la date courante au format long (ex : samedi 29 février 2020) dans la console et afficher le nombre de jours de différence dans la console.
console.log(currentDate.toLocaleDateString("fr-FR", options)); // dimanche 29 mai 2022

console.log(days); // 2244.460833194444

// Avec Intl

console.log(new Intl.DateTimeFormat("fr-FR", options).format(dateStart)); // Display : vendredi 21 juillet 2028

console.log(new Intl.DateTimeFormat("fr-FR", options).format(dateEnd)); // Display : dimanche 6 août 2028

// Current date (identique à la version précédente)

// Difference between start date and current date
//result = dateStart.getTime() - currentDate.getTime()

// Converting milliseconds to days

//days = result / 1000 / 60 / 60 / 24

console.log(new Intl.DateTimeFormat("fr-FR", options).format(currentDate)); // Display : date actuelle au format long ex : dimanche 29 mai 2022

console.log(days); // Display : 2244.448332476852
