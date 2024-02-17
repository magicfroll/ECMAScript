// Задание 1 (тайминг 20 минут)
// 1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// a. delayedMessage("Сообщение 1", 2000)
// b. delayedMessage("Сообщение 2", 1000)
// c. delayedMessage("Сообщение 3", 3000)
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

// function delayedMessage(message, delay) {
//     setTimeout(function timeout() {
//         console.log(message, delay);
//         }, delay);
// }

// function delayedMessage(message, delay) {
//     setTimeout(() => console.log(message, delay), delay);
// }

// delayedMessage("Сообщение 1", 2000)
// delayedMessage("Сообщение 2", 1000)
// delayedMessage("Сообщение 3", 3000)
// console.log("Конец программы");

//---------------------------------------------------

const tasks = [
    {name: 'task 1', time: 1000},
    {name: 'task 2', time: 2000},
    {name: 'task 3', time: 3000},
    {name: 'task 4', time: 4000},
    {name: 'task 5', time: 5000},
]

// function delayTasks(tasks) {
//     let time = tasks[0].time; 
//     for (let i = 0; i < tasks.length; i++) {
//         setTimeout(() => console.log(tasks[i].name, tasks[i].time), time);
//         time += tasks[i].time;        
//     }
// }

// function delayTasks(tasks) {
//     let time = tasks[0].time;
//     tasks.forEach(element => {
//         setTimeout(() => console.log(element.name, element.time), time);
//         time += element.time;        
//     });     
// }

// delayTasks(tasks);

// ------------------------------------------------------------------------

// Задание 2
// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send()


// function loadData(url) {
//     const request = new XMLHttpRequest();

//     request.onreadystatechange = function () {
//         if (request.readyState === 4 & request.status === 200) {
//             console.log(request.responseText);
//         } else {
//             console.log(`Error ${request.status}: ${request.statusText}`);
//         }
//     }

//     request.open("GET", url, true)
//     request.send();
// }

// loadData('https://api.github.com/users/magicfroll');

// ---------------------------------------------------------------

// Переписать код с использвованием метода fetch

async function loadData(url) {
    let response = await fetch(url)
    if (response.status === 200) {
        console.log(await response.json());
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
}

loadData('https://jsonplaceholder.typicode.com/users');

// function loadData(url, listUsers) {
//     fetch(url)
//     .then((response) => response.json())    
//     .then((data) => listUsers(data))    
// }

// function listUsers(elem) {
//     const userListC = document.querySelector('.userList')
//     userArr = [];
//     elem.forEach(element => {
//         userArr.push(element.name);
//         userListC.innerHTML += element.name + '<br>';
//     });

//     sortUserList = userArr.sort();
//     userListC.innerHTML += '<p>*******</p>'

//     sortUserList.forEach(element => {
//         userListC.innerHTML += element + '<br>'
//     });
// }

// loadData('https://jsonplaceholder.typicode.com/users', listUsers);