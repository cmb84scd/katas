## Hungarian Vowel Harmony (easy)

This is a Codewars 7kyu kata done in Ruby.

### Task

Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

Your goal is to create a function `dative()` which returns the valid form of a valid Hungarian word `word` in dative case i.e. append the correct suffix `nek` or `nak` to the word `word` based on vowel harmony rules.

#### Vowel Harmony Rules (simplified)

When the last vowel in the word is

1. a front vowel `(e, é, i, í, ö, ő, ü, ű)` the suffix is `-nek`
2. a back vowel `(a, á, o, ó, u, ú)` the suffix is `-nak`

Examples:

```text
dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"
```
