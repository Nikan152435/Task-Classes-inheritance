// Character.test.js

const Character = require('../src/Character');

describe('Character class', () => {
  test('should create a Character object with correct name and default properties', () => {
    const character = new Character('John', 'Character');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Character');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    // Проверка атаки и защиты зависит от типа, оставьте это для конкретных классов
  });

  test('should throw an error if provided with incorrect values', () => {
    expect(() => new Character('Jo', 'Warrior')).toThrowError('Name and type should be strings');
  });

  // Добавьте больше тестов для проверки общих свойств и методов Character
});







