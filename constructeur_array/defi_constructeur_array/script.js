// Défi

// L'exercice final de ce cours porte sur les méthodes de l'objet JavaScript Array().

// Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

// Question

// À partir du tableau des navigateurs web ci-dessous, vous allez devoir :

// 1. Utiliser la méthode isTextLengthGreaterThan5 ci-dessous afin de savoir, en affichant true ou false dans la console, si tous les éléments remplissent la condition de cette fonction.

// 2. Trier le tableau puis afficher le résultat dans la console.

// 3. Utiliser la méthode isTextLengthGreaterThan5 ci-dessous afin de créer un nouveau tableau filtré par cette fonction et afficher ce nouveau tableau dans la console.

// 4. Renvoyer la liste filtrée des navigateurs sous la forme d'une chaîne de caractères dont tous les éléments sont séparés par ' - '.

function isTextLengthGreaterThan5(element) {
  return element.length > 5;
}

let webBrowsers = [
  "Opera",
  "Safari",
  "Internet Explorer",
  "Vivaldi",
  "Firefox",
  "Chrome",
  "Edge",
];

// Réponse
// 1. Utiliser la méthode isTextLengthGreaterThan5 ci-dessous afin de savoir, en affichant true ou false dans la console, si tous les éléments remplissent la condition de cette fonction.
console.log(webBrowsers.every(isTextLengthGreaterThan5));

// 2. Trier le tableau puis afficher le résultat dans la console.
console.log(webBrowsers.sort());

// 3. Utiliser la méthode isTextLengthGreaterThan5 ci-dessous afin de créer un nouveau tableau filtré par cette fonction et afficher ce nouveau tableau dans la console.
let webBrowsersFilter = webBrowsers.filter(isTextLengthGreaterThan5);
console.log(webBrowsersFilter);

// // 4. Renvoyer la liste filtrée des navigateurs sous la forme d'une chaîne de caractères dont tous les éléments sont séparés par ' - '.
console.log(webBrowsersFilter.join(" - "));
