
def curry(fn, *args, **kwargs):
    def wrapper(*iargs, **ikwargs):
        all_args = args + iargs
        all_kwargs = {**kwargs, **ikwargs}
        try:
            return fn(*all_args, **all_kwargs)
        except TypeError:
            return curry(fn, *all_args, **all_kwargs)
    return wrapper


def summary(a, b, c, d):
    return a + b + c + d


if __name__ == '__main__':

    f = curry(summary)

    y1 = f(1, 2, 3, 4)
    y2 = f(1, 2, 3)(4)
    y3 = f(1, 2)(3)(4)
    y4 = f(1)(2)(3)(4)
    y5 = f(1)(2, 3, 4)
    y6 = f(1)(2)(3, 4)
    y7 = f(1, 2)(3, 4)

    print(y1, y2, y3, y4, y5, y6, y7)
