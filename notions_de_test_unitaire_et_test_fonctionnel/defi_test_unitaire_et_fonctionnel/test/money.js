/* Défi

On vous demande d’implémenter des tests unitaires sur une fonction d'un logiciel de caisse, qui calcule le montant de monnaie à rendre.

Le résultat pour un achat de 22,30 € et un paiement de 30 € sera retourné sous le format :
CTRL+C pour copier, CTRL+V pour coller
 */

/* Question

Implémentez deux tests unitaires sur la fonction giveMoney().

Pour réaliser cet exercice, vous devrez partir du dossier créé :

    Créez deux fichiers : money.js dans lequel vous copierez le code ci-dessous, et test.js dans lequel vous écrirez vos tests unitaires.

    Installez Mocha.

    Dans le fichier package.json, remplacez "test": "echo \"Error: no test specified\" && exit 1" par "test": "mocha".

    Premier test : lorsque le montant donné par le client est supérieur au prix d'achat.

    Deuxième test : lorsque le montant donné par le client est inférieur au prix d'achat.

Pour lancer le test, il faudra taper la commande npm test.
CTRL+C pour copier, CTRL+V pour coller */

// le parametre price représente le montant des achats du client

// le parametre mount représente la somme donnée par le client

module.exports = {
  giveMoney: (price, mount) => {
    if (mount > price) {
      // les différentes valeurs possibles

      const typeOfMoney = [
        500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01,
      ];

      // le tableau qui sera retourné

      const render = [];

      // calcul de la différence entre le montant donné par le client et le montant des achats

      let MoneyToGive = (mount * 100 - price * 100) / 100;

      // On boucle sur le tableau des valeurs

      typeOfMoney.forEach((money) => {
        // on calcul le quotient entre le montant à rendre et chaque valeurs

        const reste = MoneyToGive / money;

        // si le quotient est supérieur ou égale à 1 alors

        if (reste >= 1) {
          // On crée un objet avec la valeur et le reste arrondi à l'entier inférieur

          const tempory = { value: money, number: Math.floor(reste) };

          // On ajoute cet objet dans le tableau final

          render.push(tempory);

          // On recalcul le nouveau montant à rendre

          MoneyToGive =
            (MoneyToGive * 100 - money * tempory.number * 100) / 100;
        }
      });

      return render;
    } else {
      return `Il manque ${(price * 1000 - mount * 1000) / 1000}€`;
    }
  },
};
