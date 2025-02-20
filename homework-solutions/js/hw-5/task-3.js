/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello'
const vowelsList = ['a', 'e', 'i', 'o', 'u', 'y']
const cleanWord = word.replace(/-/g, '')

let vowelsAndConsonantsResult = ''
let vowels = 0
let consonants = 0

for (let i = 0; i < cleanWord.length; i++) {
    if (vowelsList.includes(cleanWord[i])) {
        vowels++;
    } else {
        consonants++
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`

export { vowelsAndConsonantsResult }
