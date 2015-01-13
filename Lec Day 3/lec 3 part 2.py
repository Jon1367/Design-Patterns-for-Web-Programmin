__author__ = 'Spike1367'

class Car:
    def __init__(self):
        self.door = 0
        self.make = ""
        self.model = ""
        self.working = True
        self.automatic = True
        print "car created"
    def start(self):
        print self.make

steveCar = Car()
steveCar.make="Scooter"


AaronsCar = Car()
AaronsCar.make = "Honda"

steveCar.start()

