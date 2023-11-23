// Magician.tast.js

const Magician = require('../src/Magician');

describe('Magician class', () => {
  test('should create a Magician object with correct name and default properties', () => {
    const magician = new Magician('Lucifer');
    expect(magician.name).toBe('Lucifer');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('should correctly change health when damaged', () => {
    const magician = new Magician('Lucifer');
    magician.damage(50);
    expect(magician.health).toBe(50);
  });

  // Add more test cases to thoroughly test Magician's properties and methods
});
