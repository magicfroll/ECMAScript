// Оператор new позволяет создавать новые объекты, используя для этого
// функцию-конструктор. 

// Наша реализация оператора new через функцию createObject.
function createObject(constructor) {
    // Создаем новый объект.
    const obj = {};

    // Установим новому объекту прототипом прототип функции-конструктора
    Object.setPrototypeOf(obj, constructor.prototype);
    
    // Вызовем функцию-конструктор, передав ей как this
    // созданный на шаге 1 объект, и передадим остальные аргументы,
    // если они были переданы в createObject
    const argsArray = Array.prototype.slice.apply(arguments);
    const result = constructor.apply(obj, argsArray.slice(1));
    // Вернем новый объект, если конструктор вернул примитивное
    // значение или undefined, иначе вернем то, что вернул
    // конструктор.
    if (!result || typeof result === 'string' || typeof result === 'number' || typeof result === 'boolean') {
        return obj
    } else {
        return result;
    }    
}

    // Создадим экземпляр нового объекта.
    const Samba1 = createObject(Samba, 1014778);
    // Проверим установку свойств в конструкторе.
    console.log(Samba1.serialNumber); // 1014778
    // Проверим, что прототип установился корректно, и мы можем     вызывать методы из родительских объектов.
    console.log(Samba1.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
    console.log(Samba1.startCleaning()); // I am the method of VacuumCleaner
    // I am cleaning... I have been started: 1 times.
    // Проверим присвоение конструктора.
    console.log(Samba1.constructor); // function Object() { [native code] }