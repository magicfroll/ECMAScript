// Задание 1 (тайминг 20 минут)
// 1. Создайте объект Person, представляющий человека, с
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
// Person.name = "John";
// Person.age = 25;
// Person.gender = "male";
// Person.introduce(); // Ожидаемый результат: My name is
// John. I'm 25 years old and I identify as male.
// Person.changeName("Mike");

// const person = {
//    name: '',
//    age: 0,
//    gender: '',
//    introduce () {
//     console.log(
//         `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}`); 
//    },
//    changeName (newName) {
//     this.name = newName;
//    }
// }

// person.name = "John";
// person.age = 25;
// person.gender = "male";
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
// person.introduce();
// person.changeName('Mike')
// person.introduce();

// ---------------------------------------------------------------------

// Задание 2 (20минут)
// 1. Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.

// const animal = {
//     name: 'Животное',
//     eat() {
//         console.log(`${this.name} ест`);
//     },
// }

// const dog = {
//     name: 'Собака',
//     bark() {
//         console.log(`${this.name} лает`);
//     },
// }


// // Одалживание метода eat() из объекта Animal к объекту Dog
// dog.eat = animal.eat;
// dog.eat(); // Вывод: Rex is eating.

// ---------------------------------------------------------------------

// Задание 3 (call, apply 20 минут)
// 1. Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.

// const calculator = {
//     cf: 1,
//     add: function (a, b) {
//         return (a + b) * this.cf;
//     },
//     subtract(a, b) {
//         return a - b;
//     },
//     multiply(a, b) {
//         return a * b;
//     }
// }

// console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
// console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// console.log(calculator.add(5, 3));
// console.log(calculator.multiply(...[5, 3]));

// console.log(calculator.add.call({cf: 2}, 5, 3));

// ---------------------------------------------------------------------

// Задание 4 (Объекты через class 25 минут)
// 1. Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    
      introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
      }
}

const person = new Person("John", 25);
person.introduce(); // Вывод: My name is John and I'm 25 years old.

// ---------------------------------------------------------------------

// Задание 5 (Class 30 минут)
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название
// банка.

class BankAccount {
    static bankName ='Bank'
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber,
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            console.log(`Deposited ${amount} into account ${this.accountNumber}. New balance: ${this.balance}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
            
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1400); // Вывод: Insufficient funds in account 1234567890