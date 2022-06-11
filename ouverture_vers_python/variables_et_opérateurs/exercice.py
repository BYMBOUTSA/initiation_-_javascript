# Appliquez la notion

# Pour réaliser cet exercice, vous aurez besoin de travailler sur l'environnement de travail :

# Question

# Écrivez un script qui permettrait à un utilisateur de créer un nouveau produit.

'''Pour cela, il devra renseigner les informations suivantes :

    Le nom du produit, de type texte

    Son prix HT, un nombre à virgule

# Une fois ces informations renseignées, vous afficherez la phrase suivante en utilisant les tokens de remplacement : "Produit ... créé au prix de ... € HT".
'''

name_product = input('Indiquez le nom du produit : ')
price_product = float(input('Indiquez le prix du produit : '))


print('Produit %s créé au prix de %s € HT' %(name_product, price_product)) 

# Question

# Affichez un second message en calculant le prix TTC du produit, on y appliquera une TVA de 20 %.
price_ttc = price_product * 1.2
print('Produit %s créé au prix de %s € HT, avec un prix TTC %s' %(name_product, price_product, price_ttc))
