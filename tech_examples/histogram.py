def word_count(s):
    tr = str.maketrans("", "", '":;,.-+=/\\|[]{}()*^&')
    s = s.translate(tr).lower()

    words = s.split()
    counts = {}

    for w in words:
        if w not in counts:
            counts[w] = 1
        else:
            counts[w] += 1

    return counts


# Read in the file
with open("robin.txt") as f:
    d = f.read()

# Get all the counts items
counts = list(word_count(d).items())

# Figure longest word
max_len = 0
for c in counts:
    ln = len(c[0])
    if ln > max_len:
        max_len = ln

# Sort everything based on count first, then alphabetical
# - allows you to reverse sort for that value in this case largest counts(for # in histogram) and second priority is e[0] which will be word count word itself
counts.sort(key=lambda e: (-e[1], e[0]))

# Print it all out
for c in counts:
    print(f"{c[0]:{max_len}}  ", end="")

    for _ in range(c[1]):
        print(f"#", end="")

    print()
    # print(counts) this will show a list of tuples in counts with word followed by count #
