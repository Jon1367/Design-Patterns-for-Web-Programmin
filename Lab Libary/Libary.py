import random
class Library:
    def __init__(self):
        self.name = ""
        self.numberOfDice = 0
        self.numberOfSide = 0
        self.total = 0
    def addTotal(self,numDice,numSide):
        total = 0
        numSides = random.randint(1,numSide)
        numDice * numSides
        total = 0
class Print:
    def __init__(self,name,numberOfDice,numberOfSide,totoal):
        print(name + " rolled" + str(numberOfDice) + " " + str(numberOfSide) +" sided Dice and got " +str(totoal) )



