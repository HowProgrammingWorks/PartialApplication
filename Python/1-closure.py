import math


def create_log(base):
    def log(n):
        return math.log(n, base)
    return log


if __name__ == '__main__':
    lg = create_log(10)
    ln = create_log(math.e)

    print('lg(100) = ', lg(100))
    print('ln(5) = ', ln(5))
