/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// FOR

for (let a = 1; a <= 20; a++) {
  console.log(a);
}

// WHILE

let b = 1;
while (b <= 20) {
  console.log(b);
  b++;
}

// DO WHILE

let c = 1;
do {
  console.log(c);
  c++;
} while (c <= 20);

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// FOR

let sumaFor = 0;

for (let d = 1; d <= 100; d++) {
  sumaFor = sumaFor + d;
}

console.log(sumaFor);

// WHILE

let sumaWhile = 0;
let e = 1;

while (e <= 100) {
  sumaWhile = sumaWhile + e;
  e++;
}

console.log(sumaWhile);

// DO WHILE

let sumaDoWhile = 0;
let f = 1;

do {
  sumaDoWhile = sumaDoWhile + f;
  f++;
} while (f <= 100);

console.log(sumaDoWhile);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// FOR

for (let g = 1; g <= 50; g++) {
  if (g % 2 === 0) {
    console.log(g);
  }
}

// WHILE

let h = 1;

while (h <= 50) {
  if (h % 2 === 0) {
    console.log(h);
  }
  h++;
}

// DO WHILE

let i = 1;

do {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 50);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names = ["Marcos", "Delfina", "Héctor", "Florencia"];

for (const name of names) {
  console.log(name);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let text = "Hace mucho tiempo en una galaxia muy, muy lejana...";
text = text.toLowerCase().replace(/\s+/g, "");
let textArray = text.split("");

let counter = 0;

for (let k = 0; k <= textArray.length; k++) {
  if (
    textArray[k] === "a" ||
    textArray[k] === "e" ||
    textArray[k] === "i" ||
    textArray[k] === "o" ||
    textArray[k] === "u"
  ) {
    counter++;
  }
}

console.log(`La cadena de texto tiene ${counter} vocales.`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let numbers = [1, 2, 3, 4];
let product = 1;

for (const number of numbers) {
  product *= number;
}

console.log(product);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// FOR

for (let j = 1; j <= 10; j++) {
  num = j * 5;
  console.log(`5 x ${j} = ${num}`);
}

// FOR OF

let table5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const numb of table5) {
  result = numb * 5;
  console.log(`5 x ${numb} = ${result}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let newText = [];

for (let l = textArray.length - 1; l >= 0; l--) {
  newText.push(textArray[l]);
}

let reversedText = newText.join("");

console.log(reversedText);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let m = 0;
let o = 1;
let p = 0;
let Fibonacci = [0, 1];

while (Fibonacci.length < 10) {
  p = m + o;
  Fibonacci.push(p);
  m = o;
  o = p;
}

console.log(Fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let n = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

for (const ns of n) {
  if (ns > 10) {
    console.log(ns);
  }
}
