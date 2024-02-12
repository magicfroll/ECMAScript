// Мы можем указывать this.__proto__ для установки прототипа, а
// можем указать наш прототип в prototype свойстве самого конструктора вот так:

// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
    // Создаем свойства объекта, используя this.
    this.serialNumber = serailNumber;
    this.model = "Samba-1";
    this.power = 250;
    this.batterySize = 2500;
    this.workTime = 50;
    }

// Делаем ссылку на прототип от родителя.
Samba.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba1 = new Samba(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of
VacuumCleaner
// I am cleaning... I have been started: 1 times.