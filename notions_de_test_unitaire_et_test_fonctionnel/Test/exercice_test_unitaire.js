// Question

// À partir de la fonction suivante, qui retourne le jour de la semaine, écrivez une fonction JavaScript qui testera la fonction ci-dessous en vous inspirant du pattern AAA.
// CTRL+C pour copier, CTRL+V pour coller

const getDayOfDate = (day, month, year) => {
  const d = new Date(year, month, day);

  switch (d.getDay()) {
    case 0:
      return "Dimanche";

    case 1:
      return "Lundi";

    case 2:
      return "Mardi";

    case 3:
      return "Mercredi";

    case 4:
      return "Jeudi";

    case 5:
      return "Vendredi";

    case 6:
      return "Samedi";
  }
};

// Pour réaliser ce test, on utilisera :

//     Arrange : donnée de la date du 15 mai 2020.

//     Act :  comparaison avec le résultat attendu.

//     Assert : validation avec un boolean en retour.

const getDayOfDateTest = () => {
  const act = getDayOfDate(15, 4, 2020);

  if (act === "Vendredi") {
    return true;
  }
  return false;
};

// console.log(getDayOfDateTest());

getDayOfDateTest()
  ? console.info("Test getDayOfDate ok")
  : console.error("Test getDayOfDate failed");
