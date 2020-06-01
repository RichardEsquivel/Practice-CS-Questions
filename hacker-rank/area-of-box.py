# recognize the pattern, formulate code, check for edge cases

# number of ways to arrange cables of a certain bundle dimension
def numberWays(dimensions):
    # This represents the sum total of how many number of ways we can arrange a box of certain dimensions with certain bundle sizes 2x3 box has 6 ways to place 1x1 bundles 2 ways to place 2x2 bundle
    totalWays = []

    for (r, c) in dimensions:
        total = 0

        while r > 0 and c > 0:
            total += r * c
            r -= 1
            c -= 1

        totalWays.append(total)

    return totalWays
