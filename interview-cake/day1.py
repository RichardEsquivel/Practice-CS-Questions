# First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

# So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

# The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
# The values are the price (in US dollars) of one share of Apple stock at that time.
# So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

# Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

# For example:

#   stock_prices = [10, 7, 5, 8, 11, 9]

# get_max_profit(stock_prices)
# # Returns 6 (buying for $5 and selling for $11)

# No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

# stock_prices = [10, 7, 5, 8, 11, 9]

# get_max_profit(stock_prices)

'''
By hand I would go through each with first value being a and second value being b if b was larger than a I would subract a from b then compare that with all other values that fulfill that condition. And keep the largest for that i I would then do this for each value and compare who had the largest value.

A brute force approach tries all possible answers to find the correct solution.

A greedy algorithm chooses the best option at each step such as picking the largest coin to get you closest to the exact change of 66 cents.  1 quarter then 1 quarter one dime one nickel one penny.

Validating a greedy algorithm requires extensive testing or show that it is as good as the optimal answer.

Bottoms up algorithms.

Recursion has memory cost when it builds up the call stack.

Bottoms up starts from beginning as opposed to a recursive which often starts from the end and works backwords.
'''

# Recursive approach to problem of "multiply all numbers in the range of 1 to n"


# def product_1_to_n(n):
#     # n>=1 in this scenario
#     return n * product_1_to_n(n-1) if n > 1 else 1

# conditional ternary operator form in JS

# function product1ToN(n) {
#   / we assume n>=1
#   return(n>1) ? (n * product1ToN(n-1)) :1;
# }

# bottoms up method starts from the bottom and continues on
# Memoization ensures that a function doesn't run for the same inputs more than once by keeping a record of the results for the given inputs (usually in a dictionary).

# For example, a simple recursive function for computing the nnth Fibonacci number:

# def fib(n):
#   if n < 0:
#       raise IndexError(
#           'Index was negative. '
#           'No such thing as a negative index in a series.'
#       )
#   elif n in [0, 1]:
#       # Base cases
#       return n

#   print("computing fib(%i)" % n)
#   return fib(n - 1) + fib(n - 2)


'''
Logarithms in binary search (ex. 1)
This comes up in the time cost of binary search, which is an algorithm for finding a target number in a sorted list. The process goes like this:

Start with the middle number: is it bigger or smaller than our target number? Since the list is sorted, this tells us if the target would be in the left half or the right half of our list.
We've effectively divided the problem in half. We can "rule out" the whole half of the list that we know doesn't contain the target number.
Repeat the same approach (of starting in the middle) on the new half-size problem. Then do it again and again, until we either find the number or "rule out" the whole set.
'''

# 0 1
# 1 2

# a = [10, 7, 5, 8, 11, 9, 32, 89, 45, 66, 2, 1]


# def square_list_in_place(int_list):
#     for index, element in enumerate(int_list):
#         int_list[index] *= element


# # note on checking why this doesn't work
# # print(square_list_in_place(a))

# square_list_in_place(a)

# print(a)


def combine_sorted_lists(list_one, list_two):
    list_one_index = 0
    list_two_index = 0
    merged_list = []

    # Both lists have some items left in them.
    while list_one_index < len(list_one) and list_two_index < len(list_two):
        # Choose the smaller of the two items and add it to the
        # merged list.
        if list_one[list_one_index] <= list_two[list_two_index]:
            merged_list.append(list_one[list_one_index])
            list_one_index += 1
        else:
            merged_list.append(list_two[list_two_index])
            list_two_index += 1

    # Grab any lingering items in the first list after we've
    # exhausted the second list
    while list_one_index < len(list_one):
        merged_list.append(list_one[list_one_index])
        list_one_index += 1

    # Grab any lingering items in the second list after we've
    # exhausted the first list
    while list_two_index < len(list_two):
        merged_list.append(list_two[list_two_index])
        list_two_index += 1

    return merged_list


def merge_sort(the_list):

    # Base case: single element list
    if len(the_list) <= 1:
        return the_list

    # Split the input in half
    middle_index = len(the_list) // 2
    left = the_list[:middle_index]
    right = the_list[middle_index:]

    # Sort each half
    left_sorted = merge_sort(left)
    right_sorted = merge_sort(right)

    # Merge the sorted halves
    return combine_sorted_lists(left_sorted, right_sorted)


a = [10, 7, 5, 8, 11, 9, 32, 89, 45, 66, 2, 1]

b = merge_sort(a)

print(b)
