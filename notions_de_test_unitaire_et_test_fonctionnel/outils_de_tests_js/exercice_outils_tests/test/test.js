const nameFunction = require("./name.function");
var assert = require("assert");

// On écrit notre fonction de test
describe("NameFunction", () => {
  describe("Render", () => {
    // Test lorsque le montant donné par le client est supérieur au prix d'achat
    it("first letter is uppercase", function (done) {
      // Arrange
      const name = "pierre";

      // Act
      const result = nameFunction.formatName(name);

      // Assert
      assert.equal(result.substring(0, 1), "P");
      done();
    });
  });
});
