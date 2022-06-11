/* Question

Un site de e-commerce veut faire des tests sur l'ajout d'articles à un panier.

Cette fonctionnalité est structurée de cette manière :

    À côté de chaque article, il y a un champ de formulaire permettant de rentrer le nombre d'articles et un bouton Ajoutez au panier.

    Lorsque l'on ajoute au panier un article, cela envoie une requête au serveur, qui enregistre dans la base de données les éléments du panier.

À partir du code ci-dessous, écrivez les tests unitaires permettant de tester si le type de données concernant la quantité d'articles est bien un number.

Testez la fonction avec 2 et avec '2'. Si un des tests retourne false, corrigez le problème.
CTRL+C pour copier, CTRL+V pour coller */

/* const getArticleNumber = (numberOfArticles) => {
  return numberOfArticles;
};
 */

/* Pour réaliser les tests unitaires, on utilisera :

    Arrange : 2 et '2'

    Act : comparaison avec le résultat attendu

    Assert : validation avec un boolean en retour */

/* const testWithNumber = () => {
  const number = getArticleNumber(2);

  if (typeof number === "number") {
    return true;
  }
  return false;
};

const testWithString = () => {
  const number = getArticleNumber("2");

  if (typeof number === "number") {
    return true;
  }
  return false;
};

console.log(testWithNumber()); // true
console.log(testWithString()); // false

testWithNumber()
  ? console.info("Test getArticleNumber ok")
  : console.error("Test getArticleNumber failed"); */

// On se rend compte que le testwithString est false donc on doit modifier la fonction
const getArticleNumber = (numberOfArticles) => {
  return Number(numberOfArticles);
};

const testWithNumber = () => {
  const number = getArticleNumber(2);

  if (typeof number === "number") {
    return true;
  }
  return false;
};

const testWithString = () => {
  const number = getArticleNumber("2");

  if (typeof number === "number") {
    return true;
  }
  return false;
};

console.log(testWithNumber()); // true
console.log(testWithString()); // true

testWithNumber()
  ? console.info("Test getArticleNumber ok")
  : console.error("Test getArticleNumber failed");

// Question

// Quel pourrait être le test fonctionnel de cette fonctionnalité (il n'y a pas besoin d'écrire de code, une explication logique suffira) ?

// Le test fonctionnel doit tester une fonctionnalité dans son ensemble. Ici, on testera que le panier a correctement été mis à jour dans la base de données.
