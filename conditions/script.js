const el = document.getElementById("register-form");
el.addEventListener("submit", (event) => {
  event.preventDefault();

  let civility = event.target.female.checked ? "female" : "male";
  let name = event.target.name.value;
  let category = event.target.category.value;
  let newsletter = event.target.newsletter.checked;

  // Les variables déclarées ci-dessus contiennent les données du formulaire
  let displayedCivility = civility === "female" ? "Mme." : "M.";

  let messageNewsletter;
  if (newsletter) {
    messageNewsletter = "Merci de vous êtes abonné à notre newsletter";
  } else {
    messageNewsletter = "Inscrivez-vous vite à notre newsletter";
  }

  let displayedCategory;

  switch (category) {
    case "cold-starter":
      displayedCategory = "Entrée froide";
      break;
    case "soup":
      displayedCategory = "Soupe";
      break;
    case "main-course":
      displayedCategory = "Plat";
      break;
    case "fruit-dessert":
      displayedCategory = "Dessert (fruits)";
      break;
    case "chocolate-dessert":
      displayedCategory = "Dessert (chocolat)";
      brealk;
    default:
      displayedCategory = "Entrée froide";
  }

  alert(
    `Bonjour ${displayedCivility} ${name}. ${messageNewsletter}, elle permettra de vous envoyer de délicieuses recettes de votre catégorie préférée, ${displayedCategory}!`
  );
});
