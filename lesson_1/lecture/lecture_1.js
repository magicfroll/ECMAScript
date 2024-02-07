// SPREAD

// function max(param1, param2) {
//     if (param1 > param2) {
//         return param1;
//     } else if (param1 < param2) {
//         return param2;
//     } else {
//         return 'Числа равны';
//     }
// }

// const arr = [1, 5]
// console.log(max(...arr));


// arr = [2, 76 ,56 ,9, 77, 43]
// console.log(Math.max(...arr));

const studentsGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];
    
const studentsGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    },
];

// Напишем не очень удобную, но показательную функцию, которая
// умеет принимать неограниченное число аргументов, и находить
// максимум среди них. Функция должна вызываться подобным образом:
// const maximum = findMax(4, 7, 10);

function findMax() {
    const values = arguments; // arguments - переменная доступная
    // внутри каждой функции, которая содержит в себе все аргументы,
    // переданные в функцию. Является псевдомассивом.

    let maxValue = -Infinity;
    
    // Так как arguments является псевдомассивом, мы не можем
    // применять к нему новые методы массивов такие как forEach или
    // reduce, поэтому будем итерировать по старинке.
    for (let index = 0; index < values.length; index++) {
        if (values[index] > maxValue) maxValue = values[index];
    }
    return maxValue;
};

// Мы должны передавать в нашу функции только числа, а в наших
// массивах содержаться объекты, поэтому сначала создадим массивы
// только со значениями времени отработанными студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map((student) =>
student.practiceTime);

const group2PracticeTime = studentsGroup2PracticeTime.map((student) =>
student.practiceTime);

// Теперь можем вызывать нашу функцию поиска максимального
// значения. Она принимает множество числовых аргументов, а у нас
// есть только массив, вот тут нам и поможет оператор spread.
const maxTimeFromGroup1 = findMax(...group1PracticeTime); 

// ...group1PracticeTime - вытянет из массива все элементы и
// передаст их в функцию как отдельные переменные.
// Это аналогично страшной и неудобной записи:
findMax(group1PracticeTime[0], group1PracticeTime[1],
group1PracticeTime[2], group1PracticeTime[3],
group1PracticeTime[4])

console.log(maxTimeFromGroup1); // 160

const maxTimeFromGroup2 = findMax(...group2PracticeTime);

console.log(maxTimeFromGroup2); // 140

// Давайте также найдем максимально отработанное время среди двух
// групп. Мы можем сделать это передав данные обоих массивов в
// функцию таким образом:
// findMax(...group1PracticeTime, ...group2PracticeTime);
// А можем объединить два массива в один - это очень частая
// операция и оператор расширения (spread) очень в этом помогает.
const bothGroupsTime = [...group1PracticeTime,
...group2PracticeTime];

// Для объединения двух массивов нам нужно вытащить их элементы в
// один общий массив, поэтому мы объявляем новый массив, а в
// качестве его элементов делаем расширение элементов первого и
// второго массива. Также мы могли бы добавить в него и другие
// элементы.
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160    

// REST

// const arr = [2, 76 ,56 ,9, 77, 43];

// function max(param1, param2, ...rest) {
//     if (param1 > param2) {
//         console.log(param1);
//     } else {
//         console.log(param2);
//     }    
//     console.log(rest);
// }

//  console.log(max(...arr));

// Напишем не очень удобную, но показательную функцию, которая
// умеет принимать неограниченное число аргументов, и находить
// максимум среди них. Функция должна вызываться подобным образом:
// const maximum = findMax(4, 7, 10);
function findMax(...values) { // тут мы принимаем все переданные
    // аргументы и с помощью rest оператора упаковываем их в массив
    // values.
    // На этот раз values уже настоящий массив и мы можем
    // использовать reduce для итерации по нему и нахождения
    // максимального числа.
    return values.reduce((acc, value) => {
        if (value > acc) return value;
        return acc;
        }, -Infinity);
    };

// Создадим массивы только со значениями времени отработанными студентами.
const group1PracticeTime2 = studentsGroup1PracticeTime.map((student) => 
student.practiceTime);

const group2PracticeTime2 = studentsGroup2PracticeTime.map((student) =>
student.practiceTime);

// Вызовем нашу функцию поиска максимума, используя оператор spread.
const maxTimeFromGroup1Rest = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1Rest); // 160

const maxTimeFromGroup2Rest = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140

// Давайте также найдем максимально отработанное время среди двух групп.
const bothGroupsTimeRest = [...group1PracticeTime,
...group2PracticeTime];

const maxTimeBothGroupsRest = findMax(...bothGroupsTime);
console.log(maxTimeBothGroupsRest); // 160

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
        saveFirstName(firstName);
        saveLastName(lastName);
        saveAdditionals(additionals); // Благодаря rest оператору мы
        // смогли собрать все дополнительные данные, которые были переданы
        // для сохранения в базе данных, и можем передать их одним массивом
        // в функцию сохранения дополнительных данных.
}

