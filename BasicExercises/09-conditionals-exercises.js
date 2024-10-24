/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nameUser = "Yoandy";
if (nameUser === "Yoandy") {
  console.log(`Welcome back ${nameUser}`);
} else {
  console.log("Incorrect name, please try again.");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let userName = "yoandy.doble";
let password = "Clave1234*";

if (userName === "yoandy.doble" && password == "Clave1234*") {
  console.log("Welcome: " + userName);
} else {
  console.log("Incorrect user or password");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numberTest = 0;
if (numberTest > 0) {
  console.log(`The number ${numberTest} is positive`);
} else if (numberTest < 0) {
  console.log(`The number ${numberTest} is negative`);
} else {
  console.log(`The number ${numberTest} is cero`);
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// Way 1 if else
// Way 2 ternary
let voteAge = 16;
let vote =
  voteAge >= 18
    ? console.log(`This person can vote`)
    : console.log(`This person can't vote until ${18 - voteAge} years`);

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let agePerson = 34;
let adultChild =
  agePerson >= 18 ? (adultChild = "Adult") : (adultChild = "Child");

console.log(adultChild);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
