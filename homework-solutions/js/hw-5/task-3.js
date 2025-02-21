/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
function countVowelsAndConsonants(word) {
    const vowelsList = ['a', 'e', 'i', 'o', 'u', 'y'];
    const consonantsList = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
        'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

    const cleanWord = word.replace(/-/g, '');

    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < cleanWord.length; i++) {
        const char = cleanWord[i].toLowerCase();

        if (vowelsList.includes(char)) {
            vowels++;
        } else if (consonantsList.includes(char)) {
            consonants++;
        }
    }

    const vowelsAndConsonantsResult = `${word} contains ${vowels} vowels and ${consonants} consonants`;

    return vowelsAndConsonantsResult;
}

const word = 'hello';
const vowelsAndConsonantsResult = countVowelsAndConsonants(word);

export { vowelsAndConsonantsResult };
