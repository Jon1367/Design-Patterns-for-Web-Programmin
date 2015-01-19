import random
class Library:
    def __init__(self):
        self.name = ""
        self.numberOfDice = 0
        self.numberOfSide = 0
        self.total = 0
    def addTotal(self,numDice,numSide):

        diceArray = []
        total = 0
        print(numSide)
        print(numDice)


        for i in range(numDice):

            dice = random.randint(1, int(numSide))
            diceArray.append(dice)
        for i in diceArray:
            total = total + i


        print(total)
        print(diceArray)


        return total
class Print:
    def __init__(self,name,numDice,numSide,total):
        print(name + " rolled " + str(numDice) + " Dice with " + str(numSide) +" sided Dice and got " + str(total))


