# Функциональный Javascript

## Spread 

Оператор расширения - вытащить все элементы из масива ка отдельные перменные

## Rest

Позволяет собрать оставшиеся аргументы функции в массив

## Чистые функции, иммутабельность

## Замыкания

Основной подход к созданию замыканий:
● создать функцию;
● внутри неё объявить переменные, которые мы хотим в ней замкнуть:
спрятать, сохранить и использовать в дальнейшем;
● вернуть из неё другую функцию, которая уже выполняет какое-то конкретное
действие и может использовать замкнутые (спрятанные) данные.

```js
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
```


```js
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
console.log(chachedPow(2)); // 4
```

## Лексический контекст

