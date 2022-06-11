#message = 'Hello world'
#print(type(message))

# Concaténation de deux str
#message = 'Hello' + 'world'

# Expression litérale en utilisant des tokens
from email import message


hello = 'Hello'
world = 'world'
message = '%s %s' %(hello, world)
#print(message)

# Ou avec la syntaxe récente fstring
name = 'John'
age = 32
print(f'Bonjour, {name}. Vous avez {age} ans.')
