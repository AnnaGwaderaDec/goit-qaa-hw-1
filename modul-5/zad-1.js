// // Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę liczb 
// i zwraca nową tablicę, w której każda liczba jest podwojona.
// // Wykorzystaj metodę map() do zaimplementowania funkcji. 
// Wewnątrz metody map() użyj funkcji strzałkowej, aby podwoić każdą liczbę.


function doubleNumber(numbers) {
    const doubledArray = numbers.map((number) => number * 2)
    return doubledArray
};

// Przetestuj swoją funkcję, tworząc tablicę liczb 
// i przekazując ją jako argument do swojej funkcji. 
// Wyświetl oryginalną tablicę i tablicę podwojoną w konsoli.

const tab = [1, 2, 3, 4]
console.log(tab)
console.log(doubleNumber(tab));
