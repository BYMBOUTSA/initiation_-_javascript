# Opérateur d'identité (permet de vérifier si deux objets on le même emplacement en mémoire)
price = 100
new_price = 110

test = price is new_price
print(test) # False car non pas le même emplacement en mémoire

# Opérateur d'appartenance (permet de tester qu'une valeur est présente dans un objet)
hello = 'Hello world !'

test = 'world' in hello
print(test) # True for world is well present in the string hello

# Expression booléenne
x = 5
y = 9
expression = x > 5 and y <= 10

# Structure conditionnelle
if y > x:
    print('y est plus grand que x')
else:
    print('x est plus grand que y')

# avec elif
z = 8

if y > x:
    print('y est plus grand que x')
elif x == y and y > z:
    print('x et y sont égaux et y est plus grand que z')

# Imbrication des structures conditionnelles
if x > 0:
    print('x est positif')
    if x == 0:
        print('et égal à 0')
    else:
        print('strictement')

# Utilisation de la boucle for
users = ['Nicolas', 'Laurent', 'Laure']
for user in users:
    print(user)

print('------------\n')

# Boucle while
i = 0

while i < 3:
    print(users[i])
    i += 1