// Объект -> JSON.
const student = {
        name: 'Slava',
        surname: 'Belkin',
        age: 20,
        practice: {
        place: 'IKTG',
        hours: 47,
    }
};

console.log(JSON.stringify(student, null, 4));
// Вывод в консоль. Обратите внимание, что все ключи стали обернуты в кавычки.
// {
//     "name": "Slava",
//     "surname": "Belkin",
//     "age": 20,
//     "practice": {
//         "place": "IKTG",
//         "hours": 47
//     }
// }


// JSON -> Объект.
console.log(JSON.parse('{"name": "Slava", "surname": "Belkin", "age": 20, practice: {"place": "IKGT", "hours": 47}}'));

// {
//     name: 'Slava',
//     surname: 'Belkin',
//     age: 20,
//     practice: {
//         place: 'IKTG',
//         hours: 47,
//         __proto__: Object
//     },
//     __proto__: Object
// }

console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]')); 
// ["Belkin", "Ivanov", "Petrov"]