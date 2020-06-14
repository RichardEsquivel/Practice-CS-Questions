# lambda expressions are single line functions that must be assigned a name to be used

g = lambda x, y: x * y

print(g(2, 3))

# Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
# The argument will always be a single character.
# Not all inputs will have a counterpart (e.g. numbers), in which case return the inputs char code.


def counterpartCharCode(char):
    # get the unicode value of the char passed in
    unicode_value = ord(char)
    # check if unicode value converted is a string
    if isinstance(chr(unicode_value), str):
        # if it is a letter value change its case and then return new unicode value
        swapped_case = chr(unicode_value).swapcase()
        return ord(swapped_case)
    else:
        return unicode_value
