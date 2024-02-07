// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

function mergeArrays(array1, array2) {
    const bothArray = [...array1, ...array2];
    return bothArray;
}
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(mergeArrays(array1, array2));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

function removeDuplicates(...args) {
    return args.filter((item, index) => {
        return args.indexOf(item) === index
    })    
}

console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// ---------------------------------------------------------------

// Задание 2 (Чистые функции 25минут)
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

function getEvenNumbers(arrayNumers) {
    return arrayNumers.filter((number) => number % 2 === 0); 
}

console.log(getEvenNumbers([1, 2, 3, 4, 5]));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

function calculateAverage(arrayNumers) {    
    return arrayNumers.reduce((acc, el) => acc + el, 0) / arrayNumers.length
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(string) {
    return string
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
        .join(' ');
}

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(capitalizeFirstLetter(str));

// -------------------------------------------------------------

// Задание 3 (Замыкания 20 минут)
// 1. Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

function createCalculator(number) {
    let counter = number;
    return {
            add: (number) => {counter += number},                
            subtract: (number) => {counter -= number},
            result: () => counter,           
        }
    }

const calc = createCalculator(5);

calc.add(15);
console.log(calc.result());
calc.subtract(2);
console.log(calc.result());

// -------------------------------------------------------

// Задание 4 (Лексический контекст 15 минут)
// 1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.

function createGreeting(userName) {
    return function () {
        console.log('Hello, ' + userName);
    }
}

// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"


// ----------------------------------------------------------

// Задание 5 (тайминг 15 минут)
// 1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.

function createPasswordChecker(passwordLength) {
    return function (password) {
        return password.length < passwordLength;
    }
}


// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true