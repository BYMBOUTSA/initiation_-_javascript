// Question

// À partir du tableau des navigateurs web ci-dessous, vous allez devoir utiliser les méthodes pour :

// 1. Ajouter les éléments "Opera" et "Safari" au début du tableau en affichant la nouvelle taille du tableau dans la console.

// 2. Ajouter l'élément "Vivaldi" à la fin du tableau en affichant la nouvelle taille du tableau dans la console.

// 3. Remplacer Safari, Internet Explorer, et Edge par Firefox et Chrome en affichant les éléments supprimés et le tableau modifié.

// CTRL+C pour copier, CTRL+V pour coller

let webBrowsers = ["Internet Explorer", "Edge"];

// Réponse
// 1. Ajouter les éléments "Opera" et "Safari" au début du tableau en affichant la nouvelle taille du tableau dans la console.
console.log(webBrowsers.unshift("Opera", "Safari"));

// 2. Ajouter l'élément "Vivaldi" à la fin du tableau en affichant la nouvelle taille du tableau dans la console.
console.log(webBrowsers.push("Vivaldi"));

// 3. Remplacer Safari, Internet Explorer, et Edge par Firefox et Chrome en affichant les éléments supprimés et le tableau modifié.
console.log(webBrowsers.splice(1, 3, "Firefox", "Chrome"));
