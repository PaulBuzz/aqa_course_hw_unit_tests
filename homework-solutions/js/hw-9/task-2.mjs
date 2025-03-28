/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if (!character || typeof character !== 'object') {
    throw new Error('Character must be an object');
  }

  if (typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Character must have a name (string) and age (number)');
  }

  characters.push(character);
}

function getCharacter(name) {
  return characters.find(character => character.name === name);
}

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('minAge must be a number');
  }

  return characters.filter(character => character.age >= minAge);
}

function updateCharacter(name, newCharacter) {
  const character = getCharacter(name);
  if (!character) {
    throw new Error(`Character with name "${name}" not found`);
  }

  Object.assign(character, newCharacter);
}

function removeCharacter(name) {
  const index = characters.findIndex(character => character.name === name);
  if (index === -1) {
    throw new Error(`Character with name "${name}" not found`);
  }

  characters.splice(index, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
