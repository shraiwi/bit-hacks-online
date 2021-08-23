import timeit
import numpy as np

test_data = None

CONST = 9 / 5

def setup():
    global test_data
    test_data = np.random.randint(0, 10000, 10000000, np.uint32)

def no_mulshift():
    global test_data
    test_data = test_data.astype(np.float32)
    test_data *= CONST
    test_data += 32
    test_data = test_data.astype(np.uint32)


def mulshift():
    global test_data
    test_data *= 461
    test_data >>= 8

tests = (no_mulshift, mulshift)

for test in tests:
    print(timeit.timeit(test, setup, number=100))