/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

str1 = "Marcos";
str2 = " Lombardo";

let nombre = str1.concat(str2);
console.log(nombre); // Marcos Lombardo

// 2. Muestra la longitud de una cadena de texto

let longitud = nombre.length;
console.log(longitud); // 15

// 3. Muestra el primer y último carácter de un string

let primeraLetra = nombre.charAt(0);
console.log(primeraLetra); // M

let ultimaLetra = nombre.charAt(nombre.length - 1);
console.log(ultimaLetra); // o

// 4. Convierte a mayúsculas y minúsculas un string

str3 = "El múrcielago voló sobre el acantilado.";

let todoMayusc = str3.toUpperCase();
console.log(todoMayusc); // EL MÚRCIELAGO VOLÓ SOBRE EL ACANTILADO.

let todoMinusc = todoMayusc.toLowerCase();
console.log(todoMinusc); // el múrcielago voló sobre el acantilado.

// 5. Crea una cadena de texto en varias líneas

let variasLineas = `Esta es una cadena de
texto de varias
líneas.`;
console.log(variasLineas); /* Esta es una cadena de
texto de varias
líneas. */

// 6. Interpola el valor de una variable en un string

let saludo = `Hola, mi nombre es ${str1}!`;
console.log(saludo); // Hola, mi nombre es Marcos!

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let guiones = str3.replaceAll(" ", "-");
console.log(guiones); // El-múrcielago-voló-sobre-el-acantilado.

// 8. Comprueba si una cadena de texto contiene una palabra concreta

let contiene = str3.includes("voló");
console.log(contiene);

// 9. Comprueba si dos strings son iguales

let comparacion = str1 === str2;
console.log(comparacion);

// 10. Comprueba si dos strings tienen la misma longitud

let comparacion2 = saludo.length === str2.length;
console.log(comparacion2);
