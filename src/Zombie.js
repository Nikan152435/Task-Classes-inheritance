//Zombiejs
class Zombie {
    constructor(name) {
      this.name = name;
      this.type = 'Zombie';
      this.health = 100;
      this.level = 1;
      this.attack = 40; // Добавляем свойство атаки
      this.defence = 10; // Добавляем свойство защиты
    }
  
    // Дополнительные методы и свойства для класса Zombie
    levelUp() {
        this.level += 1;
      }
  }
  
  module.exports = Zombie; 