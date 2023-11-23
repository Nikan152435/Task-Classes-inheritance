//Undead.test.js

const Undead = require('../src/Undead');

describe('Undead class', () => {
  test('should create an Undead object with correct name and default properties', () => {
    const undead = new Undead('Dracula');
    console.log(undead); 
    expect(undead.name).toBe('Dracula');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('should correctly change health when damaged', () => {
    const undead = new Undead('Dracula');
    undead.damage(50);
    expect(undead.health).toBe(50);
  });

  // Add more test cases to thoroughly test Undead's properties and methods
});