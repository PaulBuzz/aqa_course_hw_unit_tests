/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
let maxAge = 60;

function checkAge(age) {
  if (typeof age === "string" && /^\d+$/.test(age)) {
    age = Number(age)
  }

  if (typeof age !== "number") {
    console.log("Incorrect data type")
  } else if (age < minAge) {
    console.log("You don't have access cause your age is " + age + " It's less then " + minAge)
  } else if (age >= minAge && age < maxAge) {
    console.log("Welcome!")
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel")
  } else {
    console.log("Technical work")
  }
}

console.log("Проверка значения строки '17':")
checkAge('17')

console.log("\nПроверка значения строки '25':")
checkAge('25')

console.log("\nПроверка значения числа 30:")
checkAge(30)

console.log("\nПроверка значения строки 'abc':")
checkAge('abc')

console.log("\nПроверка значений числа и строки '18a':")
checkAge('18a')
