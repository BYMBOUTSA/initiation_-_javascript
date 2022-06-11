// Question

// Pour éditer le bulletin de notes d'une classe, nous avons besoin d’extraire la meilleure note. À l'aide d'une fonction récursive, créez un algorithme qui trie les éléments du tableau et retourne la plus haute.
// CTRL+C pour copier, CTRL+V pour coller

const notes = [10, 20, 15, 17, 8, 5, 12, 4];

// La fonction récursive que nous souhaitons faire est une fonction qui compare une variable qui stocke la meilleure note avec la valeur de l'index du tableau :

//     Si la valeur de l'index du tableau est supérieure à la meilleure note, alors la meilleure note devient celle-ci.

// Pour augmenter l'index du tableau à comparer, vous pouvez créer une variable compteur qui s'incrémentera avant chaque rappel de la fonction.

// La condition de fin de la fonction est lorsque la taille du tableau de notes est égale au compteur.

// Cette fonction récursive retourne une variable higher. N'oubliez pas de retourner la récursivité.

/* Indice

Commencez par définir vos variables.

Il y en aura 3 :

    Le tableau de note.

    Le compteur counter qui commence à zéro.

    La valeur la plus petite que peut prendre higher est zéro. */

let counter = 0;

let higher = 0;

function extractNote(counter, notes, higher) {
  if (counter < notes.length) {
    if (higher < notes[counter]) {
      higher = notes[counter];
    }
    counter++;
    return extractNote(counter, notes, higher);
  } else {
    return higher;
  }
}
console.log(extractNote(counter, notes, higher));

// Autre méthode

function getName(counter, notes, higher) {
  if (counter < notes.length) {
    higher = higher > notes[counter] ? higher : notes[counter];
    counter++;
    return getName(counter, notes, higher);
  } else {
    return higher;
  }
}
console.log(getName(counter, notes, higher));
