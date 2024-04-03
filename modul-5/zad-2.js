// Napisz funkcję JavaScript, która przyjmuje jako dane wejściowe tablicę obiektów reprezentujących studentów 
// i zwraca nową tablicę zawierającą tylko imiona studentów.
// Wykorzystaj metodę map() do zaimplementowania funkcji. Wewnątrz metody map() użyj funkcji strzałkowej, 
// aby uzyskać dostęp do właściwości name każdego obiektu studenta.


function selectNames(students) {
    return students.map(student => student.name);
};
 

// Przetestuj swoją funkcję, tworząc tablicę obiektów studentów i przekazując ją jako argument do swojej funkcji. 
// Wyświetl oryginalną tablicę obiektów studentów oraz tablicę zawierającą tylko imiona w konsoli.

const students = [
    { name: "Piotr", age: 25, courses: "filozofia" },
    { name: "Zuzanna", age: 23, courses: "fizyka kwantowa" },
    { name: "Edmund", age: 28, courses: "germanistyka" },
    { name: "Łucja", age: 32, courses: "prawo" },
  ];

console.log(students);
console.log(selectNames(students));
