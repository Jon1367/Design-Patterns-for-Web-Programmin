from Libary import Library
from Libary import Print


name = raw_input("What is your Name")
numDice = raw_input("How many Dice would you like to roll:")
sideDice = raw_input("How many Sides do the dice have:")

new_player = Library()
new_player.name = name
new_player.numDice = numDice
new_player.sideDice = sideDice
new_player.total = new_player.addTotal(numDice,sideDice)

Print(new_player.name,new_player.numDice,new_player.sideDice,new_player.total)

