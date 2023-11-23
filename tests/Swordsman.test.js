// Swordsman.test.js

const Swordsman = require('../src/Swordsman');

describe('Swordsman class', () => {
  test('should create an Swordsman object with correct name and default properties', () => {
    const swordsman = new Swordsman('Dracula');
    console.log(swordsman);
    expect(swordsman.name).toBe('Dracula');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(25);
    expect(swordsman.defence).toBe(25);
  });

  test('should correctly change health when damaged', () => {
    const swordsman = new Swordsman('Dracula');
    swordsman.damage(50);
    expect(swordsman.health).toBe(50);
  });
//add more test cases to thoroughly test Undead's properties and methods
});









