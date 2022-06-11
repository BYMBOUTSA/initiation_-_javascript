# Défi

# Grâce à toutes les notions, et surtout aux syntaxes, que nous avons abordées dans ce cours, nous allons réaliser ensemble un jeu du pendu.

# Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

# Question

'''La réalisation du jeu se fera en plusieurs étapes :

    Définissez une liste de mots dans un tableau

    Créez une première boucle de jeu qui va gérer le lancement d'une nouvelle partie

    Initialisez les différentes variables du jeu (compteur d'essai, lettres proposées, etc.)

    Récupérez un nombre au hasard entre 0 et le nombre d'éléments du tableau, puis récupérez le mot correspondant

    Demandez à l'utilisateur des propositions de lettres

    Pour chaque lettre, indiquez que l'utilisateur :

        a juste, en lui affichant le mot sous la forme d'une chaîne avec les lettres non découvertes masquées (ex : _a__a___ pour pantalon lorsqu'il découvre le a)

        a faux, en lui affichant le mot masqué avec le pendu représentant le compteur d'erreurs (cf annexe)

    À la fin du jeu, indiquez au joueur s'il a gagné (s'il a trouvé toutes les lettres du mot) ou s'il a perdu (s'il a atteint le maximum de tentatives)

    Proposez-lui de recommencer une nouvelle partie

Pour afficher le pendu, vous pourrez vous aider de la fonction suivante, qui prend en paramètre le nombre d'erreurs :
CTRL+C pour copier, CTRL+V pour coller '''

import random

def display_hangman(num_tries):
  print(" ____")
  print("|    |")
  print("|    %s" % ("O" if num_tries >= 1 else " "))
  print("|   %s%s%s" % ("/" if num_tries >= 3 else " ", "|" if num_tries >= 2 else " ", "\\" if num_tries >= 4 else " "))
  print("|   %s %s" % ("/" if num_tries >= 5 else " ", "\\" if num_tries >= 6 else " "))


def get_word_to_display(letters, word):
  word_to_display = ''

  for letter in word:
    if letter.lower() in letters:
      word_to_display += letter
    else:
      word_to_display += '_'

  return word_to_display

words = [  "Serviette",

  "Poivre",

  "Chaise",

  "Vert",

  "Ventre",

  "Parapluie",

  "Goupille",

  "Pantalon",

  "Botte",

  "Girafe"
]

stop_game = False
max_tries = 6

while not stop_game:
  num_tries = 0
  letters = ''

  number_random = random.randint(0, len(words) - 1)
  word_to_find = words[number_random]

  while num_tries != max_tries and '_' in get_word_to_display(letters, word_to_find):
    answer = ''
    while len(answer) != 1:
      answer = input('Quelle lettre voulez-vous ? ')
      if len(answer) != 1:
        print('Vous devez proposer une lettre')

    letter = answer[0].lower()
    letters += letter

    if not letter in word_to_find.lower():
      num_tries += 1
      display_hangman(num_tries)
    print('Mot à trouver : ' + get_word_to_display(letters, word_to_find))

  if num_tries == max_tries:
    print('Vous avez perdu ! Le mot était \'%s\'' % (word_to_find))
  else:
    print('Vous avez gagné malgré %d erreurs ! Le mot était \'%s\'' % (num_tries, word_to_find))
  
  stop_game = input('Voulez-vous recommencer ? O/n ')[0].lower() == 'n'






''' Résultat final :
CTRL+C pour copier, CTRL+V pour coller

Quelle lettre voulez-vous ? 
Vous devez proposer une lettre
Quelle lettre voulez-vous ? a
Mot à trouver : _a__a___
Quelle lettre voulez-vous ? aa
Vous devez proposer une lettre
Quelle lettre voulez-vous ? e
 ____
|    |
|    O
|      
|      
Mot à trouver : _a__a___
Quelle lettre voulez-vous ? i
 ____
|    |
|    O
|    | 
|      
Mot à trouver : _a__a___
Quelle lettre voulez-vous ? o
Mot à trouver : _a__a_o_
Quelle lettre voulez-vous ? n
Mot à trouver : _an_a_on
Quelle lettre voulez-vous ? t
Mot à trouver : _anta_on
Quelle lettre voulez-vous ? p
Mot à trouver : Panta_on
Quelle lettre voulez-vous ? k
 ____
|    |
|    O
|   /| 
|      
Mot à trouver : Panta_on
Quelle lettre voulez-vous ? l
Mot à trouver : Pantalon
Vous avez gagné malgré 3 erreurs ! Le mot était "Pantalon"
Voulez-vous recommencer ? O/n o
Quelle lettre voulez-vous ? e
Mot à trouver : ____e
Quelle lettre voulez-vous ? i
 ____
|    |
|    O
|      
|      
Mot à trouver : ____e
Quelle lettre voulez-vous ? o
Mot à trouver : _o__e
Quelle lettre voulez-vous ? u
 ____
|    |
|    O
|    | 
|      
Mot à trouver : _o__e
Quelle lettre voulez-vous ? s
 ____
|    |
|    O
|   /| 
|      
Mot à trouver : _o__e
Quelle lettre voulez-vous ? r
 ____
|    |
|    O
|   /|\
|      
Mot à trouver : _o__e
Quelle lettre voulez-vous ? l
 ____
|    |
|    O
|   /|\
|   /  
Mot à trouver : _o__e
Quelle lettre voulez-vous ? n
 ____
|    |
|    O
|   /|\
|   / \
Mot à trouver : _o__e
Vous avez perdu ! Le mot était "Botte"
Voulez-vous recommencer ? O/n n '''