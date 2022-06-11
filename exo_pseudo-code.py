def cesar(t, d, a):
    f = ""
    for l in t:
        p = a.index(l)
        n = len(a)
        np = (p + d) % n
        ld = a[np]
        f += ld
    return f
print(cesar("cesar", 3, "abcdefghijklmnopqrstuvwxyz"))