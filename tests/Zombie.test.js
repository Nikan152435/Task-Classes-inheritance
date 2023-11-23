// Zombie.test.js

const Zombie = require('../src/Zombie');
describe('Undead class', () => {

  test('should create a Zombie object with correct name and default properties', () => {
    const zombie = new Zombie('WalkingDead');
    expect(zombie.name).toBe('WalkingDead');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('should correctly increase level', () => {
    const zombie = new Zombie('WalkingDead');
    zombie.levelUp();
    expect(zombie.level).toBe(2);
  });

 
  // Add more test cases to thoroughly test Zombie's properties and methods
});







