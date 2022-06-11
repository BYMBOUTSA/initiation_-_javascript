// Cette fonction utilise le paradigme fonctionnel
function getDeepestFirstChildren(node) {
  if (node.children[0]) {
    return getDeepestFirstChildren(node.children[0]);
  }
  return node;
}

// Cette classe indique de la Programmation Orientée Objet
class GoogleURL {
  constructor(text) {
    this.text = text;
    this.query = encodeURIComponent(text);
  }

  getLink() {
    return "http://www.google.com/search?q=" + this.query;
  }
}

// Le script principal, qui appelle les autres éléments, est en programmation impérative
for (article of document.getElementById("content").children) {
  let children = getDeepestFirstChildren(article);
  let googleURL = new GoogleURL(children.textContent);
  // Nous créons un nouveau noeud en HTML, qui est un langage déclaratif
  children.innerHTML =
    '<a href=""+googleURL.getLink()+">' + googleURL.text + "</a>";
}
