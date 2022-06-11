/* Dans cet exercice, vous allez devoir créer un tableau JavaScript des couleurs,
avec les valeurs: Bleu, Rouge, Vert, Jaune, Blanc */

let colors = ["Bleu", "Rouge", "Vert", "Jaune", "Blanc"];

// 1. Faire afficher (dans la console par exemple) la longueur du tableau.
console.log(colors.length);

// 2. Faire afficher directement les valeurs : Bleu, Blanc, puis Rouge.
console.log(colors[0]);
console.log(colors[4]);
console.log(colors[1]);

// 3. Faire afficher toutes les valeurs du tableau de deux manières différentes.
// Avec la boucle for
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log("\n------");

// Avec forEach
colors.forEach(function (color) {
  console.log(color);
});

console.log("\n------");

// 4. Faire un nouveau tableau à plusieurs dimensions pour avoir "Bleu, Blanc et Rouge" d'une part, et "Jaune et Vert" d'autre part.
colorsMulti = [
  ["Bleu", "Blanc", "Rouge"],
  ["Vert", "Jaune"],
];

// 5. À partir de ce nouveau tableau, afficher directement les valeurs : "Blanc" puis "Vert".
console.log(colorsMulti[0][1]);
console.log(colorsMulti[1][0]);

console.log("\n------");

// 6. Utiliser la méthode la plus simple pour afficher toutes les valeurs de ce nouveau tableau.
colorsMulti.forEach(function (colorsElement) {
  colorsElement.forEach(function (color) {
    console.log(color);
  });
});

console.log("\n------");

for (let colorsIndex = 0; colorsIndex < colorsMulti.length; colorsIndex++) {
  for (
    let elementIndex = 0;
    elementIndex < colorsMulti[colorsIndex].length;
    elementIndex++
  ) {
    console.log(colorsMulti[colorsIndex][elementIndex]);
  }
}
