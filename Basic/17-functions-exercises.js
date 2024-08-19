/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
  console.log(a + b);
}

suma(2, 4);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numbers = [3, 54, 6, 212, 545, 234, 886, 0, 234];
let mayor = 0;

const mayNum = () => {
  for (const number of numbers) {
    if (number > mayor) {
      mayor = number;
    }
  }
  console.log(mayor);
};

mayNum();

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let text = "Francamente, querida, me importa un bledo.";
let vowels = "aeiouAEIOU";

const vocales = () => {
  let vowelCount = text
    .split("")
    .filter((char) => vowels.includes(char)).length;
  return vowelCount;
};

console.log(`El texto contiene: ${vocales()} vocales.`);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// prettier-ignore
let arrayStrings = ["Voy", "a", "hacerle", "una", "oferta", "que", "no", "podrá", "rechazar",];

function mayusc(array) {
  return array.map((word) => word.toUpperCase());
}

let result = mayusc(arrayStrings);
console.log(result);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const esPrimo = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }

  return true;
};

console.log(esPrimo(5));
console.log(esPrimo(2));
console.log(esPrimo(24));
console.log(esPrimo(109));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// prettier-ignore
let array1 = [
  "No", "lo", "entiendes", "Pude", "haber", "tenido", "clase", "sido",];
// prettier-ignore
let array2 = [
  "alguien", "en", "lugar", "de", "un", "vago", "que", "eso", "es", "lo", "soy", "aceptémoslo",];

const idem = (a, b) => {
  return a.filter((item) => b.includes(item));
};

console.log(idem(array1, array2));

// Forma con bucle

// let array3 = [];

// function idem(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i])) {
//       array3.push(a[i]);
//     }
//   }
//   return array3;
// }

// console.log(idem(array1, array2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

let numberArray = [3, 66, 4, 55, 23, 7, 80, 101, 102, 33, 69];

const sumaPares = (a) => {
  return a.reduce((suma, num) => {
    if (num % 2 === 0) {
      suma += num;
    }
    return suma;
  }, 0);
};

console.log(sumaPares(numberArray));

// Forma con bucle

// const sumaPares = (a) => {
//   let sumaN = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 === 0) {
//       sumaN += a[i];
//     }
//   }
//   return sumaN;
// };

// console.log(sumaPares(numberArray));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const elevacion = (a) => {
  return a.map((num) => Math.pow(num, 2));
};

console.log(elevacion(numberArray));

// Forma con bucle

// const elevacion = (a) => {
//   let elevar;
//   for (let i = 0; i < a.length; i++) {
//     elevar = a.map((as) => {
//       return Math.pow(as, 2);
//     });
//   }
//   return elevar;
// };

// console.log(elevacion(numberArray));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// prettier-ignore
let text2 = ["Cuando", "quieras", "señor", "DeMille", "estoy", "lista", "para", "rodar",];

function inverso(array) {
  return array.reverse();
}

console.log(inverso(text2));

// 10. Crea una función que calcule el factorial de un número dado

const factorial = (n) => {
  if (n < 0) return "El factorial no está definido para números negativos.";
  if (n === 0 || n === 1) return 1;
  return (n *= factorial(n - 1));
};

console.log(factorial(5));
