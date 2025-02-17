def high(x):
    words = x.split(" ")
    scores = []

    for word in words:
        score = 0
        for char in word:
            score += ord(char) - 96
        scores.append(score)

    return words[scores.index(max(scores))]
