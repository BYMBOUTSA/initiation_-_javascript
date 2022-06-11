/* Différences */
/* Lorsque l'on souhaite récupérer une valeur dans un Array(), on va itérer sur ses index, tandis que, pour un objet , on va itérer sur ses propriétées. */

const cardInObject = {
  type: "BMW",
  doors: 3,
  color: "blue",
};

const cardInArray = ["BMW", 3, "blue"];

console.log(cardInObject.color); // blue
console.log(cardInArray[2]); // blue

/* Il n'est pas possible de connaître le nombre d'éléments présents dans un Object() sans le transformer en Array(). */
console.log(cardInObject.length); // undefined
console.log(cardInArray.length); // 3

/* similitude */
/* Un Object() peut stocker un Array(), et inversement Tout dépendra des besoins. Si un objet possède des caractéristique différentes, on utilisera un Object(). L'Array() va, dans la plupart des cas, nous servir à stocker des listes d'éléments de même type. */

const car1 = {
  type: "BMW",
  doors: 3,
  color: "blue",
};

const car2 = {
  type: "PEUGEOT",
  doors: 5,
  color: "grey",
};

// Dans l'objet garage nous stockons la liste des objets car
const garage1 = {
  cars: [car1, car2],
};

const garage2 = {
  cars: [car1, car2],
};

// Pour stocker la liste des garages nous utiliserons un Array()
const garages = [garage1, garage2];

/* Exercice */
// Question

// Dans le cadre d'une étude statistique au niveau national, on a stocké chaque moyenne de chaque élève par classe et par matière.

// À partir de cet objet, écrivez un code retournant en console la note de Jeanne en Anglais.

const regions = [
  {
    name: "Occitanie",

    departement: [
      {
        name: "Herault",

        lycees: [
          {
            name: "Clemenceau",

            adress: {
              cp: "34060",

              numberStreet: "31",

              street: "Avenue Georges Clemenceau",
            },

            classes: [
              {
                graduation: "1er",

                sector: "S",

                students: [
                  {
                    name: "Paul",

                    scores: [
                      { matiere: "Français", note: 12 },

                      { matiere: "Maths", note: 15 },

                      { matiere: "Espagnol", note: 7 },

                      { matiere: "Anglais", note: 9 },

                      { matiere: "Histoire", note: 10 },
                    ],
                  },

                  {
                    name: "Jeanne ",

                    scores: [
                      { matiere: "Français", note: 16 },

                      { matiere: "Maths", note: 10 },

                      { matiere: "Espagnol", note: 10 },

                      { matiere: "Anglais", note: 12 },

                      { matiere: "Histoire", note: 8 },
                    ],
                  },

                  {
                    name: "Marie",

                    scores: [
                      { matiere: "Français", note: 14 },

                      { matiere: "Maths", note: 18 },

                      { matiere: "Espagnol", note: 17 },

                      { matiere: "Anglais", note: 14 },

                      { matiere: "Histoire", note: 15 },
                    ],
                  },

                  {
                    name: "Pierre",

                    scores: [
                      { matiere: "Français", note: 7 },

                      { matiere: "Maths", note: 4 },

                      { matiere: "Espagnol", note: 8 },

                      { matiere: "Anglais", note: 6 },

                      { matiere: "Histoire", note: 8 },
                    ],
                  },

                  {
                    name: "Nicolas",

                    scores: [
                      { matiere: "Français", note: 11 },

                      { matiere: "Maths", note: 16 },

                      { matiere: "Espagnol", note: 8 },

                      { matiere: "Anglais", note: 10 },

                      { matiere: "Histoire", note: 13 },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const noteEnglishJeanne =
  regions[0].departement[0].lycees[0].classes[0].students[1].scores[3].note;
console.log(noteEnglishJeanne);

// Question
// Ecrivez un code retournant en console la moyenne générale de Nicolas.
let average = 0;
const notesNicolas =
  regions[0].departement[0].lycees[0].classes[0].students[4].scores;

for (let i = 0; i < notesNicolas.length; i++) {
  average += Math.round((notesNicolas[i].note / notesNicolas.length) * 10) / 10;
}
console.log(average);
