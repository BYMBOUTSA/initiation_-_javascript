from datetime import datetime
# Appliquez la notion

''' Vous disposez du script suivant, permettant de créer plusieurs produits :
CTRL+C pour copier, CTRL+V pour coller '''

#!/usr/bin/env python3

'''addNew = True

whilepr addNew is True:

  name = str(input('Indiquez le nom du produit: '))

  price = float(input('Indiquez son prix: '))

  

  message = "Produit %s créé au prix de %s € HT" % (name, price)

  print(message)

  priceWithTaxes = price * 1.2

  priceWithTaxesMessage= "Le prix TTC sera de %s €" % (priceWithTaxes)

  print(priceWithTaxesMessage)

  response = int(input('Souhaitez-vous ajouter un nouveau produit ? '))

  

  if 1 == response:

    addNew = True

  else:

    addNew = False '''

  

# Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

# Question

# Découpez votre code afin de définir une fonction createProduct permettant de créer un produit, et une autre intitulée calcPriceWithTaxes permettant de calculer un prix TTC.
#!/usr/bin/env python3

def calcPriceWithTaxes(price):
  priceWithTaxes = price * 1.2
  priceWithTaxesMessage= "Le prix TTC sera de %s €" % (priceWithTaxes)
  print(priceWithTaxesMessage)

def createProduct():
  name = str(input('Indiquez le nom du produit: '))
  price = float(input('Indiquez son prix: '))

  now = datetime.now()

  currentTime = now.strftime('%d/%m/%y à %H: %M')
  

  message = "Produit %s créé au prix de %s € HT créé le %s" % (name, price, currentTime)
  print(message)
  calcPriceWithTaxes(price)


addNew = True

while addNew is True:

  createProduct()

  response = int(input('Souhaitez-vous ajouter un nouveau produit ? '))
  
  if 1 == response:
    addNew = True
  else:
    addNew = False

# Question

# À l'aide de la documentation, importez le module datetime nécessaire et, lors de la création d'un produit, indiquez la date et l'heure courante au format jj/mm/YYYY hh:mm.

# Aidez-vous des fonctions now() et strftime().
