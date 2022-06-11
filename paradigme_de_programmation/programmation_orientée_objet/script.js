/* Programmation impérative */
// fonction d'inscription
/*function subscribe(email, username, password) {
  // ... Insertion des informations en base de données
  console.log("Utilisateur " + username + " inscrit !");
}

// fonction d'authentification
function login(username, password) {
  // ... Vérification des informations en base de données
  console.log("Bonjour " + username + " !");
}

// On déclare les valeurs à utiliser
let username = "John";
let email = "mail@john.com";
let password = "p455w0rd";

// On appelle les fonctions en leur donnant les valeurs
subscribe(email, username, password);
login(username, password); */

// On définit une classe User permettant de dire de quoi nous allons avoir besoin pour gérer les utilisateurs
/*class User {
  // On définit ici les données dont on a besoin pour nos utilisateurs
  constructor(email, username, password) {
    // Un utilisateur possède un e-mail, un nom et un mot de passe.
    this.email = email;
    this.username = username;
    this.password = password;
  }
  // Une fois les données définities, on va créer les fonctions qui agissent sur ces données
  // Fonction d'inscription. On note qu'elle ne prend pas de paramètres en entrée, mais utilise les données de la classe (ici, 'this.username')
  subscribe() {
    // ... Insertion des informations en base de données
    console.log("Utilisateur " + this.username + " inscrit !");
  }

  // Fonction d'authentification
  login() {
    // ... Vérification des informations en base de données
    console.log("Bonjour " + this.username + " !");
  }
}

// On crée notre objet à partir de la classe User. Pour cela, on lui donne les valeurs :
let john = new User("mail@john.com", "John", "p455w0rd");

// On appelle les fonctions. Ces fonctions utilisent les valeurs de l'objet 'john'. Ici, 'john' contient toutes les données et toutes les fonctions permettant de gérer un utilisateur.
john.subscribe();
john.login(); */

/*  Exercice */
// Appliquez la notion

// Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

// Question

// Imaginons une application permettant de gérer les étudiants d'une classe. Chaque étudiant possède un nom et un prénom, et nous allons avoir besoin d'afficher le nom complet d'un étudiant dans notre application. Voici une classe permettant de gérer ces informations :
// CTRL+C pour copier, CTRL+V pour coller

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;

    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

let john = new Student("John", "Doe");

console.log(john.getFullName());

// Exécutez ce code dans un repl.it. Qu'est-ce qui s'affiche dans la console ?
// Il s'affiche dans la console John Doe

// Question

// En vous aidant de notre étudiant John, créez un nouvel étudiant ayant le nom et le prénom de votre choix, et affichez son nom complet.
let jason = new Student("Jason", "Blanc");
console.log(jason.getFullName()); // Display in the console Jason Blanc
