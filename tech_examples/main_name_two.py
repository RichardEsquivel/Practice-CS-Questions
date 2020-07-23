# import main_name_one


# print("I am main_name_two:", __name__)
import random

dictionary = {
    "tennis": ["her", "two", "lemons", "lemons", "frog"],
    "to": ["frogs", "frogs", "apples", "baked",],
}
first_word = [word for word in dictionary.keys()]

for _ in range(6):
    word = random.choice(first_word)
    print(word, end="  ")
    choose_next = dictionary[word]
    word = random.choice(choose_next)
    print(word, end="  ")


import random

# Read in all the words in one go
with open("input.txt") as f:
    words = f.read()

# TODO: analyze which words can follow other words
# $%$Start
# $%$End

# TODO: construct 5 random sentences
# $%$Start
words = words.split()
following = {}  # Keeps track of all the words that can follow a word

prev = None

for w in words:
    if prev is not None:

        # Make an empty list for the first entries
        if prev not in following:
            following[prev] = []

        # Add word to the list of those that are following
        following[prev].append(w)

    prev = w

# Words that we can start a sentence with
#
# We'll get clever and look for words where either the first letter is a
# capital, or the second is (presumably following a quote):
is_good_start = lambda x: x[0].isupper() or len(x) > 1 and x[1].isupper()
start_words = [w for w in following.keys() if is_good_start(w)]

# Print a number of paragraphs
for _ in range(5):

    # Choose the starting word
    w = random.choice(start_words)

    stopped = False
    stop_punct = ".!?"  # Stop on any of these

    while not stopped:
        print(w, end=" ")
        # condition of dog? at end of sentence or someting like dogs!" word longer than 1 element
        if w[-1] in stop_punct or len(w) > 1 and w[-2] in stop_punct:
            stopped = True
        else:
            # Follow to the next word in the chain
            next_words = following[w]
            w = random.choice(next_words)

    # print("\n", following)
