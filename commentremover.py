data = open("full_site/index.html").read()

def findall(data, s):
    ar = []
    for i in range(len(data) - len(s) + 1):
        if data[i:i+len(s)] == s:
            ar.append(i)
    return ar

start = findall(data, "<!--")
end = [x + 2 for x in findall(data, "-->")]

print("<!-- https://homepages.iitb.ac.in/~22b0967/ -->", end="")

to_write = 1
for i in range(len(data)):
    flag = 1
    if i in start or i in end:
        to_write = 1 - to_write
        flag = 0
    
    if to_write and flag:
        print(data[i], end="")


