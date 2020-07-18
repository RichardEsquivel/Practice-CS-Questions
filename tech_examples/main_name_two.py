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
