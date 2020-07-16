# Your code here
cache = {}
def expensive_seq(x, y, z):
    # Your code here
    if x <= 0:
        return y + z
    if (x, y, z) not in cache:
        ##So for here it just wants you to outright return y + z if x <= 0 so this would go above the function expression
        #You can check for this explicitly as you do for x >0 tests still pass without it being check but I like the being thorough on checking bounds
        if x >  0 :
             #you can also separate this out in 3 lines just use an escape character after each line \
            cache[(x,y,z)] = expensive_seq(x-1,y+1,z) + expensive_seq(x-2,y+2,z*2) + expensive_seq(x-3,y+3,z*3)
    #Just return the cache with a tuple inside as an entry so "return cache[(x,y,z)] below
    #return x, y, z
    return cache[(x,y,z)]
if __name__ == "__main__":
    for i in range(10):
        x = expensive_seq(i*2, i*3, i*4)
        print(f"{i*2} {i*3} {i*4} = {x}")
    print(expensive_seq(150, 400, 800))