/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

const sumNumbers = (number1, number2) => {
  /* Declarative function */
  return number1 + number2;
};

console.log(sumNumbers(100, 36));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const maxNumber = (array) => {
  let bigNumber = -Infinity;
  for (const element of array) {
    if (bigNumber < element) {
      bigNumber = element;
    }
  }
  return bigNumber;
};

let numbersArray = [100, 35, 87, 16, 777, 56, 91, 1111111, 37, -5, 34, -8973];

console.log(maxNumber(numbersArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const vocalTotal = (strValue) => {
  /*Case I*/
  let vocalArray = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let index = 0; index < strValue.length; index++) {
    if (vocalArray.includes(strValue[index])) {
      count++;
    }
  }
  return count;
};

const vocalTotal1 = (strValue) => {
  /*Case II Switch*/
  let otherWords = [];
  let myCountVocals = [];
  let count = 0;
  let countA = 0;
  let countE = 0;
  let countI = 0;
  let countO = 0;
  let countU = 0;
  for (let index = 0; index < strValue.length; index++) {
    switch (strValue[index]) {
      case "a":
        count++;
        countA++;
        break;
      case "e":
        count++;
        countE++;
        break;
      case "i":
        count++;
        countI++;
        break;
      case "o":
        count++;
        countO++;
        break;
      case "u":
        count++;
        countU++;
        break;
      default:
        // Letras que no son vocales
        otherWords.push(strValue[index]);
    }
  }
  myCountVocals.push(countA, countE, countI, countO, countU);
  return myCountVocals;
};

let myString =
  "This is a very simple text made by codebydoble for Hello Javascript project.";

console.log(`The count of vocals is: ${vocalTotal(myString)}`);

/* Destructuring */
let [vocalA, vocalE, vocalI, vocalO, vocalU] = vocalTotal1(myString);

let dataVocals = [
  ["Vocal A", vocalA],
  ["Vocal E", vocalE],
  ["Vocal I", vocalI],
  ["Vocal O", vocalO],
  ["Vocal U", vocalU],
];
console.table(dataVocals);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
