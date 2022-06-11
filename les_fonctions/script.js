let chaise = 120.5;
let table = 1200.99;
let vase = 420.01;
let canape = 12585.55;

// Défi

/* Vous êtes développeur pour la boutique en ligne d'un créateur de mobilier indépendant. Ce matin, votre client vous téléphone pour vous annoncer que, cette année, il veut industrialiser la mise en place des soldes sur son site vitrine : il ne veut plus jamais calculer tous les prix manuellement. Très à cheval sur les détails, il attend que les prix soient mis à jour dans l'interface, en gardant le même format que les anciens prix.

Vous devez lui proposer une solution qui lui permette de gagner du temps pour les prochaines soldes.

Voici le code HTML et CSS de la galerie :
 CTRL+C pour copier, CTRL+V pour coller */

/* Et voici la liste des produits que vous avez pu récupérer en base de données depuis le back-end du site.

Elle vous servira à effectuer les calculs sur les prix depuis le code JavaScript.
CTRL+C pour copier, CTRL+V pour coller

Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail : */

// Question 1

// Vous allez réaliser ce travail en plusieurs étapes, qui, mises bout à bout, vous permettront de répondre au besoin du client.

// Dans un premier temps, vous allez devoir écrire la fonction qui permet de calculer le nouveau prix d'un seul produit.

// La promotion doit être de 25 % du prix initial.

// Afin de tester son bon fonctionnement, vous appellerez cette fonction avec le prix de la chaise et afficherez le résultat dans la console du navigateur.
function getPromoPrice(price, percent) {
  return price * (1 - percent / 100);
}

let newPromoPrice = getPromoPrice(120.5, 25);
console.log(newPromoPrice);

// Question 2

// Vous remarquez que le prix après promotion affiche trop de chiffres après la virgule.

// L'année dernière, quand vous avez dû calculer tous les prix promotionnels manuellement, le client vous avait indiqué de toujours arrondir cette partie du prix au supérieur.

// Vous écrirez donc une fonction qui vous permettra d'obtenir le prix arrondi, à partir du prix promotionnel.
function roundedDecimal(number) {
  const tmp = Math.pow(10, 2);
  return Math.round(number * tmp) / tmp;
}

let roundedPrice = roundedDecimal(newPromoPrice);
console.log(roundedPrice);

// Question 3

// Vous vous souvenez que votre client est très pointilleux et qu'il remarquera que le format du prix n'est pas le bon. Là encore, une fonction vous permettra de remplacer le point du prix par une virgule, et vous pourrez ajouter le symbole "€".

// Cette fois-ci, vous testerez directement votre fonction dans la console du navigateur.

function formatPrice(price) {
  return price.toString().replace(".", ",") + " €";
}

let finalPrice = formatPrice(roundedPrice);
console.log(finalPrice);

// Question 4

// Maintenant que vous avez une base solide qui fonctionne pour le produit "chaise", il faut appliquer ce traitement à tous les produits.

// Pour cela, vous bouclerez sur cette liste et appellerez les fonctions précédentes en passant les bons paramètres.

// Pour cet exercice vous utiliserez l’array suivant :
// CTRL+C pour copier, CTRL+V pour coller

const prices = [120.5, 1200.99, 420.01, 12585.55];

// Puis  vous bouclerez sur cet array et appellerez les fonctions précédentes en passant les bons paramètres et afficherez les prix au bon format dans la console du navigateur.
prices.forEach(function (price) {
  let newPromoPrice = getPromoPrice(price, 25);
  let roundedPrice = roundedDecimal(newPromoPrice);
  let finalPrice = formatPrice(roundedPrice);
  console.log(finalPrice);
});

// autre procédé avec la boucle for
for (let i = 0; i < prices.length; i++) {
  let newPromoPrice = getPromoPrice(prices[i], 25);
  let roundedPrice = roundedDecimal(newPromoPrice);
  let finalPrice = formatPrice(roundedPrice);
  console.log(finalPrice);
}
