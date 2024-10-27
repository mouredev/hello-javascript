/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

/* For example */
for (let index = 1; index < 21; index++) {
  console.log(index);
}

console.log("\n"); //Separator

/* While example */
let count = 0;
let numbers = 1;

while (count < 20) {
  console.log(numbers);
  count++;
  numbers++;
}

console.log("\n"); //Separator
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sumTo100 = 0;

for (let index = 1; index <= 100; index++) {
  sumTo100 += index;
}

console.log("The result of the sum from 1 to 100 is: " + sumTo100);

console.log("\n"); //Separator
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];

numberArray.forEach((numberValue) => {
  if (numberValue % 2 === 0) {
    console.log(numberValue);
  }
});

console.log("\n"); //Separator
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let familyDoble = [
  "Amelia",
  "Miriam",
  "Leandro",
  "Lazaro",
  "Manolo",
  "Barbarita",
  "Yerlany",
  "Yoandy",
];

for (const element of familyDoble) {
  console.log(element);
}

console.log("\n"); //Separator
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let messageStr = "¡Hola, mundo! Bienvenido a la programación en JavaScript.";
let vocals = ["a", "e", "i", "o", "u"];
let vocalsCount = 0;

for (let index = 0; index < messageStr.length; index++) {
  console.log(messageStr[index]);
  if (vocals.includes(messageStr[index])) {
    vocalsCount++;
  }
}

console.log(`The string text contains ${vocalsCount} vocals.`);
console.log("\n"); //Separator

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbersToX = [40, 11, 69];
let resultMultiply = 1;

for (const element of numbersToX) {
  resultMultiply *= element;
}

console.log(`The result of multiply an array ${resultMultiply}.`);
console.log("\n"); //Separator

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

const tableFive = 5;

for (let index = 0; index < 10; index++) {
  console.log(tableFive * (index + 1));
}

console.log("\n"); //Separator

// 8. Usa un bucle para invertir una cadena de texto

let msgInvert =
  "JavaScript es un lenguaje de programación esencial para el desarrollo web moderno";

let newMsg = "";

/* -Way 1- Inverted by letter*/
for (let count = msgInvert.length - 1; count >= 0; count--) {
  console.log(msgInvert[count]);
  newMsg += msgInvert[count];
}

console.log(
  "Original string: " + msgInvert + "\n" + "New string inverted: " + newMsg
);

/* -Way 2- Inverted by words*/
let strToArray = msgInvert.split(" ");
let emptyArray = [];
let emptyStr = "";
let inverseStr = "";

for (const word of strToArray) {
  for (let counter = word.length - 1; counter >= 0; counter--) {
    emptyStr += word[counter];
  }
  emptyArray.push(emptyStr);
  emptyStr = "";
}

inverseStr = emptyArray.join(" ");

console.log(
  "Original string: " + msgInvert + "\n" + "New string inverted: " + inverseStr
);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let testTen = [50, 1, 2, 32, -65, 65, 78, 9, 87, 524, 321, -25, -1];
let bigTen = [];

testTen.forEach((element) => {
  if (element > 10) {
    bigTen.push(element);
  }
});

console.log("Numbers bigger than Ten: " + bigTen);
