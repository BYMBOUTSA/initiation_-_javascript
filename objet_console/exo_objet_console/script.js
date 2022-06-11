/* Exercice */
// Question

// En utilisant le tableau des nombres ci-dessous, vous allez devoir :

// 1. Utiliser la méthode vous permettant de l'afficher sous forme d'un tableau dans la console.

// 2. Utiliser la méthode permettant d'afficher son contenu dans la console comme si vous deviez déboguer.

//CTRL+C pour copier, CTRL+V pour coller

const numbers = [4, 8, 14, 2];

// 3. À partir du code JavaScript ci-dessous, il faut remplacer XX par une valeur permettant de faire afficher le message dans la console.
//CTRL+C pour copier, CTRL+V pour coller

const min = 10;
const assertReason = "La valeur doit être supérieure à 10";
//console.assert(XX > min, assertReason)

// 4. Dans l'exemple de code ci-dessous, nous voulons connaître le chemin parcouru pour arriver jusqu'à la fonction logged(). Il faut copier/coller ce code et placer la méthode adéquate au bon endroit afin de faire afficher la trace d'appels.
//CTRL+C pour copier, CTRL+V pour coller

// 4)

/* initialize()

function logged() {

  console.trace()
  
  console.log('Hello')

}

function login() {

  logged()

}

function initialize() {

  login()

} */

// Réponse
// 1. Utiliser la méthode vous permettant de l'afficher sous forme d'un tableau dans la console.
console.table(numbers);

// 2. Utiliser la méthode permettant d'afficher son contenu dans la console comme si vous deviez déboguer.
console.log(numbers);

// 3. À partir du code JavaScript ci-dessous, il faut remplacer XX par une valeur permettant de faire afficher le message dans la console.
console.assert(4 > min, assertReason);

// 4. Dans l'exemple de code ci-dessus, nous voulons connaître le chemin parcouru pour arriver jusqu'à la fonction logged(). Il faut copier/coller ce code et placer la méthode adéquate au bon endroit afin de faire afficher la trace d'appels.

initialize();

function logged() {
  console.trace();
  console.log("Hello");
}

function login() {
  logged();
}

function initialize() {
  login();
}
