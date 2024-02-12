// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

// function getPrototypeChain(obj) {
//     const chain = [];
//     let prototype = obj;
//     while (prototype !== null) {
//         chain.push(prototype);
//         prototype = Object.getPrototypeOf(prototype);               
//     }
//     return chain;
// }

// const VacuumCleaner = {
//     Model: "vacuum cleaner",
//     counterOfStarts: 0,
//     isFull: false,
//     isObstacle: false,
//     startCleaning: function () {
//         this.counterOfStarts++;
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log(`I am the method of VacuumCleaner`);
//         console.log('I am cleaning... I have been started: ',
//         this.counterOfStarts, 'times.');
//     },
//     goCharge: function () {
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log('I am the method of VacuumCleaner');
//         console.log('I am going to charge...');
//     }
// };

// const DancingSeries = {
//     // Объявляем новые свойства и переопределить свойство model.
//     model: "dancing series",
//     power: 200,
//     batterySize: 2100,
//     boxSize: 0.5,
//     workTime: 45,
//     isUVLampOn: false,
//     // Добавляем новый метод.
//     switchUVLamp: function () {
//         // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
//         console.log('I am the method of DancingSeries');
//         this.isUVLampOn = !this.isUVLampOn;
//         console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
//         'not working'}.`);
//     },
//     // Делаем ссылку на прототип от родителя.
//     __proto__: VacuumCleaner,
// };

// const Djaiv = {
//     // Обновляем свойства под конкретную модель.
//     model: "Djaiv-1",
//     power: 250,
//     batterySize: 2500,
//     workTime: 50,
//     // Переопределим метод startCleaning.
//     startCleaning: function () {
//     this.counterOfStarts++;
//     // Добавим дополнительный вывод, чтобы знать чей метод     мы вызвали.
//     console.log('I am the method of Djaiv');
//     console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
//     },
//     // Делаем ссылку на прототип от родителя.
//     __proto__: DancingSeries,
// };

// console.log(getPrototypeChain(Djaiv));

// -----------------------------------------------

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log('Животное издает звук');
//     }
// }

// class Dog extends Animal{
//     constructor(name, breed) {
//         super(name);
//         this.breed = breed;
//     }
//     fetch() {
//         console.log(`Собака ${this.breed} принесла мяч`);
//     }
// }


// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// -----------------------------------------------------

// Создайте класс Product, который будет предсталять товар в 
// магазине. У товара должны быть следующие свойства:
// * name(строка) - имя товара
// * price(число) - цена товара за одну удиницу 
// Создайте класс ShoppingCart, представляющую корзину 
// интернет-магазина. Конструктор класса ShoppingCart должен
// принимать два параметра:
// * customerName(строка) - имя покупателя
// * initialTotalCost(число) - начальная общая стоимость 
// заказа (может быть равна 0, если корзина пуста)
// У класса ShoppingCart должен быть метод additem(product, quantity)
// который позволяет добавить товар в корзину. Метод должен 
// принимать два параметра:
// * product(объект класса Product) - товар, который 
// добавляется в корзину
// * quantity(число, по умолчанию 1) - количество единиц 
// товара, которое нужно ждобавить в корзину. 
// У класса ShoppingCart должен быть метод getCurrentTotalCost() и метод checkout(), который оформляет заказ и выводит сообщение с общей стоимостью зака и благодарностью за покупку.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.totalCost = initialTotalCost;
        this.items = []
    }
    additem(product, quantity = 1) {
        this.totalCost += product.price * quantity;
        this.items.push(product.name)
    }
    getCurrentTotalCost() {
        return this.totalCost
    }
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спастибо за покупку`);
    }
}

const product1 = new Product('Помидоры', 250);
const product2 = new Product('Картофель', 100);

const shoppingCart = new ShoppingCart('John');
shoppingCart.additem(product1);
console.log(shoppingCart.getCurrentTotalCost());
shoppingCart.additem(product2, 2);
console.log(shoppingCart.getCurrentTotalCost());
console.log(shoppingCart.checkout());
console.log(shoppingCart.items);

