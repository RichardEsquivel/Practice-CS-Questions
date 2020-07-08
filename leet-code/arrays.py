#  The actual code for creating an Array to hold DVD's.
# DVD[] dvdCollection = new DVD[15]

# A simple definition for a DVD.
class DVD:
    def __init__(self, name, releaseYear, director):
        self.name = name
        self.releaseYear = releaseYear
        self.director = director

    def __str__(self):
        return f"{self.name} was directed by {self.director} and released in {self.releaseYear}."


RoboCop = DVD("RoboCop", 1989, "Paul Verhoven")


print(RoboCop)
