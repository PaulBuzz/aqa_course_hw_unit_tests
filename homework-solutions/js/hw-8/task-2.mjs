/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  function countVowels(word) {
    const lowerCaseWord = word.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < lowerCaseWord.length; i++) {
      if (vowels.includes(lowerCaseWord[i])) {
        count++;
      }
    }

    return count;
  }

  const sortedArr = [...wordsArr];

  sortedArr.sort((a, b) => {
    const vowelsInA = countVowels(a);
    const vowelsInB = countVowels(b);

    return vowelsInA - vowelsInB;
  });

  return sortedArr;
}

export { sortedByVowels };
