/* Avec la programmation impérative */
/*function maximum(list) {
  let currentMax = 0;
  // Pour tous les éléments du tableau
  for (let i = 0; i < list.length; i++) {
    // Si la valeur maximale est plus petite que la valeur actuelle du tableau
    if (currentMax < list[i]) {
      // La valeur actuelle devient notre valeur maximale
      currentMax = list[i];
    }
  }
  return currentMax;
}

// Exemple d'un appel
console.log(maximum([3, 4, 1, 6, 7, 3, 5])); // Display 7 */

/* Avec la programmation fonctionnelle */
/*function maximum(currentMax, list) {
    // Si la liste est vide, alors c'est la valeur maximale trouvée jusqu'à présent
    if (list.length == 0) {
        return currentMax;
    }
    // On compare cette valeur avec le premier élément de la liste
    // Si la première valeur de la liste est supérieure
    if (currentMax < list[0]) {
        // On calcule le maximum entre la première valeur et le reste de la liste
        return maximum(list[0], list.slice(1));
    }   else {
        // Sinon on calucule le maximum entre le maximum actuel et le reste de la liste
        return maximum(currentMax, list.slice(1));
    }
}
console.log(maximum(0, [3, 4, , 6, 7, 1, 3, 5])); // Display 7 */

/* Exercice */

// Question

// La récursivité est un concept très important en programmation fonctionnelle. Dans l'exercice sur la programmation impérative, nous avons vu le code JavaScript permettant de calculer la factorielle d'un nombre :
// CTRL+C pour copier, CTRL+V pour coller

/*function factorielle(nombre)
{
  let produit = 1;
  for (let i = 1; i <= nombre; i++) {
    produit *= i;
  }
} */

// Voici le code permettant de la calculer en utilisant la programmation fonctionnelle :
// CTRL+C pour copier, CTRL+V pour coller

function factorielle(nombre) {
  if (nombre === 0) {
    return 1;
  }

  return nombre * factorielle(nombre - 1);
}

console.log(factorielle(5));

// Lancez ce code dans un repl.it. Quel est le résultat affiché ?
// Display 120

// Question

// La factorielle peut être définie mathématiquement grâce à sa définition par récurrence. Comparez cette définition mathématique avec les deux fonctions ci-dessus. Laquelle est la plus fidèle ? À quelles partie de notre code correspond chaque étape de la définition ?
/*function factorielle(nombre)
{
  if (nombre === 0) {
    // 0! = 1
    return 1;
  }
  // n! = (n – 1)! × n
  return nombre * factorielle(nombre - 1);
}

console.log(factorielle(5)); */
