//Daemonjs

class Daemon {
    constructor(name) {
      this.name = name;
      this.type = 'Daemon';
      this.health = 100;
      this.level = 1;
      this.attack = 10;
      this.defence = 40;
    }
  
    damage(points) {
      // Применение урона к здоровью
      this.health -= points;
      if (this.health < 0) {
        this.health = 0; // Предотвращение отрицательного здоровья
      }
    }
  }
  
  module.exports = Daemon;