
def partial(fn, *args):
    return lambda *rest: fn(*(args + rest))


def summary(a, b, c, d):
    return a + b + c + d


if __name__ == '__main__':
    f1 = partial(summary, 1)
    f2 = partial(f1, 2)
    f3 = partial(f2, 3)
    print(f3(4))

    f11 = partial(summary, 1, 2)
    f12 = partial(f11, 3)
    print(f12(4))
