/*

[

{value: 5, number: 1},

{value: 2, number: 1},

{value: 0.5, number: 1},

{value: 0.2, number: 1}

]

*/

// On importe le module contenant la fonction giveMoney()
const moneyFunction = require("./money");
// On importe les méthodes de la librairies chai afin de pouvoir comparer des objets
const chai = require("chai");
const expect = chai.expect; // Using Except style
const assert = chai.assert; // Using Assert style
// => 1 billet de 5€, 1 piece de 2€, 1 piece de 0.5€ et 1 piece de 0.2€ soit un total de 7.70€

// Ecriture de la fonction de test
describe("Money", function () {
  describe("Render", function () {
    // Test lorque le montant donné par le client est supérieur au prix d'achat
    it("fonction giveMoney OK if price < mount", function (done) {
      // Arrange
      const price = 22.3;
      const mount = 30;

      // Act
      const result = moneyFunction.giveMoney(price, mount);

      // Assert
      expect(result).to.eql([
        { value: 5, number: 1 },
        { value: 2, number: 1 },
        { value: 0.2, number: 1 },
      ]);
      done();
    });
    // Test lorsque le montant donné par le client est inférieur au prix d'achat
    it("fonction giveMoney OK if price > mount", function (done) {
      // Arrange
      const price = 30;
      const mount = 20;

      // Act
      const result = moneyFunction.giveMoney(price, mount);

      // Assert
      expect(result).to.eql(
        `Il manque ${(price * 1000 - mount * 1000) / 1000}€`
      );
      done();
    });
  });
});
