//Fichier tests mocha : math.service.test.js

var assert = require("assert");
var mathFunctions = require("./tests.services");

//On crée un groupe que l'on nomme Calculatrice,
//qui regroupera tous les tests sur la feature Calculatrice de l'application
describe("Calculatrice", function () {
  //On crée un sous-groupe que l'on nomme Operations,
  // qui regroupera les tests sur les
  // Additions, Multiplications, etc..
  describe("Operations", function () {
    it("Fonctions mathématiques - Sum OK", function (done) {
      //Arrange
      let firstParam = 1;
      let secondParam = 2;

      //Act
      let result = mathFunctions.sum(firstParam, secondParam);

      //Assert
      assert.equal(result, 3);
      done();
    });

    it("Fonctions mathématiques - Multiply OK", function (done) {
      //Arrange
      let firstParam = 3;
      let secondParam = 2;

      //Act
      let result = mathFunctions.multiply(firstParam, secondParam);

      //Assert
      assert.equal(result, 6);
      done();
    });
  });
});
