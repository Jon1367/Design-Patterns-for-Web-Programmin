from Libary import Library
from Libary import Print

class MainHanlder():
    def __init__(self):
        self.name = raw_input("What is your Name")
        self.numDice = raw_input("How many Dice would you like to roll:")
        self.sideDice = raw_input("How many Sides do the dice have:")

        new_player = Library()
        new_player.name = self.name
        new_player.numDice = int(self.numDice)
        new_player.sideDice = int(self.sideDice)
        new_player.total = new_player.addTotal(new_player.numDice,new_player.sideDice)

        Print(new_player.name,new_player.numDice,new_player.sideDice,new_player.total)

MainHanlder()