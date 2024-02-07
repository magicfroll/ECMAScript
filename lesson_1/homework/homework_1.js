// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

// const arr = [1, 5, 7, 9]

// console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.


// function createCounter() {
//     let counter = 0;  
//     return {
//       increment: () => {counter += 1},
//       decrement: () => {counter -= 1},
//       result: () => counter,
//     };
//   }

// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.result());

// const counter2 = createCounter();
// counter2.decrement();
// counter2.decrement();
// counter2.decrement();
// console.log(counter2.result());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(rootElement, className) {
    if (rootElement.classList && rootElement.classList.contains(className)) {
      return rootElement;
    }  
    if (rootElement.children) {
      for (let i = 0; i < rootElement.children.length; i++) {
        const result = findElementByClass(rootElement.children[i], className);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  }


// Пример
const rootElement = document.getElementById('div');
const targetElement = findElementByClass(rootElement, 'title');
console.log(targetElement);

