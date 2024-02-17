'use strict';


// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// function getUserData(userId) {
//     return new Promise((resolve, reject) => {
//       fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => {
//           if (response.ok) {
//             resolve(response.json());
//           } else {
//             reject(new Error('Пользователь с указанным ID не найден'));
//           }
//         })
//         .catch(error => {
//           reject(error);
//         });
//     });
//   }

//   getUserData(1)
//   .then(user => {
//     console.log(user);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

function saveUserData(user) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
          },
      })
        .then(response => {
          if (response.ok) {
            resolve();
          } else {
            reject(new Error('Ошибка'));
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }


// *Подсказка *
// Пример использования функции
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
    console.log('User data saved successfully');
    })
    .catch(error => {
    console.log(error.message);
});


// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции

// function changeStyleDelayed(elementId, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const element = document.getElementById(elementId);
//         if (element) {
//           element.style.color = 'red';
//           element.style.backgroundColor = 'yellow';
//           resolve();
//         } else {
//           reject(new Error('Элемент с указанным идентификатором не найден'));
//         }
//       }, delay);
//     });
//   }

function changeStyleDelayed(elementClass, delay) {
    const element = document.querySelector('.changeStyle')
    setTimeout(() => {
        element.style.color = 'red';
          element.style.backgroundColor = 'yellow';
    }, delay)
}

changeStyleDelayed('h1', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"