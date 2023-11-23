// Bowerman.test.js

const Bowerman = require('../src/Bowerman');

describe('Bowerman class', () => {
  test('should create a Bowerman object with correct name and default properties', () => {
    const bowerman = new Bowerman('John', 'Bowerman');
    console.log(bowerman);
    expect(bowerman.name).toBe('John');
    expect(bowerman.type).toBe('Bowerman');
    expect(bowerman.health).toBe(100);
    expect(bowerman.level).toBe(1);
    // Проверка атаки и защиты зависит от типа, оставьте это для конкретных классов
  });

  test('should throw an error if provided with incorrect values', () => {
    expect(() => new Bowerman('Jo', 'Warrior')).toThrowError('Expected error message');
  });

  // test('should throw an error if provided with incorrect values', () => {
  //   expect(() => new Bowerman('Jo', 'Warrior')).toThrowError();
  // });

  // Добавьте больше тестов для проверки общих свойств и методов Bowerman
});





