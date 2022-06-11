/* Appliquez la notion
Question

Dans l'exercice précédent, nous avons installé un environnement Node.js. Nous allons à présent implémenter un premier test simple sur une fonction JavaScript.

Dans le dossier créé précédemment :

    Créez un fichier name.function.js.

    Créez un fichier test.js.

    Copiez-collez le code ci-dessous dans le fichier name.function.js.

    Installez la librairie Mocha via NPM : https://mochajs.org/.

CTRL+C pour copier, CTRL+V pour coller
 */

module.exports = {
  formatName: (name) => {
    const names = name.split("-");

    const firstLetter = name.substring(0, 1).toUpperCase();

    const otherLetter = name.substring(1).toLowerCase();

    return `${firstLetter}${otherLetter}`;
  },
};

// Dans le fichier test.js et en utilisant Mocha, testez que la première lettre de 'Pierre' soit 'P'.
