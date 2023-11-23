// Daemon.test.js

const Daemon = require('../src/Daemon');

describe('Daemon class', () => {
  test('should create a Daemon object with correct name and default properties', () => {
    const daemon = new Daemon('Lucifer');
    expect(daemon.name).toBe('Lucifer');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('should correctly change health when damaged', () => {
    const daemon = new Daemon('Lucifer');
    daemon.damage(50);
    expect(daemon.health).toBe(50);
  });

  // Add more test cases to thoroughly test Daemon's properties and methods
});






