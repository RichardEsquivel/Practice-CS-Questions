def reverse(list):
    # swap last element len[-1] with first element [0] and so on until you reach the middle.
    # we are taking the list and modifying in place
    left_index = 0
    # index value would be 1 less than length
    right_index = len(list) - 1

    # while will continue swap until values meet in the middle
    while left_index < right_index:

        list[left_index], list[right_index] = (
            list[right_index],
            list[left_index],
        )
        # left index starts at 0 and moves towards middle
        left_index += 1
        # right index starts at end and moves towards middle
        right_index -= 1


def reverse_words(list):
    # swap last element len[-1] with first element [0] and so on until you reach the middle.
    # we are taking the list and modifying in place
    left_index = 0
    # index value would be 1 less than length
    right_index = len(list) - 1

    # while will continue swap until values meet in the middle
    while left_index < right_index:

        list[left_index], list[right_index] = (
            list[right_index],
            list[left_index],
        )
        # left index starts at 0 and moves towards middle
        left_index += 1
        # right index starts at end and moves towards middle
        right_index -= 1



'''The letters within the list are in the correct order 