// Napisz pętlę, która będzie iterować po tablicy numbers 
// i wyświetlać tylko te liczby, które są większe niż 5.

let numbers = [2, 8, 59, 20, 1, 3, 9, 0, 5];
const wyznacznik = 5;

for(const number of numbers){
    if (number > wyznacznik) {
        console.log(`Liczba większa niż ${wyznacznik}: ${number}`);
    }
};
