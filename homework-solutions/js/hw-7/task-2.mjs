/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }

  const lowerCaseWord = word.toLowerCase();
  let reversedWord = '';

  for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
    reversedWord += lowerCaseWord[i];
  }

  return lowerCaseWord === reversedWord;
}


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }

  const words = sentence.split(/\s+/).filter(word => word.length > 0);

  if (words.length === 0) {
    return [];
  }

  let maxLength = 0;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }

  const longestWords = words.filter(word => word.length === maxLength);

  return longestWords;
}

export { isPalindrom, findLongestWords };
