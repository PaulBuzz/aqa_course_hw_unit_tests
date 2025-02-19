/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
let number = 10;

for (let i = 0; i <= 5; i++) {
    evenNumbersResult += number;
    if (i < 5) {
        evenNumbersResult += "-"
    }
    number -= 2;
}
console.log(evenNumbersResult)


/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = ''
let smile = ":)"

for (let i = 0; i < 5; i++) {
    smilePatternResult += smile;
    if (i < 4) {
        smilePatternResult += "\n"
    }
    smile += ":)";
}
console.log(smilePatternResult)

// /**
//  * Заменить все пробелы в переменной text на "1".
//  * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
//  * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
//  */

let replaceSpacesWithOneResult = '';
const text = 'Hello! I am a JS student!';
replaceSpacesWithOneResult = text.replaceAll(" ", "1");

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
