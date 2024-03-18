// // Napisz kod JavaScript, który sprawdzi, 
// czy zmienna language zawiera słowo "Script". 
// Jeśli tak, wypisz w konsoli "Zmienna zawiera słowo Script", 
// w przeciwnym razie wypisz "Zmienna nie zawiera słowa Script".

let language = 'JavaScript';
let message;
if (language.includes('Script')===true){
    message = "Zmienna zawiera słowo Script";
} else {
    message = "Zmienna nie zawiera słowa Script";}
console.log(message);




// Masz zmienną:

// let num = 10;

// Napisz kod JavaScript, który wyświetli w konsoli
//  wszystkie liczby od 1 do wartości zmiennej num, 
// ale tylko te liczby, które są podzielne przez 2.

let num = 10;
for (let i=1; i <=num; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}


// Masz zmienną:

// let age = 18;
// Napisz kod JavaScript, który zapyta użytkownika o jego wiek. 
// Jeśli wiek użytkownika jest większy lub równy zmiennej age, 
// wyświetl w konsoli "Jesteś pełnoletni!", w przeciwnym razie wyświetl 
// "Jesteś niepełnoletni!".
//  Spróbuj wykorzystać tenary (?) operator.

let age = prompt("Podaj wiek", "");
let sts = (age>=18) ? "Jesteś pełnoletni": "Jesteś niepełnoletni!";
console.log(sts);
