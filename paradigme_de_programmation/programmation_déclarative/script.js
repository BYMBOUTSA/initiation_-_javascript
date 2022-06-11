//  Fonction non-déterministe
var compteur = 0;

function compte() {
  compteur++;
  return compteur;
}
console.log(compte()); // Display 1
console.log(compte()); // Display 2
