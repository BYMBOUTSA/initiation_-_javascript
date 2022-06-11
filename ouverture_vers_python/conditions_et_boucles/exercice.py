# Appliquez la notion

# Vous disposez du script suivant, permettant de créer un produit :
# CTRL+C pour copier, CTRL+V pour coller

'''#!/usr/bin/env python3

name = str(input('Indiquez le nom du produit: '))

price = float(input('Indiquez son prix: '))

available = bool(input('Indiquez si le produit est déjà disponible: '))

message = "Produit %s créé au prix de %s € HT, disponible à la vente = %s" % (name, price, available)

print(message)

priceWithTaxes = price * 1.2

priceWithTaxesMessage = "Le prix TTC sera de %s €" % (priceWithTaxes)

print(priceWithTaxesMessage) '''


# Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

# Question

# À l'aide d'une boucle, modifiez ce script afin de pouvoir ajouter plusieurs produits. L'utilisateur décidera de continuer ou non sa saisie, au moyen d'une question qui lui sera posée.

# Attention, il n'est pas possible de récupérer un input booléen aussi facilement qu'un entier, vous devrez donc utiliser une condition pour vérifier que la valeur saisie vaut bien true ou false. Vous pourrez par exemple vérifier que l'utilisateur a bien saisi "1".

#!/usr/bin/env python3

from urllib import response


add_new = True

while add_new is True:

    name = str(input('Indiquez le nom du produit: '))

    price = float(input('Indiquez son prix: '))


    message = "Produit %s créé au prix de %s € HT" % (name, price)

    print(message)

    priceWithTaxes = price * 1.2

    priceWithTaxesMessage = "Le prix TTC sera de %s €" % (priceWithTaxes)

    print(priceWithTaxesMessage)

    response = int(input('Souhaitez-vous ajouter un nouveau produit ? '))

    if 1 == response:
        add_new = True
    else:
        add_new = False