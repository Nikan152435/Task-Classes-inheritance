// Magician.js
class Magician {
    constructor(name) {
      this.name = name;
      this.type = 'Magician';
      this.health = 100;
      this.level = 1;
      this.attack = 10; // Добавляем свойство атаки
    this.defence = 40; // Пример свойства защиты
    }
    damage(points) {
        // Применение урона к здоровью
        this.health -= points;
        if (this.health < 0) {
          this.health = 0; // Предотвращение отрицательного здоровья
        }
      }
    }
    
    module.exports = Magician;




   