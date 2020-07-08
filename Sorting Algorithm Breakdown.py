def sort(self):
        while self.can_move_right():
            self.swap_item()

            while self.can_move_right():
                self.move_right()

                if self.compare_item() == 1:
                    self.swap_item()

            while self.compare_item() != None:
                self.move_left()

            self.swap_item()
            self.move_right()
#this is a comment just to check
#Robot Starts with a None value from self.item= None from the SortingRobot Class definition. 
class SortingRobot:
    def __init__(self, l):
        """
        SortingRobot takes a list and sorts it.
        """
        self._list = l  # The list the robot is tasked with sorting
        self._item = None  # The item the robot is holding   <------------!!!!!!
        self._position = 0  # The list position the robot is at
        self._light = "OFF"  # The state of the robot's light
        self._time = 0  # A time counter (stretch)

#The array we will start with for test purposes:

array= [4, 3, 1, 0, 2]    


def sort(self):
        while self.can_move_right():
            self.swap_item()

#The robot is at the start of the array and CAN move right
#As soon as the robot is about to move right he still is at the first index with a "None
#value in his hand and he can see the 4 at the first index above.
#The "None" value the robot has will be swapped for the 4 at
#the 1st index just so the robot can start comparing values in the rest of the array with 
#the 4 it now has in it's hands

array= [None, 3, 1, 0, 2]    
'''
Robot is holding 4 now!!! in self.item
'''
while self.can_move_right():
                self.move_right()
#Robot starts moving right and is now holding 4 we compare that with the 3 at the 1st 
#index the robot can do a compare function in his definition to see if the 3 at the 1st 
#index is smaller than the 4 we have currently.
if self.compare_item() == 1:
                    self.swap_item()

# The 4 is greater than the 3 at the 1st index so if we are trying to move the lowest 
#values to the front of the array we want to swap the 4 we have for the 3,
#We are now holding the 3

array= [None, 4, 1, 0, 2]    
'''
Robot is holding 3 now!!!  in self.item
'''
#We can then with the 3 in our hands we compare that 3 with the 1 and since the 3 is larger we swap the 3 with the 1.
  if self.compare_item() == 1:
                self.swap_item()


array= [None, 4, 3, 0, 2]

'''
Robot is holding 1 now!!!  in self.item
'''
#now we start moving again to the right with a 1 in our hands and we compare that to the 0.

        while self.can_move_right():
                self.move_right()


#We then swap the 1 in our hand with the 0 as the 1 in our hand is larger than 0.
        if self.compare_item() == 1:
                    self.swap_item()

array= [None, 4, 3, 1, 2]

'''
Robot is holding 0 now!!!  in self.item
'''

#We move right again compare the 0 with the 2 at the last index the held item is so we wouldn't do the swap as below.
    if self.compare_item() == 1:
                    self.swap_item()

#We would normally keep on with moving right and not swapping BUT we can't move right as we are at the end of the array.
while self.can_move_right():
                self.move_right()

array= [None, 4, 3, 1, 2]

'''
Robot is holding 0 now!!!  in self.item
'''

#Then we can use the method that moves us left, from the end and we stop once we get to the None that is at the 0th index. We still are holding onto the 0 and we are trying to get it to the 0th index.

            while self.compare_item() != None:
                self.move_left()
 
#Now that we can no longer move left what can we do? Well we can swap the item so the 0 with the None and then move right. ##This will utlimately mean we shift the None to the end of the array.
            self.swap_item()
            self.move_right()


array= [0, 4, 3, 1, 2]
'''
Robot is holding None now!!!  in self.item
'''

#Going to check the prior conditions for the while loop still hold in order from the top

while self.can_move_right():
            self.swap_item()
#TLDR None will basically serve as a marker to let the algorithm now it can stop moving left and place the lowest value found at that position as when you move to the right through each loop you will have at the end the lowest value found.

#After the last move right from the last bit we are going to swap the None for the 4 at the 1st index

array= [0, None, 3, 1, 2]
'''
Robot is holding 4 now!!!  in self.item
'''

#We continue to move right and then do the compare as before
               while self.can_move_right():
                  self.move_right()

Do the compare:
if self.compare_item() == 1:
                    self.swap_item()

Robot is holding 4 is compared with 3 
array= [0, None, 3, 1, 2]

Do the Swap
Robot has 3
array is now= [0, None, 4, 1, 2]

Move to right
3 is greater than 1
do the swap,

Robot has 1
array is now= [0, None, 4, 3, 2]

Move to right
1 is less than 2 
Normally we move to right but we can't! A the end of the array 
So we can no longer fall the while loop for while self can move right

Now we follow:
while self.compare_item() != None:
                self.move_left()

as it is the next in the function:
 we move left:
while self.compare_item() != None:
                self.move_left()
Then when we reach None we swap  1 for None in the first Index
            self.swap_item()
array is now= [0, 1, 4, 3, 2]
Robot has None now:
and then we
            self.move_right()
array is now= [0, 1, 4, 3, 2]
and we are at the 2nd index and swap 4 for None then move right.

And we start following the logic available while we are moving right and then switching back to left:
Sooooo
while self.can_move_right():
            self.swap_item()

            while self.can_move_right():
                self.move_right()

                if self.compare_item() == 1:
                    self.swap_item()

            while self.compare_item() != None:
                self.move_left()

            self.swap_item()
            self.move_right()


Eventually the array is

array is now= [0, 1, None, 3, 2]
Holding 4
Swap for 3
array is now= [0, 1, None, 4, 2]
Swap for 2
array is now= [0, 1, None, 4, 3]
Holding 2
Then 2 gets to where the None is
array is now= [0, 1, 2, 4, 3]

Holding onto None
Move to right and Swap with 4
array is now= [0, 1, 2, None, 3]
Keeping moving to right
Swap with 3 since 4 is greater
array is now= [0, 1, 2, None, 4]
We reached end of array and can no longer move to the right
Move to the left
Holding onto 3
while self.compare_item() != None:
                self.move_left()
Swap None with 3
                self.swap_item()

array is now= [0, 1, 2, 3, 4]

            self.move_right()
Holding onto None

and I'm at 4 or the 5th index.

So I CAN NO LONGER MOVE RIGHT AGAIN AND THE SORTING ROBOT HOLDS ONTO THE NONE AND THE ARRAY IS SORTED!!!!







 