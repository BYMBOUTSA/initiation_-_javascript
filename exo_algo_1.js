let valeur_1 = 0,
  valeur_2 = 1,
  result = 0;
while (result < 20) {
  result = valeur_1 + valeur_2;
  valeur_1 = valeur_2;
  valeur_2 = result;
  console.log(valeur_1, valeur_2, result);
}
