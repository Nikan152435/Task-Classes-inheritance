//Undeadjs
class Undead {
    constructor(name) {
      this.name = name;
      this.type = 'Undead';
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
    
    module.exports = Undead;