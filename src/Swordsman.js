// Swordsman.js
class Swordsman {
    constructor(name) {
      this.name = name;
      this.type = 'Swordsman';
      this.health = 100;
      this.level = 1;
    }
  
    

  damage(points) {
    // Применение урона к здоровью
    this.health -= points;
    if (this.health < 0) {
      this.health = 0; // Предотвращение отрицательного здоровья
    }
  }
}

module.exports = Swordsman;