// Character.js

class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || typeof type !== 'string') {
        throw new Error('Name and type should be strings');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
    }
  
    // Дополнительные методы и свойства для общего класса Character
  }
  
  module.exports = Character;






