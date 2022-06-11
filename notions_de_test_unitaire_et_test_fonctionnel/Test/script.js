const multiply = (Number) => Number * 3;

console.log(multiply(2));

// Fonction de test
const multiplyTest = () => {
  const result = multiply(4);

  if (result === 8) {
    return true;
  }
  return false;
};

multiplyTest()
  ? console.info("Test multiply ok")
  : console.error("Test multiply failed");
