const n = parseInt(
  prompt("Entrez un nombre, et sa factorielle sera affiché : ")
);

if (n < 0) {
  throw "Vous devez saisir un nombre positif";
}

let fact = 1;

let i = 2;

while (i <= n) {
  fact *= i;
  i += 1;
}

document.write(fact);
