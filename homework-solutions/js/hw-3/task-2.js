/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Введите целое положительное число от 1 до 9: ", (number) => {

    const num = Number(number)

    if (number > 0 && number <= 9) {
        const numberOne = Number(number)
        const numberTwo = String(number) + String(number)
        const numberThree = String(number) + String(number) + String(number)
        console.log("Результат:", numberOne + Number(numberTwo) + Number(numberThree))
    }

    else if (typeof number !== 'number') {
        console.log("Неверный ввод. Принимаются только целые числа от 1 до 9.");
    }
    readline.close();
});
