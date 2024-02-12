// Расширенный класс DancingSeries. C помощью extends мы указываем от какого класса будем наследоваться.
class DancingSeries extends VacuumCleaner {
    // Объявляем новые свойства и переопределяем свойство model.
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;
    // Добавляем новый метод.
    switchUVLamp() {
        // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
        'not working'}.`);
    }
};

// Создадим новый экземпляр класса, чтобы посмотреть как он работает и что в нем есть.
const DancingRobot = new DancingSeries;
console.log(DancingRobot.__proto__); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}
console.log(DancingRobot.model); // dancing series
console.log(DancingRobot.switchUVLamp()); // I am the method of DancingSeries lamp is working.


// Созданный конструктор является функцией, код которой взят из конструктора.
console.log(DancingSeries === DancingSeries.prototype.constructor); // true
// В созданном конструкторе есть свойство prototype и оно содержит все методы.
console.log(DancingSeries.prototype); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}