def has_negatives(a):
    h = {}

    for i in a:
        if i >= 0:
            h[i] = True

    r = []

    for i in a:
        if i < 0 and h[-i]:
            r.append(-i)

    return r


if __name__ == "__main__":
    print(has_negatives([-1, -2, 1, 2, 3, 4, -4]))

