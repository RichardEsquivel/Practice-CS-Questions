Merging meeting times
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. In HiCal, a meeting is stored as a tuple 


  [(1, 3), (2, 4)] These meetings overlap because [0][0] is 1 and lower than [1][0] and [1][1] is higher than [0,1]  4 is higher than 3 


If the end time of the first meeting is => the start time of the second meeting we merge the two meetings into one time range. The resulting time range's start time is the first meeting's start and it's end time is the later of the two meetings end times.

But comparing every meeting to every other meeting for the merge is o(n^2) ex 9x9.

Can we try and get O(n) time. Which is doing this in one pass. Ordering of meetings is random and is stored as a tuple, 

What if we sorted our meetings by start time? Then any meetings that could be merged or checked by this comparison would always be adjacent!

We can run several different kinds of sorts, sorting takes 