
def partial(fn, x):
    return lambda *args: fn(x, *args)


def summary(a, b, c, d):
    return a + b + c + d


if __name__ == '__main__':
    f1 = partial(summary, 1)
    f2 = partial(f1, 2)
    f3 = partial(f2, 3)
    print(f3(4))
