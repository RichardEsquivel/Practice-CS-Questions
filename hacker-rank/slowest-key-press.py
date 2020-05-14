'''

1
1. Slowest Key Press
Engineers have redesigned a keypad used by ambulance drivers in urban areas. In order to determine which key takes the longest time to press, the keypad is tested by a driver. Given the results of that test, determine which key takes the longest to press.



Example

keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]]



Elements in keyTimes[i][0] represent encoded characters in the range ascii[a-z] where a = 0, b = 1, ..., z = 25. The second element, keyTimes[i][1] represents the time the key is pressed since the start of the test.   The elements will be given in ascending time order. In the example, keys pressed, in order are 0102encoded = abac at times 2, 5, 9, 15.  From the start time, it took 2 - 0 = 2 to press the first key, 5 - 2 = 3 to press the second, and so on. The longest time it took to press a key was key 2, or 'c', at 15 - 9 = 6.


Function Description

Complete the function slowestKey in the editor below.



slowestKey has the following parameter(s):

    int keyTimes[n][2]:  the first column contains the encoded key pressed, the second contains the time at which it was pressed



Returns:

    char: the key that took the longest time to press



Constraints

1 ≤ n ≤ 105
0 ≤ keyTimes[i][0] ≤ 25 (0 ≤ i < n)
1 ≤ keyTimes[i][1] ≤ 108 (0 ≤ i < n)
There will only be one key with the worst time.
keyTimes is sorted in ascending order of keyTimes[i][1]
'''

import sys
import re
import random
import os
import math


#
# Complete the 'slowestKey' function below.
#
# The function is expected to return a CHARACTER.
# The function accepts 2D_INTEGER_ARRAY keyTimes as parameter.
#
# We are going to be comparing the keytimes[i][1] value to the previous time and by comparing all pairs we can determine which key press took the longest.

# This is a nested list
keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]]


def slowestKey(keyTimes):
    slowest_key = keyTimes[0][0]
    slowest_key_time = keyTimes[0][1]

    for i in range(1, len(keyTimes)):
        current_key_time = keyTimes[i][1] - keyTimes[i - 1][1]

        if current_key_time > slowest_key_time:
            slowest_key = keyTimes[i][0]
            slowest_key_time = keyTimes[i][1] - keyTimes[i - 1][1]
# this is becaues for unicode the integer value for the slowest key would be what it is within the current list plus the unicode integer value of a from ord('a')
    return chr(ord('a') + slowest_key)


# def slowestKey(keyTimes):
#     letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
#                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
#     slowest_key = keyTimes[0][0]
#     slowest_key_time = keyTimes[0][1]

#     for i in range(1, len(keyTimes)):
#         current_key_time = keyTimes[i][1] - keyTimes[i - 1][1]

#         if current_key_time > slowest_key_time:
#             slowest_key = keyTimes[i][0]
#             slowest_key_time = keyTimes[i][1] - keyTimes[i - 1][1]
#     return letters[slowest_key]

print(slowestKey(keyTimes))

#  if __name__ == '__main__':
#     fptr= open(os.environ['OUTPUT_PATH'], 'w')

#     keyTimes_rows= int(input().strip())
#     keyTimes_columns= int(input().strip())

#     keyTimes= []

#     for _ in range(keyTimes_rows):
#         keyTimes.append(list(map(int, input().rstrip().split())))

#     result= slowestKey(keyTimes)

#     fptr.write(str(result) + '\n')

#     fptr.close()
