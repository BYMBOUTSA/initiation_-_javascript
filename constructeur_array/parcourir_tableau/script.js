let animals = ["Lion", "Chat", "Chien", "Cheval", "Tigre", "Ours"];
console.log(animals.length);

// Parcours avec la boucle for
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("\n-----------");

// en utilisant la méthode forEach()
animals.forEach(function (element) {
  console.log(element);
});

// Displays each array index and his element in the console
animals.forEach(function (element, index) {
  console.log(index + " : " + element);
});

/* Autres méthode permettant de parcourir un tableau */
// méthode every()
function isGreaterThanZero(element) {
  return element > 0;
}

let numbers = [0, 9, 5, 4, 6, 8, 2];

// Display False in the console because all numbers are not stricky greater than 0
console.log(numbers.every(isGreaterThanZero));

// Display true in the console because all elements are greater or equal to 0
console.log(
  numbers.every(function (element) {
    return element >= 0;
  })
);

// Méthode some()
// Display true in the console because at least one number is strickly greater than 0
console.log(numbers.some(isGreaterThanZero));

// Display false in the console because there is not at least one element strictly inferior to zero
console.log(
  numbers.some(function (element) {
    return element < 0;
  })
);

// Méthode map()
// Returns the square of a given number
function squareNumber(number) {
  number * number;
}

// Create a new array containing squared numbers
let squaredNumbers = numbers.map(squareNumber);

// Create a new array containing numbers divide by 2, from the squareNumbers array
let otherNumbers = squaredNumbers.map(function (element) {
  return element / 2;
});

console.log(numbers);
console.log(squaredNumbers);
console.log(otherNumbers);

// Méthode reduce()
function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(numbers.reduce(sumReducer));

console.log(numbers.reduce(sumReducer, 6));

// Display -34 in the console
console.log(
  numbers.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue;
  })
);

// Display 66 in ghe console
console.log(
  numbers.reduce(function (accumulator, currentValue) {
    return accumulator - currentValue;
  }, 100)
);

/* Exercice */

/* Question

Dans cet exercice, imaginons que nous avons une liste de produits (par exemple des fruits), que pour chaque produit nous en avons une certaine quantité en stock, et que nous sommes en charge de la gestion des stocks.

À partir des quantités de produits en stock (15, 184, 29, 0, 35), vous allez devoir utiliser la méthode adéquate afin de vérifier si tous les produits sont toujours en stock et d'afficher l'information dans la console. */

let quantityProductStock = [15, 184, 29, 0, 35];

// Ecriture en ES5
console.log(
  quantityProductStock.every(function (element) {
    return element > 0;
  })
);
// Ecriture En ES6
console.log(quantityProductStock.every((element) => element > 0));

// Autre manière de faire
isGreaterThanZero = (element) => element > 0;
console.log(quantityProductStock.every(isGreaterThanZero));
