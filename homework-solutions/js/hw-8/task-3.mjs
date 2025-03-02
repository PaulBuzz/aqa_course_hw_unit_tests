/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const maxNumber = Math.max(...numbers);
  const sumOfArray = numbers.reduce((sum, num) => sum + num, 0);
  const expectedSum = (maxNumber * (maxNumber + 1)) / 2;

  if (sumOfArray === expectedSum) {
    return maxNumber + 1;
  }


  return expectedSum - sumOfArray;
}

export { findMissingNumber };
