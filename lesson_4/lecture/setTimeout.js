const timerId = setInterval(() => {
    if (counter > amount) {
        // После того как наш счетчик достигнет нужного
        // количества итераций, мы должны очистить таймер, чтобы итерации
        // больше не выполнялись.
        clearInterval(timerId);
        console.log('End long calculations');
    }
    // Добавим вывод нашего счетчика через каждые 10000 итераций,
    // чтобы видеть что наш код работает.
    if (counter % 10000 === 0) {
        console.log('working: ', counter);
    }
    const newDate = new Date(counter);
    counter++;
}, 0);

// Start long calculations
// working: 0
// working: 10000
// working: 20000
// ...
// End long calculations