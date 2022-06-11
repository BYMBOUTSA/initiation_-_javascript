# Récupérer une longueur d'un objet
string = 'Hello world'
length = len(string)
print('La chaîne \'%s\' fait %s caractères de long' % (string, length))


# Les modules
import random

print(random.randint(0, 100))


# Déclaration d'une fonction
def say_hello(name, age = 0):
    print('Bonjour ' + name)
    if age > 0:
        print('Tu as %s ans' % (age))

# appel de la fonction
say_hello('Nicolas')


# Retourner une valeur
def get_full_name(first_name, last_name):
    return first_name + ' ' + last_name

# imbrication des fonctions
say_hello(get_full_name('Romain', 'Delpierre'), 25)

# Lors de l'appel d'une fonction nous pouvons intervertir les paramètres comme c'est le cas ci-dessous:
say_hello(age = 25, name = 'Romain')