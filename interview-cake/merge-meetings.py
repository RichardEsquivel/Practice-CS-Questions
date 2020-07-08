def merge_ranges(meetings):

    # Sort by start time
    sorted_meetings = sorted(meetings)

    # Initialize merged_meetings with the earliest meeting
    merged_meetings = [sorted_meetings[0]]

    for current_meeting_start, current_meeting_end in sorted_meetings[1:]:
        last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]

        # If the current meeting overlaps with the last merged meeting, use the
        # later end time of the two, this takes care of on first start up if this current meeting stretches all the way to the end and this last unit is a merged meeting, after the first append duplicate start times are merged depending on which has the later end time as that will now be the merged_meetings[-1]
        if (current_meeting_start <= last_merged_meeting_end):
            merged_meetings[-1] = (last_merged_meeting_start,
                                   max(last_merged_meeting_end,
                                       current_meeting_end))
        else:
            # Add the current meeting since it doesn't overlap
            merged_meetings.append(
                (current_meeting_start, current_meeting_end))

    return merged_meetings


a = [(0, 1), (3, 4), (4, 5), (1, 3), (7, 10),
     (6, 8), (11, 13), (13, 14), (15, 17)]

# a = [(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
# this would return   [(0, 1), (3, 8), (9, 12)]

b = merge_ranges(a)

print(b)


'''1.What if we did have an upper bound on the input values? Could we improve our runtime? Would it cost us memory?
2.Could we do this "in place" on the input list and save some space? What are the pros and cons of doing this in place?
'''
