/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

let aboutJS = "Javascript basado en ECMA6 by Brais Moure \n ";
let nameTopic = `A simple topic bout JS`;
let resume = aboutJS.concat(nameTopic);
console.log(resume);

// 2. Muestra la longitud de una cadena de texto
console.log(aboutJS.length);
console.log(nameTopic.length);
console.log(resume.length);

// 3. Muestra el primer y último carácter de un string

console.log(resume[0]); // First string character
console.log(resume.charAt(resume.length - 1)); // Last string character

// 4. Convierte a mayúsculas y minúsculas un string

// toUpperCase
console.log(nameTopic.toUpperCase());

/* toLowerCase*/
console.log(aboutJS.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let simpleText = `This is a text
with many lines
That's funny
codebydoble`;

console.log(simpleText);

// 6. Interpola el valor de una variable en un string
let strInserted = "I love animals such us: fish, cats and dogs ";

let paragraphAbout;
paragraphAbout = strInserted + "by Yoandy Doble Herrera"; // Way 1
console.log(paragraphAbout);

// Way 2 - Template literals
let strLiteral = `Remember: ${paragraphAbout}`;
console.log(strLiteral);

// Way 3 - Concat
let txtToUpper = "DATE 24-10-2024 ".concat(strLiteral);
console.log(txtToUpper);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let exampleText =
  "A simple text with spaces is very easy to understand Javascript so let's continue";

let textGuide = exampleText.replaceAll(" ", "-"); // Way 1 using replace
console.log(textGuide);

// Way 2 using split and join
let textLong = "My name is Yoandy Doble Herrera";
let newText = textLong.split(" ").join("-");
console.log(newText);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let searchStr = "very 23";
console.log(exampleText.includes(searchStr));

// 9. Comprueba si dos strings son iguales

let str1 = "String number 1";
let str2 = "String number 2";
console.log(str1 === str2);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(str1.length === str2.length);
