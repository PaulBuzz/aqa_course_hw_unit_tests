/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello'

let vowelsAndConsonantsResult = ''
let vowels = 0
let consonants = 0
const vowelsList = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < word.length; i++) {
    if (vowelsList.includes(word[i])) {
        vowels++;
    } else {
        consonants++
    }
}

vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`

export { vowelsAndConsonantsResult }