// ЧИСТЫЕ ФУНКЦИИ

const student = {
        firstName: "Ivan",
        age: 21,
    };
    // Функция вычисления года рождения. Принимает текущий год, и
    // вычисляет год рождения студента используя глобальные данные. Это
    // функция с побочными эффектами. Она сильно зависит от глобальной
    // переменной student.
const getYearOfBith = (currentYear) => {
        return currentYear - student.age;
    }

console.log(getYearOfBith(2021)); // 2000
student.age = 25;
console.log(getYearOfBith(2021)); // 1996 - Мы вызывали функцию
// дважды с одним и тем же параметром, но получили разный результат.
// Это значит что мы не можем точно знать что вернет функция в тот
// или иной момент работы программы, и мы не можем гарантировать что
// код будет выполняться верно.

// Чистая версия функции. Берет данные только из своих
// аргументов.
const getYearOfBithPureVersion = (age, currentYear) => {
    return currentYear - age;
    }

// Более сложный пример с мутацией (побочными эффектами), но
// более частый на практике.
// Функция добавления нового ключа в объект. Принимает исходный
// объект, имя ключа, и значение, которое надо добавить.

const addField = (object, key, value) => {
        object[key] = value;
        return object;
    };

const updatedStudent = addField(student, 'lastName', 'Belkin');

console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"} 
// - вызвав нашу функцию добавления поля, мы изменили
// начальный объект, что может привести к нежелательным последствиям
// в остальном коде, которые порой очень сложно обнаружить. Например
// дальше по коду может идти итерация объекта student и вывод только
// начальных полей, но мы добавили в него третье поле, которое тоже
// будет проитерировано.

console.log(updatedStudent); // {firstName: "Ivan", age: 25, lastName: "Belkin"}

// Чистый вариант функции - нам нужно создать новый объект внутри
// функции для изменения и возврата.
const addFieldPureVersion = (object, key, value) => {
    return { // возвращаем новый объект.
        ...object, // Воспользуемся оператором spread, для получения
        //копии свойств исходного объекта.
        [key]: value // Добавим новое свойство.
    }
};

const updatedStudentPure = addFieldPureVersion(student, 'practiceTime', 148);

console.log(student); // {firstName: "Ivan", age: 25, lastName: "Belkin"} 
// - на этот раз исходный объект не был изменен.
console.log(updatedStudentPure); // {firstName: "Ivan", age: 25, lastName: "Belkin", practiceTime: 148}

// ЗАМЫКАНИЯ

const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
// Создаем счетчик.
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter1()); // 3

// ---------------------------------------------------------

const closureFunction = () => {
    const cache = {};
    console.log(cache);
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}

const chachedPow = closureFunction();
console.log(chachedPow(2)); // 4
console.log(chachedPow(8)); // 64
console.log(chachedPow(2)); // 4 — тут функция возьмёт значение из кеша и не будет
// вычислять его заново. Это особенно эффективно работает, когда мы имеем
// дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то
// ресурсов из базы данных или внешних источников. Тут нельзя забывать о
// валидации кеша. Он может стать неактуальным, если мы имеем дело с базой
// данных или внешними источниками данных.

(function () {
    const sliderTexts = ['Promo', 'Brands', 'Best'];
    function showSlider(texts) {
        console.log(texts[0]);
        console.log(texts[1]);
        console.log(texts[2]);
    }
    showSlider(sliderTexts);
}());


// ЛЕКСИЧЕСКИЙ КОНТЕКСТ

const lastName = "Petrov"; // lexical environment: { lastName: "Petrov" }
const getFullName = (firstName) => {
    // lexical environment: { lastName: "Petrov", firstName:<определяется в момент вызова функции> }
    const fullName = firstName + ' ' + lastName;
    // lexical environment: { lastName: "Petrov", firstName:<определяется в момент вызова функции>, 
    // fullName: <вычисляется в момент вызова функции> }
    console.log(fullName);    
};
getFullName("Ivan"); // Ivan Petrov
// lexical environment в момент вызова функции становится таким:
// { lastName: "Petrov", firstName: "Ivan", fullName: "Ivan Petrov"}

// ------------------------------------------------------

const houses = [];
let i = 0;
while (i < 10) {
    let house = function () { // функция «дом»
        console.log(i); // выводит номер дома
    };
    houses.push(house);
    i++;
}
houses[0](); // 10 — у нулевого дома номер 10
houses[7](); // 10 — и у седьмого дома номер 10

// РУКУРСИЯ

// n! = (n - 1)! * n

function factorial(number) {
    if (number === 1) {
        return 1;
    }
    return factorial(number - 1) * number
}

const number = 7

console.log(`Факториал ${number} равен ${factorial(number)}`);