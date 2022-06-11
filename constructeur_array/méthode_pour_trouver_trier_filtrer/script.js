// Méthode find()
// retourne la première valeur trouvé correspondant à notre condition sinon undefined
function isGreaterThanZero(element) {
  return element > 10;
}

let numbers = [0, 9, 51, 100, 6, 18, 2];

// Display 51 in the console because it's a first value found to be greater than 10
console.log(numbers.find(isGreaterThanZero));

// Méthode findIndex()
// retourne l'index de la première valeur trouvée verifiant notre condition dans le cas contraire elle renvoi -1

// Display 2 in the console because it's the index of first value found to be greater than 10
console.log(numbers.findIndex(isGreaterThanZero));

// Méthode indexOf()
// agit de la même manière que la méthode findIndex() mais ici on ne la passe pas de fonction mais directement l'élément où on doit effectuer notre recherche on peut aussi y ajouter un paramètre contenant l'index de départ.
let animals = ["Lion", "Chat", "Chien", "Lion", "Ours"];

// Display 0 in the console because ghe first 'Lion' found is at index 0, even if there is a second one at index 3
console.log(animals.indexOf("Lion"));

// Display 3 in the comsole because the first 'Lion' value found when starting to browse from the index 2 is at index 3
console.log(animals.indexOf("Lion", 2));

// Méthode lastIndexOf()
// Celle-ci est similaire à la méthode indexof sauf qu'elle renvoi l'index du dernier élément trouvé. cette méthode parcourt le tableau à l'envers

// Display 3 in the console because the last 'Lion' value fiund is at index 3.
console.log(animals.lastIndexOf("Lion"));

// Display 0 in the console because the last 'Lion' value found when starting browse frol the index 1 is at index 0
console.log(animals.lastIndexOf("Lion", 1));

// Méthode sort()
// Permet de trier un tableau. Elle renvoie le même tableau trié. Celle-ci trie des chaînes de caractère et non des nombres en les passant des nombres ceux-ci seront convertis en chaine de caractère. Donc se ne sera pas un tableau de nombre trié par ordre croissant ou décroissant.

animals = ["Lion", "Chat", "Chien", "Cheval", "Tigre", "Ours"];

numbers = [0, 900, 1000, 11, 40, 6, 8, 2, 61];

// Display in the console [ 'Chat', 'Cheval', 'Chien', 'Lion', 'Ours', 'Tigre' ]
console.log(animals.sort());
// Display in the console [ 0, 1000, 11, 2, 40, 6, 61, 8, 900 ]
console.log(numbers.sort());

// Function for comparing the length of strings in order to sort in ascending order
function compareTextLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  // The case where a.length = b.length
  return 0;
}

// Display in the console [ 'Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval' ]
console.log(animals.sort(compareTextLength));

// Function for comparing the length of strings in order to sort in ascending order
function compareNumbers(a, b) {
  return a - b;
}

// Display in the console [ 0, 2, 6, 8, 11, 40, 61, 900, 1000 ]
console.log(numbers.sort(compareNumbers));

// La méthode filter()

// Cette méthode va vous retourner un nouveau tableau créé avec les valeurs du tableau d'origine, qui répondent à une condition passée en paramètre sous la forme d'une fonction.

function isTextLengthGreaterThan4(element) {
  return element.length > 4;
}

let animalsFiltered = animals.filter(isTextLengthGreaterThan4);

let animalsFilteredBis = animalsFiltered.filter(function (element) {
  return element.length > 5;
});

// Display in the console [ 'Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval' ]
console.log(animals);

// Display in the console [ 'Chien', 'Tigre', 'Cheval' ]
console.log(animalsFiltered);

// DIsplay in the console  ['Cheval' ]
console.log(animalsFilteredBis);

// Méthode slice()
// Renvoie un tableau qui est une partie du tableau original sans modifier celui-ci.
// Display in the console [ 'Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval' ]
console.log(animals.slice());

// Display in the console [ 'Tigre', 'Cheval' ]
console.log(animals.slice(4));

// Display in the console [ 'Tigre', 'Cheval' ]
console.log(animals.slice(-3));

// Display in the console [ 'Lion', 'Ours' ]
console.log(animals.slice(1, 3));

// Display in the console [ 'Lion', 'Ours', 'Chien' ]
console.log(animals.slice(1, -2));

// Display in the console [ 'Ours', 'Chien' ]
console.log(animals.slice(-4, -2));

// Display in the console [ 'Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval' ]
console.log(animals);

// Méthode pop()
// Supprime le dernier élément d'un tableau et le retourne. La longueur de celui-ci est alors modifié.
// Dislay in the console 6
console.log(animals.length);

// Display in the console Cheval
console.log(animals.pop());

// Display in the console 5
console.log(animals.length);

// Méthode shift()
// Supprime le premier élément d'un tableau et le retourne. Modification de la longueur du tableau
animals = ["Lion", "Chat", "Chien", "Cheval", "Tigre", "Ours"];

// Display in the console 6
console.log(animals.length);

// Display in the console Lion
console.log(animals.shift());

// Display in the console 5
console.log(animals.length);

// Méthode includes()
// Renvoie "true" si la valeur recherchée est présente dans le tableau, sinon "false".

// Le premier paramètre est la valeur que l'on souhaite trouver.

// Le deuxième, facultatif, est l'index à partir duquel il faut commencer à chercher.

// Display in the console true
console.log(animals.includes("Ours"));

// Display in the console false because 'Lion' is at index 0 while we are searching from index 1
console.log(animals.includes("Lion", 1));

/* Exercice */

// Question

/* À partir du tableau des navigateurs web ci-dessous, vous allez devoir utiliser les méthodes pour :
  
  Supprimer définitivement "Internet Explorer" et l'afficher dans la console.
  Supprimer définitivement "Edge" et l'afficher dans la console.
  À partir du tableau restant, ne conserver que "Firefox" et "Chrome" sans modifier le tableau obtenu après les précédentes suppressions et afficher ces deux tableaux dans la console. */

let webBrowsers = [
  "Internet Explorer",
  "Vivaldi",
  "Firefox",
  "Chrome",
  "Opera",
  "Edge",
];

// suppression de internet explorer
console.log(webBrowsers.shift());

// Supprimer définitivement Edge
console.log(webBrowsers.pop());

// conservation uniquement de Firefox et Chrome
let conservedFirefoxChrome = webBrowsers.slice(1, 3);
// Display in the console
console.log(conservedFirefoxChrome);

// Display in the console [ 'Vivaldi', 'Firefox', 'Chrome', 'Opera' ]
console.log(webBrowsers);
