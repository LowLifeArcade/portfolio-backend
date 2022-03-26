# given a string return false if it contains unbalanced brackets
# balanced brakets means you have ( and ). Just having one is unbalanced

str = 'blue bottle  cafe :true bigblue unsolved'


def my_func(str):
    new = str.replace(':', '')
    newStr = new.split()
    newStr.sort()
    return ' '.join(newStr) + '.'


print(my_func(str))


def is_even(num):
    prime = True
    if (num % 2 == 0):
        return False
    while(prime):

        return False

print(is_even(12))
