/*let compteur = 0;
while (compteur < 10) {
  if (compteur % 2 === 0) {
    console.log(compteur);
  }
  compteur++;
}


/* Exercice */

/*Question

La factorielle d'un nombre est la multiplication de tous les nombres entiers de 1 à ce nombre. Par exemple, la factorielle de 3 = 1x2x3, donc 6.

Voici une fonction JavaScript écrite en utilisant la programmation impérative, permettant de calculer la factorielle d'un nombre, puis d'afficher si le résultat est supérieur ou inférieur à 100. Cette fonction est ensuite appelée pour calculer le résultat avec le chiffre 3.
CTRL+C pour copier, CTRL+V pour coller*/

// On déclare la fonction ici
function factorielle(nombre) {
  let produit = 1;
  for (let i = 1; i <= nombre; i++) {
    produit *= i;
  }
  if (produit > 100) {
    console.log("Superieur");
  } else {
    console.log("Inferieur");
  }
}

// On appelle la fonction en lui donnant le paramètre 3
factorielle(3);

/*Sur le site Repl.it, créez un nouvel environnement en utilisant le langage "HTML, CSS, JS". Ouvrez ensuite le fichier "script.js" généré et collez-y le code ci-dessus, puis lancez l'exécution du script. Quel est le résultat affiché ?
// Le résultat est inferieur

Question

En modifiant l'appel à la fonction, déterminez à partir de quel nombre est-ce que la fonction affiche "Supérieur". */
factorielle(5); // le résultat est superieur à 5
